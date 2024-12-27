const prisma = require("../prisma/client");
const { BadRequestError, NotFoundError } = require("../utils/errors");
const { validateEmail } = require("../utils/validators");

// Get All Users
const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    where: { deletedAt: null }, // Soft delete check
  });

  const userResponse = users.map((user) => {
    const { uuid, name, email } = user;
    return { uuid, name, email };
  });
  return { users: userResponse };
};

// Get User by UUID
const getUserByUuid = async (uuid) => {
  const user = await prisma.user.findUnique({ where: { uuid } });
  if (!user || user.deletedAt) {
    throw new NotFoundError("User not found");
  }

  const { name, email } = user;
  return { user: { name, email } };
};

// Update User
const updateUser = async (uuid, data) => {
  const { name, email } = data;

  if (!name && !email) {
    throw new BadRequestError("At least one field (name or email) is required");
  }

  validateEmail(email);

  const user = await prisma.user.findUnique({ where: { uuid } });
  if (!user || user.deletedAt) {
    throw new NotFoundError("User not found");
  }

  const updatedUser = await prisma.user.update({
    where: { uuid },
    data: { name, email },
  });

  const updatedUserResponse = {
    uuid: updatedUser.uuid,
    name: updatedUser.name,
    email: updatedUser.email,
  };

  return { updatedUser: updatedUserResponse };
};

// Soft Delete User
const softDeleteUser = async (uuid) => {
  const user = await prisma.user.findUnique({ where: { uuid } });
  if (!user) throw new NotFoundError("User not found");

  if (user.deletedAt) throw new NotFoundError("User already soft-deleted");

  await prisma.user.update({
    where: { uuid },
    data: { deletedAt: new Date() },
  });

  return true;
};

// Hard Delete User
const hardDeleteUser = async (uuid) => {
  const user = await prisma.user.findUnique({ where: { uuid } });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  await prisma.user.delete({ where: { uuid } });

  return true;
};

module.exports = {
  getAllUsers,
  getUserByUuid,
  updateUser,
  softDeleteUser,
  hardDeleteUser,
};

const prisma = require("../prisma/client");

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
};

const createUser = async (data) => {
  return await prisma.user.create({ data });
};

const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id: Number(id) }, data });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: Number(id) } });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

const prisma = require("../prisma/client");
const { validateEmail, validatePassword } = require("../utils/validators");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BadRequestError, NotFoundError } = require("../utils/errors");

const JWT_SECRET = process.env.JWT_SECRET;

// Register User
const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new BadRequestError("All fields are required");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new BadRequestError("Email is already registered");
  }

  validateEmail(email);

  validatePassword(password);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  const userResponse = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };

  return { user: userResponse, token };
};

// Login User
const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new BadRequestError("Email and password are required");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new BadRequestError("Invalid email or password");
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  const userResponse = {
    uuid: user.uuid,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };

  return { user: userResponse, token };
};

module.exports = { register, login };

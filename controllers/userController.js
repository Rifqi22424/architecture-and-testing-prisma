const userService = require("../services/userService");

// Get All Users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ message: "get all users success", data: users });
  } catch (error) {
    next(error);
  }
};

// Get User by UUID
const getUserByUuid = async (req, res, next) => {
  try {
    const { uuid } = req.params;
    const user = await userService.getUserByUuid(uuid);
    res.status(200).json({ message: "get user by uuid success", user });
  } catch (error) {
    next(error);
  }
};

// Update User
const updateUser = async (req, res, next) => {
  try {
    const { uuid } = req.params;
    const { name, email } = req.body;
    const updatedUser = await userService.updateUser(uuid, { name, email });
    res.status(200).json({ message: "update user success", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Soft Delete User
const softDeleteUser = async (req, res, next) => {
  try {
    const { uuid } = req.params;
    const result = await userService.softDeleteUser(uuid);
    res.status(200).json({ message: "soft delete success" });
  } catch (error) {
    next(error);
  }
};

// Hard Delete User
const hardDeleteUser = async (req, res, next) => {
  try {
    const { uuid } = req.params;
    const result = await userService.hardDeleteUser(uuid);
    res.status(200).json({ message: "hard delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserByUuid,
  updateUser,
  softDeleteUser,
  hardDeleteUser,
};

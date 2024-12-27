const authService = require('../services/authService');

// Register Controller
const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const { user, token } = await authService.register({ name, email, password });
        res.status(201).json({ message: "register success", data : { user, token} });
    } catch (error) {
        next(error); // Pass error to errorHandler middleware
    }
};

// Login Controller
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login({ email, password });
        res.status(200).json({ message: "login success", data: { user, token} });
    } catch (error) {
        next(error); // Pass error to errorHandler middleware
    }
};

module.exports = { register, login };

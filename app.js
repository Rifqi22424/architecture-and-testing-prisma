const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require('./middlewares/errorHandler');

const { authenticateToken } = require('./middlewares/jwtMiddleware');

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.use(authenticateToken);

app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;
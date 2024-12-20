const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

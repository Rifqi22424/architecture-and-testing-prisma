const validator = require("validator");
const { BadRequestError } = require("./errors");

// Validate email format
const validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    throw new BadRequestError("Invalid email format");
  }
};

// Validate password strength
const validatePassword = (password) => {
  const isPasswordSecure = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  if (!isPasswordSecure) {
    throw new BadRequestError(
      "Password must be at least 8 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"
    );
  }
};

module.exports = {
  validateEmail,
  validatePassword,
};

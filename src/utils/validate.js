export const checkValidData = (email, password, name, requireName = true) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const nameRegex = requireName
    ? /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)
    : true;

  if (requireName && !nameRegex) {
    return { isValid: false, message: "Invalid name format" };
  }
  if (!emailRegex) {
    return { isValid: false, message: "Invalid email format" };
  }
  if (!passwordRegex) {
    return {
      isValid: false,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character and be at least 8 characters long",
    };
  }

  return null;
};
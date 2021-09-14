import config from "../config";

const register = async (
  email: string,
  password: string,
  name: string
): Promise<string> => {
  if (!email && !password && !name) {
    return "All fields are required.";
  }

  if (!name && !email) {
    return "Name and email are required.";
  }

  if (!name && !password) {
    return "Name and password are required.";
  }

  if (!name) {
    return "Name is required.";
  }

  if (!email && !password) {
    return "Email and password are required.";
  }

  if (!email) {
    return "Email is required.";
  }

  if (!password) {
    return "Password is required.";
  }

  if (password.length < 8) {
    return "Your password should contain at least 8 characters.";
  }

  try {
    const response = await fetch(`${config.url}/users/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password, name: name }),
    });

    const result = await response.json();

    if (response.status === 201) {
      return "Your registration was successful.";
    } else {
      return result.message;
    }
  } catch (err: any) {
    return err.message;
  }
};

export { register };

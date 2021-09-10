import config from "../config";
import { LoginInfo } from "../interfaces/logininfo";

const login = async (email: string, password: string): Promise<LoginInfo> => {
  if (!email && !password) {
    return { error: "Email and password are required." };
  }

  if (email && !password) {
    return { error: "Password is required." };
  }

  if (password && !email) {
    return { error: "Email is required." };
  }

  //el akarjuk rejteni a jelszót?
  try {
    const response = await fetch(`${config.url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const result = await response.json();

    if (response.status === 200) {
      return { name: result.name, token: result.token, id: result.id };
    } else {
      return { error: result.message };
    }
  } catch (err) {
    return { error: err.message };
  }
};

export { login };

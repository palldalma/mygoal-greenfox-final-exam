export interface ErrorHandling {
  status: string;
  message: string;
}

export const checkPassword = (inputPassword: string): boolean => {
  return inputPassword.length > 7;
};

export const createErrorPromise = (message: string): Promise<ErrorHandling> => {
  return new Promise((resolve) =>
    resolve({ status: "error", message: message })
  );
};

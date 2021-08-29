import { pool, db } from "../data/connection";
import { Request, Response } from "express";
import config from "../config";
import { DbResult } from "../models/data/db-results";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  createErrorPromise,
  ErrorHandling,
  checkPassword,
} from "./error-service";
import {
  ExistingUserToAuthenticate,
  UserInfoPostLogin,
} from "../models/data/user";

const register = async (req: Request): Promise<Response | ErrorHandling> => {
  const { email, password, name } = req.body;

  //Errors: input is not correct or empty
  if (!email && !password) {
    return createErrorPromise("Username and password are required.");
  } else if (password && !email) {
    return createErrorPromise("Username is required.");
  } else if (email && !password) {
    return createErrorPromise("Password is required.");
  } else if (!checkPassword(password)) {
    return createErrorPromise("Password must be at least 8 characters.");
  } else {
    //checking if username is still available
    const data: DbResult = await db
      .query(`SELECT * FROM mygoal.user u WHERE u.email = ?`, [email])
      .catch((error) => {
        throw new Error(`database error: ${error.message}`);
      });

    if (data.results.length > 0) {
      return createErrorPromise("Your email is already registered.");
    }

    //generate the bycrypted password
    const saltRounds = await bcrypt.genSalt();

    const hashPromise = () =>
      new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      });

    const hashedPassword = await hashPromise().catch(() => {
      throw new Error("hashing is not working");
    });
    //posting data to db
    const poolPromise = (): Promise<Response> =>
      new Promise((resolve) => {
        pool.getConnection((error, connection) => {
          if (error) {
            throw new Error(`MySQL connection error: ${error.message}`);
          }

          connection.beginTransaction((error) => {
            if (error) {
              throw new Error(`MySQL transaction error: ${error.message}`);
            }
            //add the user's data to the user table

            let userid;

            connection.query(
              `INSERT INTO mygoal.user (email, password, name) VALUES (?,?,?)`,
              [email, hashedPassword, name],
              (error, result) => {
                if (error) {
                  return connection.rollback(() => {
                    throw new Error(`database error: ${error.message}`);
                  });
                }

                // query for the response
                connection.query(
                  `SELECT id, email, name FROM user WHERE email = ?`,
                  [email],
                  (error, result) => {
                    if (error) {
                      return connection.rollback(() => {
                        throw new Error(`database error: ${error.message}`);
                      });
                    }
                    const response: Response = result[0];

                    //add inital resources to resource table

                    const initialLives = 5;
                    const initialGem = 0;

                    connection.query(
                      `INSERT INTO resource (lives, gem, userid) VALUES (?,?,?);`,
                      [initialLives, initialGem, result[0].id],
                      (error) => {
                        if (error) {
                          return connection.rollback(() => {
                            throw new Error(`database error: ${error.message}`);
                          });
                        }
                      }
                    );

                    connection.commit((error) => {
                      if (error) {
                        return connection.rollback(() => {
                          throw new Error(`database error: ${error.message}`);
                        });
                      }
                      resolve(response);
                    });
                  }
                );
              }
            );

            connection.release();
          });
        });
      });

    return await poolPromise().catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });
  }
};

const login = async (req: Request) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return createErrorPromise("Username and password are required.");
  } else if (password && !email) {
    return createErrorPromise("Username is required.");
  } else if (email && !password) {
    return createErrorPromise("Password is required.");
  } else if (!checkPassword(password)) {
    return createErrorPromise("Password must be at least 8 characters.");
  } else {
    const data: DbResult = await db
      .query(
        `SELECT id, password, name FROM mygoal.user WHERE user.email = ?;`,
        [email]
      )
      .catch((error) => {
        throw new Error(error.message);
      });

    //checking if data.results === undefined
    if (!data.results) {
      return createErrorPromise("Email or password is incorrect.");
    }

    if (data.results.length === 0) {
      return createErrorPromise("Email or password is incorrect.");
    }

    return new Promise((resolve, reject) => {
      const result = (data as DbResult)
        .results[0] as ExistingUserToAuthenticate;

      if (result) {
        bcrypt.compare(password, result.password, (err, bcryptResult) => {
          if (err) {
            reject(new Error(err.message));
          }
          if (bcryptResult) {
            const user = { email: email, id: result.id, name: result.name };
            const secret = config.tokenSecrets.access as jwt.Secret;
            const accessToken = jwt.sign(user, secret);

            resolve({
              status: "ok",
              token: accessToken,
              id: result.id,
              name: result.name,
            });
          } else {
            resolve({
              status: "error",
              message: "Username or password is incorrect.",
            });
          }
        });
      }
    });
  }
};

export const userService = {
  register,
  login,
};

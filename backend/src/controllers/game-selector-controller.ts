// import { Request, Response, NextFunction } from "express";
// // import { userService } from "../services/user-service";
// import { ErrorHandling } from "../services/error-service";

// export const translationController = {
//   async pullQuiz(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): Promise<void> {
//     const data = await userService
//       .login(req)
//       .then((data) => {
//         if ((data as ErrorHandling).status === "error") {
//           res.status(400).json(data);
//         } else {
//           console.log(data);
//           res.status(200).json(data);
//         }
//       })
//       .catch((err) => res.status(500).end("internal server error"));
//   },
// };

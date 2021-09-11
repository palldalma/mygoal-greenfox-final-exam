// import { Answer } from "../interfaces/courseinfo";
// import config from "../config";
// import {
//   ResourceInfo,
//   updateResourceRequest,
// } from "../interfaces/resourceinfo";

// const checkAnswer = async (
//   answer: Answer,
//   token: string | undefined,
//   userid: string | undefined,
//   gem: number | undefined,
//   lives: number | undefined
// ) => {
//   if (!userid || !lives) {
//     return { error: "Userid or lives is missing to check the answer." };
//   }

//   if (answer.iscorrect === 1) {
//     const response = await fetch(`${config.url}/users/resources/update`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         userid: userid,
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         gem: gem,
//         lives: lives - 1,
//       }),
//     });
//     const result: ResourceInfo = await response.json();
//     if (response.status === 200) {
//       return result;
//     } else {
//       return { error: "the wrong answer did not subtract from lives" };
//     }
//   }
// };

// export { checkAnswer };
export {};

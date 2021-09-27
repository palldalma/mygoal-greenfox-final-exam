import { Answer } from "../interfaces/courseinfo";
import { updateResources } from "./resource-service";

const checkAnswer = async (
  answer: Answer,
  token: string | undefined,
  userid: string | undefined,
  gem: number | undefined,
  lives: number | undefined
) => {
  if (!userid || lives === undefined || !token || gem === undefined) {
    return { error: "Resources could not be updated." };
  }

  let updatedLives: number;
  let updatedGem: number;

  if (answer.iscorrect === (0 as number) && lives > 0) {
    updatedLives = lives - 1;
    updatedGem = gem + 10;
    updateResources(
      { userid: userid, lives: updatedLives, gem: updatedGem },
      token
    );
    return { gem: updatedGem, lives: updatedLives };
  }
  if (answer.iscorrect === 1) {
    updatedLives = lives;
    updatedGem = gem + 10;
    updateResources(
      { userid: userid, lives: updatedLives, gem: updatedGem },
      token
    );
    return { gem: updatedGem, lives: updatedLives };
  }
};
export { checkAnswer };

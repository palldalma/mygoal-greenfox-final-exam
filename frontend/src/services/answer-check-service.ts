import { Answer } from "../interfaces/courseinfo";
import { updateResources } from "./resource-service";
import { updateResourceState } from "../store/actions/resourceAction";

const checkAnswer = async (
  answer: Answer,
  token: string | undefined,
  userid: string | undefined,
  gem: number | undefined,
  lives: number | undefined
) => {
  if (!userid || !lives || !token || !gem) {
    return;
  }

  let updatedLives = lives - 1;

  if (answer.iscorrect === 0) {
    updateResources({ userid: userid, lives: updatedLives, gem: gem }, token);
    return { gem: gem, lives: updatedLives };
  }
};

export { checkAnswer };

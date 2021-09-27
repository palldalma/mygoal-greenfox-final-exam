import config from "../config";

const deleteQuestion = async (
  question: string,
  level: string,
  token: string
) /*: Promise<LoginInfo> */ => {
  if (!question || !level) {
    return { error: "Cannot delete without values." };
  }

  try {
    const response = await fetch(`${config.url}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ question: question, level: level }),
    });

    if (response.status === 200) {
      return { success: question };
    } else {
      return { error: "Deletion failed." };
    }
  } catch (err: any) {
    return { error: err.message };
  }
};

export { deleteQuestion };

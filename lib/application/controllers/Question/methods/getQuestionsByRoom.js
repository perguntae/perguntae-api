import QuestionService from "../../../../domain/questions/QuestionService";

const getQuestionsByRoom = (room) => {
  return new Promise((resolve, reject) => {
    QuestionService.getQuestions(room)
      .then(({ questions }) => resolve({ questions }))
      .catch(err => reject(err));
  });
};

export default getQuestionsByRoom;
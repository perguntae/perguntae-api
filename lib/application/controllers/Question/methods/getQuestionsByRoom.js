import QuestionService from "../../../../domain/questions/QuestionService";

const questionService = new QuestionService();

const getQuestionsByRoom = (room) => {
  return new Promise((resolve, reject) => {
    questionService.getQuestions(room)
      .then(({ questions }) => resolve({ questions }))
      .catch(err => reject(err));
  });
};

export default getQuestionsByRoom;
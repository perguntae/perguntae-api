import QuestionModel from './../Question';

const getQuestions = (QuestionDAO, { room }) => {
  return new Promise((resolve, reject) => {
    QuestionDAO.getQuestions(room)
    .then(({ questions }) => {
      const questionsFound = questions.map(q => new QuestionModel(q));
      resolve(questionsFound);
    })
  });
};

export default getQuestions;
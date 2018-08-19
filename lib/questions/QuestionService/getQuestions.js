const getQuestions = (QuestionDAO, { room }) => {
  return new Promise((resolve, reject) => {
    QuestionDAO.getQuestions(room)
    .then(({ questions }) => {
      const questionsFound = questions.map(q => new Question(q));
      resolve(questionsFound);
    })
  });
};

export default getQuestions;
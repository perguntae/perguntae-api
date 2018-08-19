const saveQuestion = (QuestionDAO, { question }) => {
  return new Promise((resolve, reject) => {
    QuestionDAO.saveQuestion(question)
      .then(() => {
        resolve(question)
      })
      .catch(err => reject(err));
  });
};

export default saveQuestion;
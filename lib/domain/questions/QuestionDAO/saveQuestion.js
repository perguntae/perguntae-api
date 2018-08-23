import QuestionModel from './questionModel';

const saveExistingQuestion = (question) => {
  return new Promise((resolve, reject) => {
    QuestionModel.findOneAndUpdate({ id: question.id }, question, (err, questionUpdated) => {
      if (err) reject(err);
      resolve({ question: questionUpdated });
    });
  });
};

const saveNewQuestion = (question) => {
  return new Promise((resolve, reject) => {
    const newQuestion = new QuestionModel(question);
    newQuestion.save((err) => {
      if (err) reject(err)
      resolve({ question: newQuestion });
    });
  });
};

export default function() {
  return (question) => question.id ? saveExistingQuestion(question) : saveNewQuestion(question);
};

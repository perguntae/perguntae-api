import QuestionModel from './questionModel';

export default function() {
  return (question) => {    
    return new Promise((resolve, reject) => {
      const newQuestion = new QuestionModel(question);
      newQuestion.save((err) => {
        if (err) reject(err)
        resolve({ question: newQuestion });
      });
    });
  };
};

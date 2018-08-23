import Question from './../../../domain/questions/Question';
import QuestionService from './../../../domain/questions/QuestionService';

const createQuestion = ({ room, title, description, owner }) => {
  
  const newQuestion = new Question({ room, title, description, owner });

  return new Promise((resolve, reject) => {
    QuestionService.saveQuestion(newQuestion)
      .then(() => resolve({ question: newQuestion }))
      .catch(err => reject(err));
  });

};

export default createQuestion;
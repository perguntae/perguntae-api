import Question from './../../../domain/questions/Question';
import QuestionService from './../../../domain/questions/QuestionService';

const createQuestion = ({ room, title, description }) => {
  
  const newQuestion = new Question({ title, description, room });

  return new Promise((resolve, reject) => {
    QuestionService.saveQuestion(newQuestion)
      .then(() => resolve({ question: newQuestion }))
      .catch(err => reject(err));
  });

};

export default createQuestion;
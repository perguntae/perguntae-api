import Question from './../../../domain/questions/Question';
import QuestionService from './../../../domain/questions/QuestionService';

const questionService = new QuestionService();

const createQuestion = ({ room, title, description }) => {
  
  const newQuestion = new Question({ title, description, room });

  return new Promise((resolve, reject) => {
    questionService.saveQuestion(newQuestion)
      .then(() => resolve({ question: newQuestion }))
      .catch(err => reject(err));
  });

};

export default createQuestion;
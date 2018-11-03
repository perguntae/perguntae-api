import QuestionDAO from './../QuestionDAO';
import getQuestions from './getQuestions';
import saveQuestion from './saveQuestion';

class QuestionService {
  static getQuestions(room) {
    return getQuestions(QuestionDAO, { room });
  }
  static saveQuestion(question) {
    return saveQuestion(QuestionDAO, { question });
  }
}

export default QuestionService;

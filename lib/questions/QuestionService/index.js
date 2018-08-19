import QuestionDAO from './../QuestionDAO';
import getQuestions from './getQuestions';
import saveQuestion from './saveQuestion';

class QuestionService {
  getQuestions(room) {
    return getQuestions(QuestionDAO, { room });
  }
  saveQuestion(question) {
    return saveQuestion(QuestionDAO, { question });
  }
}

export default QuestionService;

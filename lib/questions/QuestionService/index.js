import QuestionDAO from './../QuestionDAO';
import getQuestions from './getQuestions';
import saveQuestion from './saveQuestion';

class QuestionService {
  getQuestions(room) {
    return getQuestions(QuestionDAO, { room });
  }
  saveQuestion(room, question) {
    return saveQuestion(QuestionDAO, room, question);
  }
}

export default QuestionService;

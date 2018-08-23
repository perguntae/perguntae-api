import createQuestion from './methods/createQuestion';
import getQuestionsByRoom from './methods/getQuestionsByRoom';

class QuestionController {

  static getQuestionsByRoom(room) {
    return getQuestionsByRoom(room);
  }

  static createQuestion({ room, title, description }) {
    return createQuestion({ room, title, description });
  }

}

export default QuestionController;
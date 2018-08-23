import createQuestion from './methods/createQuestion';
import getQuestionsByRoom from './methods/getQuestionsByRoom';

class QuestionController {

  static getQuestionsByRoom(room) {
    return getQuestionsByRoom(room);
  }

  static createQuestion({ room, title, description, owner }) {
    return createQuestion({ room, title, description, owner });
  }

}

export default QuestionController;
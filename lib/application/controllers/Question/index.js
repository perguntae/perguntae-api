import createQuestion from './methods/createQuestion';
import getQuestionsByRoom from './methods/getQuestionsByRoom';

class QuestionController {

  getQuestionsByRoom(room) {
    return getQuestionsByRoom(room);
  }

  createQuestion({ room, title, description }) {
    return createQuestion({ room, title, description });
  }

}

export default QuestionController;
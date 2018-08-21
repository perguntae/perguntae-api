import RoomService from '../../../domain/rooms/RoomService';
import QuestionService from './../../../domain/questions/QuestionService';

const getRoomAndQuestions = ({ room }) => {
  const roomService = new RoomService();
  const questionService = new QuestionService();

  return new Promise((resolve, reject) => {
    Promise.all([
      roomService.getByHash(room),
      questionService.getQuestions(room)
    ])    
      .then(([ roomObject, questionObject ]) => {
        resolve(Object.assign({}, roomObject, questionObject));
      })
      .catch(err => reject(err));
  });

};

export default getRoomAndQuestions;
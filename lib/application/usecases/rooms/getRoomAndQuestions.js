import RoomService from '../../../domain/rooms/RoomService';
import QuestionService from './../../../domain/questions/QuestionService';

const getRoomAndQuestions = ({ room }) => {

  return new Promise((resolve, reject) => {
    Promise.all([
      RoomService.getByHash(room),
      QuestionService.getQuestions(room)
    ])
      .then(([ roomObject, questionObject ]) => {
        resolve(Object.assign({}, roomObject, { questions: questionObject })); 
      })
      .catch(err => reject(err));
  });

};

export default getRoomAndQuestions;
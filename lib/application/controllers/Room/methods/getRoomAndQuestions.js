import getRoomAndQuestions from './../../../usecases/rooms/getRoomAndQuestions';

const getRoomAndQuestionsMethod = (hash) => {
  return new Promise((resolve, reject) => {
    getRoomAndQuestions({ room: hash })
      .then((room) => resolve({ room }))
      .catch(err => reject(err));
  });
};

export default getRoomAndQuestionsMethod;
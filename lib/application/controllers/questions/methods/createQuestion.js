import createQuestion from './../../../usecases/questions/createQuestion';

const createQuestionMethod = ({ room, title, description }) => {
  return new Promise((resolve, reject) => {
    createQuestion({ room, title, description })
      .then(({ question }) => resolve({ question }))
      .catch(err => reject(err));
  });
};

export default createQuestionMethod;
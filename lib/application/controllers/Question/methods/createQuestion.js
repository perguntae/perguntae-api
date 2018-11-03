import createQuestion from './../../../usecases/questions/createQuestion';

const createQuestionMethod = ({ room, title, description, owner }) => {
  return new Promise((resolve, reject) => {
    createQuestion({ room, title, description, owner })
      .then(({ question }) => resolve({ question }))
      .catch(err => reject(err));
  });
};

export default createQuestionMethod;
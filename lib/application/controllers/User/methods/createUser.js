import createUser from './../../../usecases/users/createUser';

const createUserMethod = ({ username, email, password, role, firstname, lastname }) => {
  return new Promise((resolve, reject) => {
    createUser({ username, email, password, role, firstname, lastname })
      .then(({ user }) => resolve({ user }))
      .catch(err => reject(err));
  });
};

export default createUserMethod;
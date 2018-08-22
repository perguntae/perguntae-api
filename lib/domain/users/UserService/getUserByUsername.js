import UserModel from './../User';

const getUserByUsername = (UserDAO, { username }) => {
  return new Promise((resolve, reject) => {
    UserDAO.getUserByUsername(username)
      .then(({ user }) => {
        const userFound = new UserModel(user);
        resolve(userFound);
      })
      .catch(err => reject(err));
  });
};

export default getUserByUsername;
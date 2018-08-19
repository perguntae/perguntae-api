import UserModel from './../User';

const getUserByEmail = (UserDAO, { email }) => {
  return new Promise((resolve, reject) => {
    UserDAO.getUserByEmail(email)
      .then(({ user }) => {
        const userFound = new UserModel(user);
        resolve(userFound);
      })
      .catch(err => reject(err));
  });
};

export default getUserByEmail;
import UserModel from './../User';

const getUsers = (UserDAO) => {
  return new Promise((resolve, reject) => {
    UserDAO.getUsers()
      .then(({ users }) => {
        const usersFound = users.map(u => new UserModel(u));
        resolve(usersFound);
      })
      .catch(err => reject(err));
  });
};

export default getUsers;
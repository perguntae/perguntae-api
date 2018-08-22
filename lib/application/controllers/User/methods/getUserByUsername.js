import UserService from './../../../../domain/users/UserService';

const getByUsername = (username) => {
  return new Promise((resolve, reject) => {
    UserService.getUserByUsername(username)
      .then(({ user }) => resolve({ user }))
      .catch(err => reject(err));
  });
};

export default getByUsername;
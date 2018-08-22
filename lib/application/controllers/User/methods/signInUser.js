import User from './../../../../domain/users/User';
import UserService from './../../../../domain/users/UserService';
import { encrypt, createJWT } from './../../../../utils';

const signInUser = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    UserService.getUserByUsername(username)
      .then(({ user }) => {
        const userFound = new User(user);
        if (userFound.password !== encrypt(password)) {
          reject({ status: 'ERROR', message: 'Username or password invalid.' });
        }
        createJWT(JSON.stringify(userFound))
          .then(token => resolve({ token }))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
};

export default signInUser;
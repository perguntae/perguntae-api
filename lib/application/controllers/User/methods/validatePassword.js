import User from './../../../../domain/users/User';

const validatePasswordMethod = ({ user, password }) => {
  return new Promise((resolve, reject) => {
    const userFound = new User(user);
    const valid = true;
    userFound.validatePassword(password) 
      ? resolve({ valid })
      : reject({ valid: !valid });
  });
};

export default validatePasswordMethod;
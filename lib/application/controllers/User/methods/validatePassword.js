import User from './../../../../domain/users/User';

const validatePasswordMethod = (userData, password) => {
  return new Promise((resolve, reject) => {
    const user = new User(userdata);
    const valid = true;
    user.validatePassword(password) 
      ? resolve({ valid })
      : reject({ valid: !valid });
  });
};

export default validatePasswordMethod;
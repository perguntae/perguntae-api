import UserModel from './userModel';

export default function() {
  return (username) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ username }, (err, user) => {
        if (err) reject(err)
        resolve({ user });
      });
    });
  };
};

import UserModel from './userModel';

export default function() {
  return (email) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ email }, (err, user) => {
        if (err) reject(err)
        resolve({ user });
      });
    });
  };
};

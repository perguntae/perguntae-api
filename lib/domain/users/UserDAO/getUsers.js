import UserModel from './userModel';

export default function() {
  return () => {
    return new Promise((resolve, reject) => {
      UserModel.find({}, (err, users) => {
        if (err) reject(err)
        resolve({ users });
      });
    });
  };
};

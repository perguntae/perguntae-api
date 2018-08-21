import UserModel from './userModel';

export default function() {
  return (user) => {    
    return new Promise((resolve, reject) => {
      const newUser = new UserModel(user);
      newUser.save((err) => {
        if (err) reject(err)
        resolve({ user: user.email });
      });
    });
  };
};

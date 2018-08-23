import UserModel from './userModel';

const saveExistingUser = (user) => {
  return new Promise((resolve, reject) => {
    UserModel.findOneAndUpdate({ id: user.id }, user, (err, userUpdated) => {
      if (err) reject(err);
      resolve({ user: userUpdated });
    });
  });
};

const saveNewUser = (user) => {
  return new Promise((resolve, reject) => {
    const newUser = new UserModel(user);
    newUser.save((err) => {
      if (err) reject(err)
      resolve({ user: user.email });
    });
  });  
};

export default function() {
  return (user) => user.id ? saveExistingUser(user) : saveNewUser(user);
};

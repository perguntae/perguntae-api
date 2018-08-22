import User from '../../../domain/users/User';
import UserService from '../../../domain/users/UserService';
import { encrypt } from './../../../utils';


const createUser = ({ firstname='', lastname='', username=false, email=false, password=false, role=false }) => {
  const encryptedPassword = encrypt(password);
  const newUser = new User({
    firstname,
    lastname,
    username,
    email,
    password: encryptedPassword,
    role
  });

  
  newUser.activate();

  return new Promise((resolve, reject) => {
    UserService.saveUser(newUser)
      .then(() => {
        console.log(newUser);
        resolve({ user: newUser })
      })
      .catch(err => reject(err));
  });

};

export default createUser;
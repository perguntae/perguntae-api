import saveUser from './saveUser';
import getUsers from './getUsers';
import getUserByUsername from './getUserByUsername';
import getUserByEmail from './getUserByEmail';

export default {
  saveUser: saveUser(),
  getUsers: getUsers(),
  getUserByUsername: getUserByUsername(),
  getUserByEmail: getUserByEmail()
};

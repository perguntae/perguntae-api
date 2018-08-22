import UserDAO from './../UserDAO';
import getUsers from './getUsers';
import saveUser from './saveUser';
import getUserByEmail from './getUserByEmail';
import getUserByUsername from './getUserByUsername';

class QuestionService {
  static getUsers() {
    return getUsers(UserDAO);
  }
  static getUserByEmail(email) {
    return getUserByEmail(UserDAO, { email })
  }
  static getUserByUsername(username) {
    return getUserByUsername(UserDAO, { username })
  }
  static saveUser(user) {
    return saveUser(QuestionDAO, { user });
  }
}

export default QuestionService;

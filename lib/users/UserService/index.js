import UserDAO from './../UserDAO';
import getUsers from './getUsers';
import saveUser from './saveUser';
import getUserByEmail from './getUserByEmail';
import getUserByUsername from './getUserByUsername';

class QuestionService {
  getUsers() {
    return getUsers(UserDAO);
  }
  getUserByEmail(email) {
    return getUserByEmail(UserDAO, { email })
  }
  getUserByUsername(username) {
    return getUserByUsername(UserDAO, { username })
  }
  saveUser(user) {
    return saveUser(QuestionDAO, { user });
  }
}

export default QuestionService;

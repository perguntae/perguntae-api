import createUser from './methods/createUser';
import validatePassword from './methods/validatePassword';
import getUserByUsername from './methods/getUserByUsername';

class UserController {

  static createUser({ username, email, password, role, firstname, lastname }) {
    return createUser({ username, email, password, role, firstname, lastname });
  }

  static validatePassword({ user, password }) {
    return validatePassword({ user, password });
  }

  static getUserByUsername(username) {
    return getUserByUsername(username);
  }

}

export default UserController;
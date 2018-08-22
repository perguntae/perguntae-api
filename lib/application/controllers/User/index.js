import createUser from './methods/createUser';
import validatePassword from './methods/validatePassword';
import signInUser from './methods/signInUser';

class UserController {

  static createUser({ username, email, password, role, firstname, lastname }) {
    return createUser({ username, email, password, role, firstname, lastname });
  }

  static validatePassword({ user, password }) {
    return validatePassword({ user, password });
  }

  static signInUser({ username, password }) {
    return signInUser({ username, password });
  }

}

export default UserController;
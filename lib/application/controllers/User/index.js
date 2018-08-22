import createUser from './methods/createUser';

class UserController {

  createUser({ username, email, password, role, firstname, lastname }) {
    return createUser({ username, email, password, role, firstname, lastname });
  }
}

export default UserController;
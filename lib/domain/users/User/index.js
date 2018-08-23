import { encrypt } from './../../../utils';

class User {
  
  constructor({ firstname='', lastname='', username=false, email=false, password=false, role, id }) {
    if (!username) throw new Error('USER ERROR: No username')
    if (!email) throw new Error('USER ERROR: No email')
    if (!password) throw new Error('USER ERROR: No password')

    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = id;
    this.activated = false;

  }

  activate() {
    this.activated = true;
    return this.activated;
  }

  validatePassword(pass) {
    return encrypt(pass) === this.password;
  }

}

export default User;

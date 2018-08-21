class User {
  
  constructor({ firstname='', lastname='', username=false, email=false, password=false, role=false }) {
    if (!username) throw new Error('USER ERROR: No username')
    if (!email) throw new Error('USER ERROR: No email')
    if (!password) throw new Error('USER ERROR: No password')
    if (!role) throw new Error('USER ERROR: No role')

    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.activated = false;

  }

  activate() {
    this.activated = true;
    return this.activated;
  }

}

export default User;

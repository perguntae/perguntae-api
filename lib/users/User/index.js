class User {
  
  constructor({ firstname='', lastname='', username=false, email=false, password=false }) {
    if (!username) throw new Error('USER ERROR: No username')
    if (!email) throw new Error('USER ERROR: No email')
    if (!password) throw new Error('USER ERROR: No passwordame')

    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.activated = false;
  }

  activate() {
    this.activated = true;
    return this.activated;
  }

}

export default User;

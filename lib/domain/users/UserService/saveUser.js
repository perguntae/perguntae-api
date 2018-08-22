const saveUser = (UserDAO, { user }) => {
  return new Promise((resolve, reject) => {
    console.log('here we have object', user);
    UserDAO.saveUser(user)
      .then(() => {
        console.log('a little bit deeper', user);
        resolve({ user: user.email })
      })
      .catch(err => reject(err));
  });
};

export default saveUser;
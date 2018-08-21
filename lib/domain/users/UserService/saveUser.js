const saveUser = (UserDAO, { user }) => {
  return new Promise((resolve, reject) => {
    UserDAO.saveUser(user)
      .then(() => {
        resolve({ user: user.email })
      })
      .catch(err => reject(err));
  });
};

export default saveUser;
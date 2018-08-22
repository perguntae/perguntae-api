import UserController from './../../../../application/controllers/User';

const signInRoute = ({ request, response }) => {
  const { username, password } = request.body;
  UserController.signInUser({ username, password })
    .then(({ token }) => {
      resolve({ token });
    })
    .catch(err => reject(err));
};

export default signInRoute;
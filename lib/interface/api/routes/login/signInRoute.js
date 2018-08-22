import UserController from './../../../../application/controllers/User';

const signInRoute = ({ request, response }) => {
  const { username, password } = request.body;
  UserController.signInUser({ username, password })
    .then(({ token }) => {
      response.json({ token });
    })
    .catch(err => response.status(500).json(err));
};

export default signInRoute;
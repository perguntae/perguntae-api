import UserController from './../../../../application/controllers/User';

const signUpRoute = ({ request, response }) => {
  const { username, password, email, firstname, lastname } = request.body;
  UserController.createUser({ username, password, email, firstname, lastname })
    .then(({ user }) => {
      response.json({ 
        msg: 'Usuário criado com sucesso',
        user
      });
    })
    .catch(err => response.json(err));
};

export default signUpRoute;
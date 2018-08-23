import QuestionController from './../../../../application/controllers/Question';

export default ({ request, response }) => {

  const { question, description } = request.body;
  const room = request.params.hash;
  const owner = request.user.id;

  QuestionController.createQuestion({ room, title: question, description, owner })
    .then(({ question }) => response.json({
      status: 'ok',
      msg: 'Question created.',
      question
    }))
    .catch(err => response.json(err));

}
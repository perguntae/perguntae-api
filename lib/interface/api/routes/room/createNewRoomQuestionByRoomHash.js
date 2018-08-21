import QuestionController from './../../../../application/controllers/Question';
const questionController = new QuestionController();

export default ({ request, response }) => {

  const { question, description } = request.body;
  const room = request.params.hash;

  questionController.createQuestion({ room, question, description })
    .then(({ question }) => response.json({
      status: 'ok',
      msg: 'Question created.',
      question
    }))
    .catch(err => response.json(err));

}
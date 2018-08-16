import Question from './../../questions';

export default ({ request, response }) => {

  const { question, description } = request.body;
  const hash = request.params.hash;

  Question.createQuestion(hash, { question, description })
    .then(({ question }) => response.json({
      status: 'ok',
      msg: 'Question created.',
      data: { question }
    }))
    .catch(err => response.json(err));

}
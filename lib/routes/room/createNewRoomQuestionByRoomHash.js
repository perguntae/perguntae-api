import Question from './../../questions';

export default ({ request, response }) => {

  const { question, desc } = request.body;
  const hash = request.params.hash;

  Question.createQuestion(hash, { question, desc })
    .then(({ question }) => response.json({
      status: 'ok',
      msg: 'Question created.',
      data: { question }
    }))
    .catch(err => response.json(err));

}
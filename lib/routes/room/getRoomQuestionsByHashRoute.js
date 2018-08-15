import Question from './../../questions';

export default ({ request, response }) => {

  const hash = request.params.hash;

  Question.getQuestions(hash)
      .then((questions) => response.json({
        status: 'ok',
        data: { questions }
      }))
      .catch(response.json);

}
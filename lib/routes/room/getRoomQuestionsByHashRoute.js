import QuestionService from './../../questions/QuestionService';

export default ({ request, response }) => {
  const room = request.params.hash;
  QuestionService.getQuestions(room)
    .then((questions) => response.json({
      status: 'ok',
      data: { questions }
    }))
    .catch(response.json);
}
import QuestionService from './../../questions/QuestionService';

const questionService = new QuestionService();

export default ({ request, response }) => {
  const room = request.params.hash;
  questionService.getQuestions(room)
    .then((questions) => response.json({
      status: 'ok',
      data: { questions }
    }))
    .catch(response.json);
}
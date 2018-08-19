import Question from './../../questions/Question';
import QuestionService from './../../questions/QuestionService';

const questionService = new QuestionService();

export default ({ request, response }) => {

  const { question, description } = request.body;
  const room = request.params.hash;

  const newQuestion = new Question({ title: question, description, room });

  questionService.saveQuestion(newQuestion)
    .then(({ question }) => response.json({
      status: 'ok',
      msg: 'Question created.',
      data: { question }
    }))
    .catch(err => response.json(err));

}
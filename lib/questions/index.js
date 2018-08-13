import createQ from './createQ';
import getQ from './getQ';
import getQs from './getQs';

export const createQuestion = createQ();
export const getQuestion = getQ();
export const getQuestions = getQs();

export default {
  createQuestion,
  getQuestions,
  getQuestion
};

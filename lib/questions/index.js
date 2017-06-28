import { getHash } from './../utils';
import Database from './../db';

//methods
import createQ from './createQ';
import getQ from './getQ';
import getQs from './getQs';

const Questions = new Database({ table: 'questions' });

export const createQuestion = createQ(Questions, getHash);
export const getQuestion = getQ(Questions);
export const getQuestions = getQs(Questions);

export default {
  createQuestion,
  getQuestions,
  getQuestion
};

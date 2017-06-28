import { getHash } from './../utils';
import Database from './../db';

const Questions = new Database({ table: 'questions' });

export const createQuestion = (hash, { question, desc }) => {
  const newQuestion = {
    question: {
      room: hash,
      text: question,
      desc
    }
  };

  newQuestion.question.hash = getHash([hash, question.substring(0, 10)]);

  return new Promise((resolve, reject) => {
    Questions.insert(newQuestion)
      .then(({ changes }) => resolve({ question: changes[0].new_val.question }))
      .catch(reject);
  });
};

export const getQuestion = (qHash) => {
  return new Promise((resolve, reject) => {
    Rooms.filter({ question: { hash: qHash } })
      .then(resolve)
      .catch(reject);
  });
};

export const getQuestions = (rHash) => {
  return new Promise((resolve, reject) => {
    Questions.filter({ question: { room: rHash } })
      .then((result) => {
        result.toArray()
          .then(questions => resolve(questions.map(q => q.question)))
          .catch(reject);
      })
      .catch(reject);
  });
};

export default {
  createQuestion,
  getQuestions,
  getQuestion
};

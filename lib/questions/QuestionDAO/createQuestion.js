import Question from './questionModel';
import { getHash } from './../../utils';

export default function() {
  return (hash, { question, description }) => {    
    return new Promise((resolve, reject) => {      
      Question.create({
        room: hash,
        title: question,
        description,
        hash: getHash([hash, question.substring(0, 10)])
      }, (err, question) => {
        if (err) reject(err)
        resolve({ question });
      });
    });
  };
};

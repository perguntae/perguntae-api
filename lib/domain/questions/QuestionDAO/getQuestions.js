import Question from './questionModel';
export default function() {
  return (rHash) => {
    return new Promise((resolve, reject) => {
      Question.find({ room: rHash }, (err, questions) => {
        if (err) reject(err)
        resolve({ questions });
      });
    });
  };
};

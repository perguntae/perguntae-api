import Question from './questionModel';
export default function() {
  return (qHash) => {
    return new Promise((resolve, reject) => {
      Question.findOne({ hash: qHash }, (err, question) => {
        if (err) reject(err)
        resolve({ question });
      });
    });
  };
};

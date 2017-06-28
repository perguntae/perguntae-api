export default function(DB, getHash) {
  return (hash, { question, desc }) => {
    const newQuestion = {
      question: {
        room: hash,
        text: question,
        desc
      }
    };

    newQuestion.question.hash = getHash([hash, question.substring(0, 10)]);

    return new Promise((resolve, reject) => {
      DB.insert(newQuestion)
        .then(({ changes }) => resolve({ question: changes[0].new_val.question }))
        .catch(reject);
    });
  };
};

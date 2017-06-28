export default function(DB) {
  return (rHash) => {
    return new Promise((resolve, reject) => {
      DB.filter({ question: { room: rHash } })
        .then((result) => {
          result.toArray()
            .then(questions => resolve(questions.map(q => q.question)))
            .catch(reject);
        })
        .catch(reject);
    });
  };
};

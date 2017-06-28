export default function(DB) {
  return (qHash) => {
    return new Promise((resolve, reject) => {
      DB.filter({ question: { hash: qHash } })
        .then(resolve)
        .catch(reject);
    });
  };
};

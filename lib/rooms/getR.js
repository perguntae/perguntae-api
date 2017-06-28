export default function(DB) {
  return (hash) => {
    return new Promise((resolve, reject) => {
      DB.filter({ room: { hash } })
        .then((data) => {
          data.next()
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  };
}

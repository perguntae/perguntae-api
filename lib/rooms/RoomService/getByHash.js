const getByHash = function(RoomDAO, { hash }) {
  return new Promise((resolve, reject) => {
    RoomDAO.getRoom(hash)
      .then(({ room }) => {
        resolve({ room })
      })
      .catch(err => reject(err));
  })
};

export default getByHash;
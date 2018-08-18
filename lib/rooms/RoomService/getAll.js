const getAll = function(RoomDAO) {
  return new Promise((resolve, reject) => {
    RoomDAO.getRooms()
      .then(({ rooms }) => {
        resolve({ rooms })
      })
      .catch(err => reject(err));
  })
};

export default getAll;
const saveRoom = function(RoomDAO, { room }) {
  return new Promise((resolve, reject) => {
    RoomDAO.saveRoom(room)
      .then(({ room }) => {
        resolve({ room })
      })
      .catch(err => reject(err));
  });
};

export default saveRoom; 
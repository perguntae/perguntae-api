import RoomController from './../../../../application/controllers/Room';
const roomController = new RoomController();

export default ({ request, response }) => {

  roomController.all()
    .then(({ rooms }) => {
      response.json({
        status: 'ok',
        msg: 'Here are all the rooms',
        rooms
      })
    })
    .catch(err => response.json(err));

}
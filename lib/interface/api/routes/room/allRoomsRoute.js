import RoomController from './../../../../application/controllers/Room';

export default ({ request, response }) => {

  RoomController.all()
    .then(({ rooms }) => {
      response.json({
        status: 'ok',
        msg: 'Here are all the rooms',
        rooms
      })
    })
    .catch(err => response.json(err));

}
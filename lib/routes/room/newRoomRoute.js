import Room from './../../rooms';

export default ({ request, response }) => {

  const { name, desc } = request.body;
  Room.createRoom({ name, desc })
    .then(({ room }) => {
      response.json({
        status: 'ok',
        msg: 'Room created.',
        data: room
      })
    })
    .catch(err => {
      response.json(err)
    });

}
import Room from './../../rooms';

export default ({ request, response }) => {

  const { name, description } = request.body;
  Room.createRoom({ name, description })
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
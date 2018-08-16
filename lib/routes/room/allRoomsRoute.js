import Room from './../../rooms/';

export default ({ request, response }) => {
    
  Room.getRooms()
    .then(({ rooms }) => {
      response.json({
        status: 'ok',
        msg: 'Here are all the rooms',
        data: rooms
      })
    })
    .catch(err => {
      response.json(err)
    });

}
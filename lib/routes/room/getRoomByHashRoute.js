import Room from './../../rooms';

export default ({ request, response }) => {

  const hash = request.params.hash;

  Room.getRoom(hash)
    .then(room => response.json(room))
    .catch(err => response.json(err));

}
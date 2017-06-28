import { expect } from 'chai';
import { getHash } from '../lib/utils';
import Database from '../lib/db';

// methods to be tested
import createR from '../lib/rooms/createR';
import getR from '../lib/rooms/getR';

describe('Rooms test', () => {

  const RoomsDB = new Database({ db: 'test', table: 'rooms' });
  const createRoom = createR(RoomsDB, getHash);
  const getRoom = getR(RoomsDB);
  let newRoom;

  it('should create a new room', () => {
    return createRoom({ name: 'test-name', desc: 'test-description' })
      .then(({ room }) => {
        newRoom = room.hash;
        expect(newRoom).to.be.ok;
      });
  });

  it('should get the room created', () => {
    return getRoom(newRoom)
      .then(result => {
        expect(result.room.hash).to.equal(newRoom);
      });
  });

});

import { getHash } from './../utils';
import Database from './../db';

//methods
import createR from './createR';
import getR from './getR';

const Rooms = new Database({ table: 'rooms' });

export const createRoom = createR(Rooms, getHash);
export const getRoom = getR(Rooms);

export default {
  createRoom,
  getRoom
};

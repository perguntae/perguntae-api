import { getHash } from './../../../utils';

class Room {
  constructor({ id, name, description='', hash=false }) {
    this.id = id;    
    this.hash = hash || getHash([name]);
    this.name = name;
    this.description = description;
  }
}

export default Room;

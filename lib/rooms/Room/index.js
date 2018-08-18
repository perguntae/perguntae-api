import { getHash } from '../../utils';

class Room {
  constructor({ name, description='', hash=false }) {    
    this.hash = hash || getHash([name]);    
    this.name = name;
    this.description = description;
  }
}

export default Room;

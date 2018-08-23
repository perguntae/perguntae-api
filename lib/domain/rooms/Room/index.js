import { getHash } from './../../../utils';

class Room {
  constructor({ id, name, description='', hash=false, owner=false, users=[], active=false }) {
    
    if (!owner) throw new Error('ERROR: Owner not set for this room')

    this.id = id;    
    this.hash = hash || getHash([name]);
    this.owner = owner;
    this.name = name;
    this.users = users;
    this.description = description;
    this.active = active;
  }

  activate() {
    this.active = true;
    return this.active;
  }

  deactivate() {
    this.active = false;
    return this.active
  }
}

export default Room;

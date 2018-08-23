import { getHash } from './../../../utils';

class Question {
  constructor({ id, title='', description='', hash=false, room=false, owner=false, upvotes=[] }) {
    
    if (!room) throw new Error('No room for this question: ', title);

    this.id = id;
    this.room = room;
    this.hash = hash || getHash([room, title.substring(0, 10)])
    this.title = title;
    this.description = description;
  }
}

export default Question;

import { getHash } from './../../../utils';

class Question {
  constructor({ id, title='', description='', hash=false, room=false, owner=false, upvotes=[] }) {
    
    if (!room) throw new Error('No room for this question: ', title);

    this.id = id;
    this.room = room;
    this.hash = hash || getHash([room, title.substring(0, 10)])
    this.title = title;
    this.description = description;
    this.owner = owner;
    this.upvotes = upvotes;
  }

  upvote(userId) {
    const upvote = this.upvotes.find(u => u.userId == userId);
    if (upvote) return false; 
    this.upvotes.push({ userId });
    return this.upvotes;
  }

  cancelUpvote(userId) {
    const upvote = this.upvotes.find(u => u.userId == userId);
    if (!upvote) return false;
    this.upvotes = this.upvotes.filter(u => u.userId !== userId);
    return true;
  }
}

export default Question;

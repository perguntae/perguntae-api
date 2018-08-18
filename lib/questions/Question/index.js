import { getHash } from '../../utils';

class Question {
  constructor({ title='', description='', hash=false, room }) {
    if (typeof room === 'undefined' || room === null) {
        throw new Error('No room for this question: ', title)
    }

    this.hash = hash || getHash([room, title.substring(0, 10)])
    this.title = title;
    this.description = description;
  }
}

export default Question;

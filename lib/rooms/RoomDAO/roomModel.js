import mongoose from 'mongoose';
let roomSchema = new mongoose.Schema({
    name: String,
    description: String,
    hash: String
});

export default mongoose.model('Room', roomSchema);
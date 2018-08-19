import mongoose from 'mongoose';
let roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  hash: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

export default mongoose.model('Room', roomSchema);
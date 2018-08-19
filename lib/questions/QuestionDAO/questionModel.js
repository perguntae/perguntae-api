import mongoose from 'mongoose';
let questionSchema = new mongoose.Schema({
  room: String,
  title: String,
  description: String,
  hash: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

export default mongoose.model('Question', questionSchema);
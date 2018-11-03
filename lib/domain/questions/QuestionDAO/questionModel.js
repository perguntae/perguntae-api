import mongoose from 'mongoose';
let questionSchema = new mongoose.Schema({
  room: String,
  title: String,
  description: String,
  hash: String,
  owner: String,
  upvotes: [{
    userId: String,
    time: { type: Date, default: Date.now }
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default mongoose.model('Question', questionSchema);
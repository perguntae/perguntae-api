import mongoose from 'mongoose';
let roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  hash: String,
  active: Boolean,
  owner: String,
  users: [{
    userId: String,
    permissions: [String]
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default mongoose.model('Room', roomSchema);
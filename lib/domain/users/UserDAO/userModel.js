import mongoose from 'mongoose';
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  firstname: String,
  lastname: String,
  password: String,
  activated: Boolean,
  role: [String],
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

export default mongoose.model('User', userSchema);
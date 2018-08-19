import mongoose from 'mongoose';
let userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  activated: Boolean
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

export default mongoose.model('User', userSchema);
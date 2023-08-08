import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  trashs : [{
    title : String,
    text : String,
    date : {
      type : Date,
      default : Date.now
    },
    status: String,
    }],
  documents : [{
    title : String,
    text : String,
    date : {
      type : Date,
      default : Date.now
    },
    status: String,
    }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema )  

export default User;
const mongoose = require("mongoose");

const Questionschema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  body: { 
    type: String, 
    required: true 
},
  tags: [
    { 
        type: String 
    }
],
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
},
  upvotes: {
    type:Number,
    default:0
  }   
,
  downvotes: {
    type:Number,
    default:0
  }   
});

module.exports = mongoose.model("Question", Questionschema);

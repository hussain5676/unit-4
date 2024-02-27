var mongoose = require("mongoose");

//schema
var electivesSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  subject1: {
    type: String,
    required: false,
  },
  subject2: {
    type: String,
    required: false,
  },
  subject3: {
    type: String,
    required: false,
  },
  subject4: {
    type: String,
    required: false,
  },
  subject5: {
    type: String,
    required: false,
  },
});

const StudentElectives = mongoose.model("Student Electives", electivesSchema);
module.exports = StudentElectives;

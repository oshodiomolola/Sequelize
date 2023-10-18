const mongoose = require('mongoose');
const shortid = require('shortid');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema;

const studentSchema = new schema({
  _id: {
    type: String,
    default: shortid.generate,
    autoIncrement: true,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true ['Admin must have firstname'],
    trim: true
  },
  lastname: {
    type: String,
    required: true['Admin must have lastname'],
    trim: true
  }
})
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Every user has an email and password.  The password is not stored as
// plain text - see the authentication helpers below.
const TestSchema = new Schema({
  name: String,
  email: String,
  number: String,
});

mongoose.model('test', TestSchema)
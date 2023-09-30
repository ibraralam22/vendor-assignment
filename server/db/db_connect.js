const mongoose = require('mongoose');

function DBConnection() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {

      console.log('Failed to connect to MongoDB',error);
    });
}

module.exports = DBConnection;

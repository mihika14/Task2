const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    {
      collection: "data",
    }
);
module.exports = mongoose.model('data', DataSchema);
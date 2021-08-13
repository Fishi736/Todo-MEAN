var mongoose = require('mongoose');
var obj = new mongoose.Schema({
    task: { type: String },
});
module.exports = mongoose.model('TaskCollection', obj)
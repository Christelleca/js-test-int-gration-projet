const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    tools: [String],
    status: { type: String, default: 'En cours' },
});

module.exports = mongoose.model('Project', projectSchema);

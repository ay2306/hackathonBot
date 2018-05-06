const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const userSchema require('./userSchema').schema;
const hackathonSchema = require('./hackathons').schema;
const teamSchema = require('./teams').schema;
const user = new Schema({
    name: {
        type: String,
        required: true
    },
    hackathonWons: [hackathonSchema],
    hackathonParticipated: [hackathonSchema],
    teams: [teamSchema],
    institute: {
        type: String,
        default: 'Not specified'
    }
}, {
    timestamps: true
});


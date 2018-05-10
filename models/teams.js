const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user').schema;

const team = new Schema({
    name:{
        type:String,
        required: true
    },
    participants: [mongoose.Schema.Types.ObjectId],
    hackthonParticipated: [mongoose.Schema.Types.ObjectId],
    hackathonWon: [mongoose.Schema.Types.ObjectId]
}, {
    timestamps: true
});

module.exports = {
    schema: team,
    model: mongoose.model('teams',team)
};
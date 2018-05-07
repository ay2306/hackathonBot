import { mongo } from 'mongoose';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const userSchema = require('./userSchema').schema;
const teamSchema = require('./teams').schema;
const userSchema = require('./user').schema;
const hackathon = new Schema({
    name:{
        type: String,
        required: true 
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true        
    },
    organisers:{
        type: mongoose.Schema.Types.ObjectId
    },
    prize:{
        type: String
    },
    venue:{
        type: String,
        required: true
    },
    winner:{
        type: mongoose.Schema.Types.ObjectId
    },
    participants:[mongoose.Schema.Types.ObjectId]
}, {
    timestamps: true
});

module.exports = {
    schema: hackathon,
    model: mongoose.model('hackathons',hackathon)
};
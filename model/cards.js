// Schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    imgurl: String
},{timestamps:true});

module.exports = mongoose.model('cards', cardsSchema);
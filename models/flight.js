const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
            // var years = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear(); //as you want year from here
        }
    }
})

module.exports = mongoose.model('Flight', flightSchema);
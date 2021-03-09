const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['ATL', 'DFW','DEN','LAX','SAN'],
      },

    arrival: {
        type: Date,
    }
})

const flightSchema = new Schema({
    airline: {
      type: String,
      enum:['American', 'Delta', 'Southwest','Untied']
    },

    airport: {
      type: String,
      enum: ['ATL', 'DFW','DEN','LAX','SAN'],
      default: 'DEN'
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: {
        type: Date,
        // default: function() {
        //     // let date = new Date();
        //     // // console.log(date);
        //     console.log(date, 'this is the full year');
        //     return new Date(+new Date() + 365*24*60*60*1000);
        default: function () {
            return new Date(+new Date() + 365*24*60*60*1000 )
            // var oneYearFromNow = new Date();
            // return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        }    
        
    },
    nowFlying : Boolean,
    destinations: [destinationSchema]
});
	
// Compile the schema into a model and export it
module.exports = mongoose.model('flight', flightSchema);
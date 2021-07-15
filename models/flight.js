import mongoose from 'mongoose'

export{
  Flight
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  content: String,
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price:{type: Number, min:0 }
}, {
  timestamps: true
})

  const flightSchema = new Schema({
    airline: {
        type: String, required: true,
        enum: ["American", "Southwest", "United", "Delta","Air Canada","Alaska", "Jet Blue","Hawaiian"]
     },

    airport: {
      type: String, 
      enum: ["DFW", "DEN", "SFO", "JFK", "SAN", "LAX", "LAS", "DFW", "DCA"]
    },

   flightNo: {
      type: Number, 
      default:10,
      min: 10,
      max: 9999,
    }, 

    departs:{
        type: Date,
        default: function() {
            return new Date().getDate()
        }
      },

    tickets:{
        type:[ticketSchema]
      },
      
    destinations:{
        type:[mongoose.Schema.Types.ObjectID],
        ref:"Destination"
      },
  }, {
    timestamps: true,
      })

  
  const Flight = mongoose.model("Flight", flightSchema)
  
import mongoose from "mongoose"

export {
  Destination
}

const Schema = mongoose.Schema

const DestinationSchema = new Schema({
  type: String, 
      enum: ["DFW", "DEN", "SFO", "JFK", "SAN", "LAX", "LAS", "DFW", "DCA"],
      born: Date
}, {
  timestamps: true
})

const Destination = mongoose.model('Destination', DestinationSchema)
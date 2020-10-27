const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Cardio or Resistance",
                trim: true
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            duration: {
                type: Number,
                required: "Duration in minutes",
                trim: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
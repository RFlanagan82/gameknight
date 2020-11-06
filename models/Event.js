const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    eventName: {
        type: String,
        trim: true,
        required: "String is Required",
    },

    date: {
        type: Date,
        default: Date.now,
    },

    gameCategory: {
        type: String,
        trim: true,
        required: "String is Required",
    },

    gameName: {
        type: String,
        trim: true,
        required: "String is Required",
    },

    description: {
        type: String,
        trim: true,
        required: "String is Required",
    },

    eventLink: {
        type: String,
        trim: true,
        required: "String is Required",
    },

    maxAttendees: {
        type: Number,
        unique: true,
        required: true,
    },

    hostID: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],

});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event

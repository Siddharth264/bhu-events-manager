const mongoose = require("mongoose");
const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "You must provide a title"],
    },
    date: {
      type: String,
      required: [true, "You must provide a date"],
    },
    venue: {
      type: String,
      required: [true, "You must provide a venue"],
    },
    imageUrl: {
      type: String,
      required: [true, "You must provide an image"],
    },
    category: {
      type: String,
      required: [true, "You must provide a category"],
    },
    registerUrl: {
      type: String,
    },
    organizer: {
      type: String,
    },
    time: {
      type: String,
      required: [true, "You must provide a time"],
    },
    userRef: {
      type: String,
      required: [true, "userRef is required"],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports= mongoose.model("Event", eventSchema)
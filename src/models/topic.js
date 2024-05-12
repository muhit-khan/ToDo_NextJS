import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    },
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
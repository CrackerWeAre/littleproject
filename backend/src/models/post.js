import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    _id: String,
    platform: String,
    channelId: String,
    imgDataSrc: String,
    liveDataHref: String,
    liveDataTitle: String,
    creatorDataHref: String,
    creatorDataName: String,
    liveAttdc: Number,
    onLive: Boolean,
    publishDate: {
        type: Date,
        default: Date.now,
    },
    
});


const Post = mongoose.model('Post', PostSchema);
export default Post;
import mongoose, { Schema, Document, Model } from 'mongoose';

const PostSchema= new Schema({
  title: { type: String },
  content: { type: String },
  author: { type: String },
  description: { type: String },
  category: [],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// let PostModel: Model<PostDocument>;

// if (mongoose.models.Post) {
//   PostModel = mongoose.model<PostDocument>('Post');
// } else {
//   PostModel = mongoose.model<PostDocument>('Post', PostSchema);
// }


// let PostModel = mongoose.model<PostDocument>('Post', PostSchema);
// const PostModel = mongoose.model('PostModel', PostSchema);

const PostModel = mongoose.models.PostModel || mongoose.model('PostModel', PostSchema);
export default PostModel;

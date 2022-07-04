import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        // TODO: dragNdrop => provisional
        title: String,
        body: String,
        cover: String,
        metaImage: String,
        category: String,
        authorName: String,
        authorImage: String,
        slug: String
    },
    {
        timestamps: true,
    },
);

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

const Post = mongoose.models.Post || mongoose.model('Post', schema);
export default Post;

//TYPE
export type PostType = {
    _id?: string,
    title: string,
    body?: string,
    cover?: string,
    metaImage?: string,
    category?: string,
    authorName?: string,
    authorImage?: string,
    slug: string
};

import mongoose from 'mongoose';
import Post from './models/Post';

let mongooseClient: Object | void;

// this is a promise
const getClient = () => mongoose.connect(process.env.DB || '').catch(e => console.error(e));

// add models here
const getModels = () => ({
    Post
});

const getUsableObject = (client: Object) => ({ ...client, ...getModels() });

const dbConnection = async () => {
    if (process.env.NODE_ENV === 'development') {
        //@ts-ignore
        if (!global.mongooseClient) {
            mongooseClient = await getClient();
            //@ts-ignore
            global.mongooseClient = mongooseClient;
            //@ts-ignore
            return getUsableObject(mongooseClient);
        } else {
            //@ts-ignore
            mongooseClient = global.mongooseClient;
            //@ts-ignore
            return getUsableObject(mongooseClient);
        }
    }
    mongooseClient = await getClient();
    //@ts-ignore
    return getUsableObject(mongooseClient);
};

export default dbConnection;

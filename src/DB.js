import {
    DB_PASS
} from './config';
import * as crypto from 'crypto';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://moviereviewhost:" + DB_PASS + "@moviereviewacademicproj.9vj0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connection = client.connect();

const databaseAccess = {
    push_login_details: async(username, email, password) => {
        await connection;
        const login_details = client.db("movie_review").collection("login_details");
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
        return await login_details
            .insertOne({ username: username, email: email, salt: salt, password_hash: hash });
    },
    match_login_details: async(email, password) => {
        await connection;
        const login_details = client.db("movie_review").collection("login_details");
        const detail = await login_details.find({ email: email });
        const hash = crypto.pbkdf2Sync(password, detail.salt, 1000, 64, `sha512`).toString(`hex`);
        return hash == detail.password_hash;
    },
    increment_views: async movieId => {},
    fetch_views: async movieId => {}
};
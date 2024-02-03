require('dotenv').config();
const DB_PASS = process.env.MONGODB_PASSWORD;

const express = require('express');
const cors = require("cors");
const crypto = require("crypto");
const app = express();
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://moviereviewhost:" + DB_PASS + "@moviereviewacademicproj.9vj0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connection = client.connect();

app.get("/register", async(req, resp) => {
    const username = req.query.username;
    const email = req.query.email;
    const password = req.query.password;
    if (!username || !email || !password) {
        resp.send({ status: "error", message: "There must be username, email and password in the query" });
        return;
    }

    try {
        await connection;
        const login_details = client.db("movie_review").collection("login_details");
        if (await login_details.findOne({ email: email })) {
            resp.send({ status: "error", message: "user already exists" });
            return;
        }
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
        await login_details
            .insertOne({ username: username, email: email, salt: salt, password_hash: hash });
        resp.send({ status: "success" });
    } catch (err) {
        resp.send({ status: "error", message: err.message });
    }
});

app.get("/login", async(req, resp) => {
    const email = req.query.email;
    const password = req.query.password;
    if (!email || !password) {
        resp.send({ status: "error", message: "There must be email and password in the query" });
        return;
    }

    try {
        await connection;
        const login_details = client.db("movie_review").collection("login_details");

        const detail = await login_details.findOne({ email: email });
        if (!detail) {
            resp.send({ status: "error", message: "Invalid login details" });
            return;
        }

        const hash = crypto.pbkdf2Sync(password, detail.salt, 1000, 64, `sha512`).toString(`hex`);
        if (hash === detail.password_hash) resp.send({ status: "success", username: detail.username });
        else resp.send({ status: "error", message: "Invalid login details" });
    } catch (err) {
        resp.send({ status: "error", message: err.message });
    }
});

app.get("/view_count", async(req, resp) => {
    const email = req.query.email;
    if (!email) {
        resp.send({ status: "error", message: "There must be email in the query" });
        return;
    }

    try {
        await connection;
        const view_details = client.db("movie_review").collection("view_count");
        const detail = await view_details.findOne({ email: email });

        resp.send({ status: "success", view_count: (detail ? detail.count : 0) });
    } catch (err) {
        resp.send({ status: "error", message: err.message });
    }
})
app.post("/view_count", async(req, resp) => {
    const email = req.query.email;
    if (!email) {
        resp.send({ status: "error", message: "There must be email in the query" });
        return;
    }

    try {
        await connection;
        const view_details = client.db("movie_review").collection("view_count");
        await view_details.updateOne({ email: email }, { $inc: { count: 1 } }, { upsert: true });

        resp.send({ status: "success" });
    } catch (err) {
        resp.send({ status: "error", message: err.message });
    }
});

app.listen(3001);
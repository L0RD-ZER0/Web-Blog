import express from 'express';
import session from 'express-session';
import MongoStore from "connect-mongo";
import * as mongoose from 'mongoose';

const app: express.Express = express();

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    },
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    }),
}))

export default app;

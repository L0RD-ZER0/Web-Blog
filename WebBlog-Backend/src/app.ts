import express from 'express';
import session from 'express-session';
import MongoStore from "connect-mongo";


const app: express.Express = express();

app.use(session({
    secret: "",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    },
    saveUninitialized: false,
    resave: false,
    // store: new MongoStore(...),
}))

export default app;

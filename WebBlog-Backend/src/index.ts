import app from './app';
import * as dotenv from 'dotenv';

dotenv.config({
    override: true
})


if (process.env.NODE_ENV === 'development')  {
    /* Development */
}


/**
 * Start Express Server.
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;

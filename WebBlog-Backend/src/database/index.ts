import * as mongoose from "mongoose";


mongoose.connect("DB-URI")
    .then(() => console.log("Mongoose Conneted!"))
    .catch((reason) => { console.log(`Error: ${reason}`); });

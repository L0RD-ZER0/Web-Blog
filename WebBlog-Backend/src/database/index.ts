import * as mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose Conneted!");
    })
    .catch((reason) => {
        console.log(`Error: ${reason}`);
    });

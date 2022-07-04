import {Schema, Model, model} from "mongoose";

export interface User {
    name: String,
    email: String
    createdAt: Date,
}

export const UserSchema: Schema<User> = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    createdAt: {type: Date, "default": Date.now},
})

export const UserModel: Model<User> = model<User>("User", UserSchema);


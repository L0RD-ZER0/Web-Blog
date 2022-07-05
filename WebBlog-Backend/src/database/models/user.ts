import {Schema, Model, model} from "mongoose";

/*
Interface for a User object.
 */
export interface User {
    name: String,
    email: String
    createdAt: Date,
}

/*
Schema for User object in database
 */
export const UserSchema: Schema<User> = new Schema<User>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    createdAt: {type: Date, "default": Date.now},
})

/*
Interface for a User model with additional static funnctions.
 */
export interface UserModelInterface extends Model<User> {
    /*
     * Search through Users by means of their Email.
     * @param email doc
     */
    searchByEmail(email: string): Promise<User>
}

UserSchema.static("searchByEmail", function (email: string) {
    UserModel.findOne(

    )
})


export const UserModel: UserModelInterface = model<User>("User", UserSchema) as UserModelInterface;

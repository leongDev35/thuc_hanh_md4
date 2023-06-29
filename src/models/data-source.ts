import * as mongoose from "mongoose";

export class Database {
    static async connectDB() {
        const DB_URL = "mongodb://127.0.0.1:27017/Class"
        await mongoose.connect(DB_URL)
    }
}
import {Schema, model} from "mongoose";
interface iStudent {
    name : string;
    pointLT : number;
    pointPractice: number;
    description: string;
    evaluated: string;
    classroom: Object;
}
const studentSchema = new Schema <iStudent> ({
    name: String,
    pointLT: Number,
    pointPractice: Number,
    description: String,
    evaluated: String,
    classroom: {type: Schema.Types.ObjectId, ref:'classroom'},
})
export const studentModel = model("student",studentSchema);

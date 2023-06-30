import {Schema, model} from "mongoose";
interface iStudent {
    name : string;
    pointTheory : number;
    pointPractice: number;
    description: string;
    evaluated: string;
    classroom: Object;
}
const studentSchema = new Schema <iStudent> ({
    name: String,
    pointTheory: Number,
    pointPractice: Number,
    description: String,
    evaluated: String,
    classroom: {type: Schema.Types.ObjectId, ref:'classroom'},
})
export const studentModel = model("student",studentSchema);

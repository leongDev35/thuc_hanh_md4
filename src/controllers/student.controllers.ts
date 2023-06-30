import { studentModel } from "../models/schemas/student.model";
import { classroomModel } from "../models/schemas/classroom.model"

export class StudentControllers {
    static async getCreateNewStudentPage(req: any, res: any) {
        const classrooms = await classroomModel.find()
        res.render("create", { classrooms: classrooms });
    }
    static async createNewStudent(req: any, res: any) {
        try {
            const newStudent = new studentModel(req.body)
            await newStudent.save();
            res.redirect("/student/list")
        } catch (error) {
            res.render("404")
        }
    }
    static async getListStudentsPage(req: any, res: any) {
        try {
            let query = {};
            if (req.body.classroom) {
                query = { classroom: req.body.classroom }
            }
            let classrooms = await classroomModel.find();
            const students = await studentModel.find(query).populate({
                path: "classroom",
                select: "name",
            }).sort({ pointTheory: 1 });

            res.render('list', { students: students, classrooms: classrooms })
        } catch (error) {
            console.log(error);
            res.render("404")
        }
    }
    static async getUpdateStudentPage(req: any, res: any) {
        try {
            const classrooms = await classroomModel.find();
            const studentNeedToUpdate = await studentModel.findOne({ _id: req.params.id }).populate({
                path: "classroom",
                select: "name",
            })
            if (studentNeedToUpdate) {
                res.render("update", { student: studentNeedToUpdate, classrooms: classrooms })
            } else res.render("404")
        } catch (error) {
            res.render("404")
        }
    }
    static async updateStudent(req: any, res: any) {
        try {
            const { name, classroom, pointTheory, pointPractice, description, evaluated } = req.body;
            const studentNeedToUpdate = await studentModel.findOne({ _id: req.params.id });
            studentNeedToUpdate.name = name;
            studentNeedToUpdate.classroom = classroom;
            studentNeedToUpdate.pointTheory = pointTheory;
            studentNeedToUpdate.pointPractice = pointPractice;
            studentNeedToUpdate.description = description;
            studentNeedToUpdate.evaluated = evaluated;
            studentNeedToUpdate.save();
            res.redirect("/student/list")
        } catch (error) {
            res.render("404")
        }
    }
    static async deleteStudent(req: any, res: any) {
        await studentModel.deleteOne({ _id: req.params.id })
        res.redirect("/student/list")
    }
    static async detailStudent(req: any, res: any) {
        const student = await studentModel.findOne({ _id: req.params.id }).populate({
            path: "classroom",
            select: "name",
        })
        res.render("studentDetail", { student: student })

    }


}
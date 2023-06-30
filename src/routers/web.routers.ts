import {Router} from "express";
import {StudentControllers} from "../controllers/student.controllers";

export const webRouters = Router();

webRouters.get("/create",StudentControllers.getCreateNewStudentPage);
webRouters.post("/create",StudentControllers.createNewStudent);
webRouters.get("/list",StudentControllers.getListStudentsPage);
webRouters.post("/list",StudentControllers.getListStudentsPage);
webRouters.get("/:id/update/",StudentControllers.getUpdateStudentPage);
webRouters.post("/:id/update/",StudentControllers.updateStudent);
webRouters.get("/:id/delete/",StudentControllers.deleteStudent);
webRouters.get("/:id/detail/",StudentControllers.detailStudent);


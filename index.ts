import express from "express";
import bodyParser from "body-parser";
import {Database} from "./src/models/data-source";
import {webRouters} from "./src/routers/web.routers";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({extended: true}));

//connect:
Database.connectDB()
    .then(() => console.log(`DB connected!`))
    .catch((error) => console.log(`DB Connect Error: ${error}`))

//use:
app.use("/student", webRouters);

app.listen(PORT, "localhost", () => {
    console.log(`App is running at http://localhost:${PORT}/student/create`)
})

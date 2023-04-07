import express from 'express';
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const string = "mongodb+srv://hendricke:pw2j4cbycKsb4yrD@cluster0.cmel9d1.mongodb.net/tuiter?retryWrites=true&w=majority";
mongoose.connect(string);



const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)
import express, { Router } from 'express';
import dotenv from 'dotenv';
import {mongoDBconnection} from './config/db.js';
import {userRoute} from './routes/userRoute.js'

mongoDBconnection();
dotenv.config();

const app = express();
app.use(express.json());
app.use('/users',userRoute);

const PORT =process.env.PORT || 3000

app.listen(PORT)
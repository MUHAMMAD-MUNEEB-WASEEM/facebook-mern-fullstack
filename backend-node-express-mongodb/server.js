//importing stuff
import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';
import path from 'path';
import Grid from 'gridfs-stream';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import bodyParser from 'body-parser';

Grid.mongo = mongoose.mongo

// app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json()) //To convert string to json
app.use(cors())//headers for heruko

//db config

//api routes
app.get('/', (req, res)=>res.status(200).send('hello world'))

//listener
app.listen(port, console.log(`listening on localhost: ${port}`));
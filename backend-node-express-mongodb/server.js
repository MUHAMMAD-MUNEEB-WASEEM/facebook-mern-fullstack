//importing stuff
import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';
import path from 'path';
import Grid from 'gridfs-stream';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage'
import bodyParser from 'body-parser';
import mongoPost from './mongoPosts.js'

Grid.mongo = mongoose.mongo

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1233451",
    key: "528486e13de6e0d2d326",
    secret: "1a1c9af160089fa8bf4a",
    cluster: "ap2",
    useTLS: true
  });

//middlewares
app.use(express.json()) //To convert string to json
app.use(cors())//headers for heruko

//db config
const mongoURI = 'mongodb+srv://admin:m7igUKWbGeZoQFat@cluster0.yfh06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once('open', ()=>{
    console.log('db connected')

    const changeStream=mongoose.connection.collection("posts").watch();
    changeStream.on("change",(change)=>{
        console.log(change);
        if(change.operationType==="insert"){
            console.log("Triggering Pusher")
            pusher.trigger("posts","inserted",{
                change:change
            })
        }else{
            console.log("Error triggering Pusher")
        }
    })
})

// *****************all below work for images ****
const conn = mongoose.createConnection(mongoURI, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})


let gfs 

conn.once('open', ()=>{
    console.log('db connected')
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
});

const storage = new GridFsStorage({
    url:mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject)=> {
            {
                const filename = `image-${Date.now()}${path.extname(file.originalname)}`
                
                const fileInfo = {
                    filename: filename,
                    bucketName: `images`
                }
                resolve(fileInfo)
            }
        })
    }
})

const upload = multer({ storage })



//api routes
app.get('/', (req, res)=>res.status(200).send('hello world'))


//***********get and post image*********

app.get('/retrieve/images/single', (req, res)=>{
    gfs.files.findOne({filename: req.query.name }, (err, file)=>{
        if (err) {
            res.status(500).send(err)
        }else {
            if (!file || file.length == 0) {
                res.status(404).json({err: 'file not found'})
            } else{
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res);
            }
        }
    })
})

app.post('/upload/image', upload.single('file'), (req, res)=>{
    res.status(201).send(req.file)
})


//********************** get and post data *****************


app.get("/retrieve/posts",(req,res) => {
    mongoPost.find((err, data)=>{
        if(err) {
            res.status(500).send(err)
        }else {
            data.sort((b,a)=>{
                return a.timestamp - b.timestamp
            })

            res.status(200).send(data)
        }
    })
})


app.post('/upload/post', (req, res)=>{
    const dbPost = req.body
    console.log(dbPost)

    mongoPost.create(dbPost, (err, data)=>{
        if (err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})



//listener
app.listen(port, console.log(`listening on localhost: ${port}`));
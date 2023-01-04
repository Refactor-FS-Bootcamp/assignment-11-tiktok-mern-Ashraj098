import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import Cors from 'cors'

// OiXStrcjNncHNJiI
// app config
const app = express();
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://admin:OiXStrcjNncHNJiI@cluster0.gygfgsg.mongodb.net/?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// Db Config
mongoose.set('strictQuery', false);
mongoose.connect(connection_url)

//api endpoint
app.get("/", (req, res) => res.status(200).send("Tiktok Mern Live clone"))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err)res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})


//listening
app.listen(port, () => console.log(`listening on localhost: ${port}`))


// {
//     "url": "https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4",
//     "channel": "AshishRaj098",
//     "description": "This is my window levovo ideapad laptop",
//     "song": "This is the day",
//     "likes": "245",
//     "shares": "145",
//     "messages": "482"
// },
// {
//     "url": "https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4",
//     "channel": "AshishRaj098",
//     "description": "This is my window levovo ideapad laptop",
//     "song": "This is the day",
//     "likes": "245",
//     "shares": "145",
//     "messages": "482"
// }
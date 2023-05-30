const express = require('express')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config();


const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(cors())
app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    const f = req.file;
    res.json({ "name": f.originalname, "type": f.mimetype, "size": f.size })
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// By Siddharth Saraf
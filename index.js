import express from 'express'
import ckey from 'ckey'
import bodyParser from 'body-parser'
import logger from './middlewares/logger.js'
import path from 'path'
import upload from './routes/upload.js'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(logger)

app.use('/storage', express.static('storage'))

app.use('/upload', upload)

app.get('/', (req, res) => {
    res.send('Hey')
})

app.listen(ckey.APP_PORT, () => {
    console.log(`Server running at http://localhost:${ckey.APP_PORT}`)
})
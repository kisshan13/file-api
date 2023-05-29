import express from 'express'
import ckey from 'ckey'
import bodyParser from 'body-parser'

const app = express()

app.listen(ckey.APP_PORT, () => {
    console.log(`Server running at http://localhost:${ckey.APP_PORT}`)
})
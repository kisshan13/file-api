import { Router } from "express";
import { uploader } from "../middlewares/uploader.js";

const upload = Router()

upload.use(uploader({
    path: '/storage'
}))

upload.get('/', (req, res) => {
    res.send('Upload')
})

export default upload
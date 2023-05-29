import fs from 'fs'
import busboy from 'busboy'

/**
 * 
 * @param {Object} UploaderProps
 * @param {string} UploaderProps.path  
 * @returns {Function}
 */
export function uploader({ path }) {

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    return async (req, res, next) => {

        const bb = busboy({ headers: req.headers })

        bb.on('file', (name, file, info) => {
            const { filename, encoding, mimeType } = info

            console.log([filename, encoding, mimeType])
        })

        bb.on('close', () => {
            next()
        })
    }
}
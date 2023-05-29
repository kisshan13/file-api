import chalk from "chalk";


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export default function logger(req, res, next) {
    let { method, originalUrl, ip } = req

    console.log(makeRequestLogger({
        path: originalUrl,
        method: method,
        ip: ip
    }))

    next()
}

/**
 * 
 * @param {Object} LoggerProps 
 * @param {string} LoggerProps.path
 * @param {string} LoggerProps.method
 * @param {string} LoggerProps.ip
 * @returns 
 */
function makeRequestLogger({ path, method, ip }) {
    const requestAlert = `[${chalk.green('🕶')}]`
    const requestPath = `${chalk.bgGreenBright('METHOD')}: ${method}`

    return `${requestAlert} => ${requestPath} at ${path.split('?')[0]}  (${ip})`
}
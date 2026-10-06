import { EventEmitter } from 'node:events'
import fs from 'node:fs/promises'
import "dotenv/config"

const logger = new EventEmitter()
const logFile = process.env.LOG_FILE || 'logs/app.log';
const writeLog = async(level,message)=>{
    const timestamp = new Date().toISOString()
    const log = `${timestamp} ${level} ${message}\n`
    await fs.appendFile(logFile, log)
}
logger.on("info",(message)=>{
    writeLog("INFO",message)
})
logger.on("warn",(message)=>{
    writeLog("WARN",message)
})
logger.on("error",(message)=>{
    writeLog("ERROR",message)
})
export default logger;
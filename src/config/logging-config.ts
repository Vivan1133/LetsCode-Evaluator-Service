import winston from "winston";
import { format } from "winston";
const { combine, printf, timestamp, colorize } = format;


const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});


const logger = winston.createLogger({
    level: "info",
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat,
    ),
    transports: [
        new winston.transports.Console({
            format: combine(colorize(), logFormat)
        }),
        new winston.transports.File({ filename: "app.log" }),
    ]
})

export default logger;
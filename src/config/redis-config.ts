import { Redis } from "ioredis";
import ServerConfig from "./server-config.js";

const redisConfig = {
    port: Number(ServerConfig.REDIS_PORT),
    host: ServerConfig.REDIS_HOST,
    maxRetriesPerRequest: null
}

const redisConn = new Redis(redisConfig);

export default redisConn;
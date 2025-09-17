import { Queue } from "bullmq";
import redisConn from "../config/redis-config.js";

export default new Queue("sampleQueue", {connection: redisConn});
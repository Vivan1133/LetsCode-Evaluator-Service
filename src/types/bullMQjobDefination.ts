import { Job } from "bullmq";

export interface IJob {
    name: string,
    payload?: Record<string, unknown>,
    handle?: (job : Job) => void,
    fail?: (job : Job) => void
}
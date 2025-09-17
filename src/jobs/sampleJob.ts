import type { Job } from "bullmq";
import type { IJob } from "../types/bullMQjobDefination.js";

export default class SampleJob implements IJob {
    name : string;
    payload? : Record<string, unknown>;
    constructor(payload : Record<string, unknown>) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handle(job? : Job) : void {
        console.log("handler of the job called");
        console.log(this.payload);
        if(job) {
            console.log(job.name, job.id, job.data);
        }
    }

    fail(job? : Job) : void {
        console.log("job failed")
        if(job)
            console.log("job failed id: ", job.id);
    }
}
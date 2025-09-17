import sampleQueue from "../queues/sampleQueue.js";

export default async function (name : string, payload : Record<string, unknown>) {
    await sampleQueue.add(name, payload);   // job name and payload
}
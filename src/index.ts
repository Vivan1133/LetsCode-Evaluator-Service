import express, { type Express } from "express";
import serverConfig from "./config/server-config.js";
import apiRouter from "./routes/index.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import SampleWorker from "./workers/SampleWorker.js";

const app : Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log("server started at PORT: ", serverConfig.PORT);

    SampleWorker("sampleQueue");


    sampleQueueProducer("SampleJob", {
        name: "Vivan",
        college: "UU",
        age: 22
    });

});
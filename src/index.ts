import express, { type Express } from "express";
import serverConfig from "./config/server-config.js";
import apiRouter from "./routes/index.js";
// import sampleQueueProducer from "./producers/sampleQueueProducer.js";
// import SampleWorker from "./workers/SampleWorker.js";
import logger from "./config/logging-config.js";

const app : Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
    logger.info(`server started at port: ${serverConfig.PORT}`);
    // SampleWorker("sampleQueue");

    // sampleQueueProducer("SampleJob", {
    //     name: "Vivan",
    //     college: "UU",
    //     age: 22
    // });
});
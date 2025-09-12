import express, { type Express } from "express";
import serverConfig from "./config/server-config.js";
import apiRouter from "./routes/index.js";

const app : Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log("server started at PORT: ", serverConfig.PORT);
});
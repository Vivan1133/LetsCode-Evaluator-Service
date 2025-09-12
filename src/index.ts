import express, { type Express } from "express";
import serverConfig from "./config/server-config.js";

const app : Express = express();

app.listen(serverConfig.PORT, () => {
    console.log("server started at PORT: ", serverConfig.PORT);
});
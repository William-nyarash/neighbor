import Logger from './core/Logger.js';
import { Port } from './config/index.js';
import app from "./App.js";

app.listen(Port, () => {
    Logger.info(`Server is runnig on Port: ${Port}`);``
})
.on("error", (err) => Logger.error(err));


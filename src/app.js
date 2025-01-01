import express from "express"
const app = express();

app.use(express.urlencoded({ extended: false }));

import indexRouter from "./index.js";

app.use("/", indexRouter);

app.listen(3000, () => console.log("running"));

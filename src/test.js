import express from "express"
import { request } from "supertest";
import indexRouter from "./index.js";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

test("index route works", done => {
    request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect({ name: "frodo" })
        .expect(200, done);
})

test("index route works", done => {
    request(app)
        .get("/test")
        .type("form")
        .send({ item: "hey" })
        .then(() => {
            request(app)
            .get("/test")
            .expect({ array: ["hey"] }, done)
        })
})

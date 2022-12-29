import("./config/dbCong.js")
import express from "express";
import popRoute from "./routes/popRoutes.js";
const port = 1000;
const app = express();

app.use(express.json());
app.use("/api/v1", popRoute)

app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
});
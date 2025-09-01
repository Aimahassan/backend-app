import express from "express";
import db from "./config/db.mjs";
import router from "./routes/index.mjs";
import cors from "cors";

const app = express();

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

// app.listen(3000,()=>{
//      console.log("Server is ready to use 3000");
// })
app.get('/',(req,res)=>{
     res.send('server is ready to use')
})

app.use(cors())
app.use(express.json())
app.use('/',router)

export default app

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./router/user.router.js";
import innovationRoute from "./router/innovation.router.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

//mongooes connection
const connect = () => { 
    try {
        mongoose.connect(process.env.MONG_URL)
            .then(() => {
                console.log("connect DB");
            })
    } catch (err) { 
        throw (err);
    }
}
//error handling
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "somthing went wrong";

    return res.status(status).json({
        success: false,
        message: message,
        status: status,
    });
});

//middleware
app.use(cookieParser())
app.use(express.json());

app.use("/user", userRoute);
app.use("/innovation", innovationRoute);


//port coonection
app.listen(3000, () => { 
    connect();
    console.log('port is running');
    
})

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./router/user.router.js";
import innovationRoute from "./router/innovation.router.js";
import universityRoute from "./router/university.router.js"
import industryRoute from "./router/industry.router.js"
import ongoingRoute from "./router/ongoing.router.js"
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
    const status = err.status || 5000;
    const message = err.message || "somthing went wrong";

    return res.status(status).json({
        success: false,
        message: message,
        status: status,
    });
});

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoute);
app.use("/innovation", innovationRoute);
app.use("/university", universityRoute);
app.use("/industry", industryRoute);
app.use("/ongoing", ongoingRoute);
app.use('/upload', express.static('upload'));
app.use('/university', express.static('university'));


//port coonection
app.listen(5000, () => { 
    connect();
    console.log('port is running');
    
})

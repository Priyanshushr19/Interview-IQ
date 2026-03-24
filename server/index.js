import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"



const app = express()

// 🔥 VERY IMPORTANT (FIX YOUR ISSUE)
app.set("trust proxy", 1)

// ✅ CORS (ONLY ONCE)
app.use(cors({
    origin: "https://interview-iq-1.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use(express.json())
app.use(cookieParser())

// ✅ ROUTES
app.use("/api/auth", authRouter)   // 🔥 YOU REMOVED THIS → ADD BACK
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDb()
})

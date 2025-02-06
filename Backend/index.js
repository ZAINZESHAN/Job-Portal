import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './utils/db.js'
import userRoute from './routes/user.route.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'
import dotenv from 'dotenv';
dotenv.config({})

const app = express();

// app.get('/home', (req, res)=>{
//     res.send('I am comming from Backend')
// })

app.use(express.json()) // to convert json request bodies into parse
app.use(express.urlencoded({ extended: true })) // to convert parse request into url-encoded paylods
app.use(cookieParser()) // to parse cookies into request heaaders
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))

const PORT = process.env.PORT || 3000;

// Api's
app.use('/api/v1/user', userRoute)
app.use('/api/v1/company', companyRoute)
app.use('/api/v1/job', jobRoute)

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running at Port ${PORT}`);
});


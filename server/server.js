import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoutes from './routes/UserRoutes.js'
import EmployerApplicantsRoutes from './routes/EmployerApplicantsRoutes.js'
import EmployerRoutes from './routes/EmployerRoutes.js'
dotenv.config()

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

mongoose.connect(process.env.MONGO_URL)

app.get('/', (req, res) => {
    res.send('testing 123')
})

app.use('/', UserRoutes);
app.use('/', EmployerApplicantsRoutes)
app.use('/',EmployerRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})

 
import express, { Request, Response } from 'express';
import 'dotenv/config'
import cors from 'cors'
const app = express();

const corsOptions = {
  origin: process.env.TRUSTED_ORIGINS?.split(',') || [], // Allow requests from your frontend
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies/sessions
};
app.use(cors(corsOptions));
app.use(express.json())
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
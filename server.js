import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection  from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';


const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router);

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.txlk6th.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

DefaultData();

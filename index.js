const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');

const connectDB = require('./config/db');

// Route files
const bootcamps = require('./routes/bootcamps');
const auth = require('./routes/auth');
const questions = require('./routes/questions');

dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

// load env var

const app = express();

app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// MOunt routers
app.use('/api/v1/bootcamps',bootcamps);
app.use('/api/v1/auth',auth)
app.use('/api/v1/questions',questions)


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection',(err,promise)=>{
  console.log(`Error: ${err.message}`);
  server.close(()=> process.exit(1));
})

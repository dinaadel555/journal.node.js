const express = require('express');
const connectDB = require('./database');

const app = express();
app.use(express.json());
connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/entries', require('./routes/routes'));


app.listen(3000,()=> 
console.log('server is running'));

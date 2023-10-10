const express = require('express')
const app = express()
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const dbConnect = require('./config/dbConnect')
const initRoute = require('./routes/index')
require('dotenv').config();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

dbConnect()
initRoute(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
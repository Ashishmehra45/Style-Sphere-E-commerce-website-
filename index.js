const express = require('express');
const app = express();
const db = require('./config/mongodb-connections')

const cookieParser = require('cookie-parser');
const path = require('path')
const adminRoutes = require('./routes/adminRoute')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
const multer = require('multer')
const crypto = require('crypto')

app.use('/admin' ,adminRoutes);
app.use('/users',userRoute);
app.use('/product',productRoute);

app.listen(4000,()=>{  
 console.log('server is runnig 4000')
    
});

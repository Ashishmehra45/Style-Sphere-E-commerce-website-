const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
const multer = require('multer')
const crypto = require('crypto')

app.get('/' ,(req,res) =>{
    res.send('hy');

});
    app.listen(3000,()=>{
        console.log('server is runnig 3000')
    
});

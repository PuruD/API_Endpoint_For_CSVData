const express = require('express');

const app = express();

//app.use((req, res, next) => {
//    res.status(200).json({
//        message: 'It works'
//    })
//    
//});
const bodyParser = require('body-parser');
//const queryParser = require('express-query-int');
const reqValidate = require('express-req-validate');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(queryParser());
app.use(reqValidate());



const employeeRoutes = require('./api/routes/employee');

/*const csv = require('fast-csv');

const fs = require('fs');

const csvFilePath = './assets/election-2017.csv'


   app.use(function(req, res){
        const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            //console.log(jsonObj);
            //console.log(Array.from(jsonObj, fruit => fruit.Bundesland));
            const reqQueryData = req.query;
         
                res.send(jsonObj);
           
        })
   });*/


app.use('/employee',  employeeRoutes);

module.exports = app;
const express = require('express');
const router = express.Router();
const csv = require('fast-csv');

const fs = require('fs');

const csvFilePath = '././assets/employee.csv'

var stream = fs.createReadStream(csvFilePath);


var fileStream = fs.createReadStream(csvFilePath) //,


router.get('/', (req, res, next) => {
    // console.log(req.param);
    console.log(req.query);

    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            const reqQueryData = req.query;
            if (Object.entries(reqQueryData).length !== 0) {
                const reqQueryDataKey = Object.keys(reqQueryData)[0];
                const reqQueryDataVal = Object.values(reqQueryData)[0];

                
                users= jsonObj.filter(function(item) {
                  for (var key in reqQueryData) {
                    if (item[key] === undefined || item[key] != reqQueryData[key])
                      return false;
                  }
                  return true;
                });

                //console.log(users);

                const columnFilter = Array.from(jsonObj, fruit => fruit[reqQueryDataKey]);

                if (reqQueryDataVal !== '') {
                    res.send(users);
                } else {
                    res.send(columnFilter);
                }

            } else {
                console.log('inside else..');
                res.send(jsonObj);
            }

        })


});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request to products'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'handling get request to products'
        })
    } else {
        res.status(200).json({
            message: 'you passed an ID'
        })
    }
});


router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
});





module.exports = router;
const express = require('express');
const router = express.Router();
const csv = require('fast-csv');

const fs = require('fs');

const csvFilePath = '././assets/employee.csv'

var stream = fs.createReadStream(csvFilePath);


//var stream = fs.createReadStream('./tmp_dir/'+files.fileUploaded.name);


var fileStream = fs.createReadStream(csvFilePath) //,
//var parser = fastCsv();
//const StreamCsv = csv().on('data' => console.log(data));

//stream.pipe(StreamCsv);

/*router.get('/employee', (req, res, next) => {
    console.log(req.param);
    console.log(req.query);

    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            //console.log(jsonObj);
            //console.log(Array.from(jsonObj, fruit => fruit.Bundesland));
            const reqQueryData = req.query;
            //console.log(Object.entries(reqQueryData).length !== 0);
            if (Object.entries(reqQueryData).length !== 0) {
                const reqQueryDataKey = Object.keys(reqQueryData)[0];
                const reqQueryDataVal = Object.values(reqQueryData)[0];


                var keyValFilter = jsonObj.filter(function (obj) {
                    //console.log(obj);
                    return obj[reqQueryDataKey] === reqQueryDataVal;
                });
                console.log(keyValFilter)

                const columnFilter = Array.from(jsonObj, fruit => fruit[reqQueryDataKey]);
                console.log(columnFilter);
                if(reqQueryDataVal !== '' ) {
                    res.send(keyValFilter);
                }
                else {
                    res.send(columnFilter);
                }
            } else {
                res.send(jsonObj);
            }

        })


});*/

router.get('/', (req, res, next) => {
    //console.log(req.param);
    console.log(req.query);

    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            //console.log(jsonObj);
            //console.log(Array.from(jsonObj, fruit => fruit.Bundesland));
            const reqQueryData = req.query;
            //console.log(Object.entries(reqQueryData).length !== 0);
            if (Object.entries(reqQueryData).length !== 0) {
                let reqQueryDataKey = Object.keys(reqQueryData)[0];
                let eqQueryDataVal = Object.values(reqQueryData)[0];
                /*for (const index of Object.keys(reqQueryData)) {
                    console.log(index);
                    //console.log(Object.values(reqQueryData)[index]);
                    reqQueryDataKey = Object.keys(reqQueryData)[index];


                }
                for (const index1 of Object.values(reqQueryData)) {
                    console.log(index1);
                    reqQueryDataVal = Object.values(reqQueryData)[index1];

                }*/
                const map = new Map(Object.entries(reqQueryData));
                        let cols1;
                        let cols2;
                        for (let [key, value] of map)
                        {
                          /*  console.log(key);
                             console.log(value);*/
                            cols1 = key;
                            cols2 = value;
                           //cols = value.split('');
                        }


                /*  console.log(cols1);
                             console.log(cols2);*/

                var keyValFilter = jsonObj.filter(function (obj) {
                    console.log(reqQueryDataKey);
                    
                    //console.log(obj);
                    return obj[reqQueryDataKey] === reqQueryDataVal;
                });
                 //console.log(keyValFilter)

                const columnFilter = Array.from(jsonObj, fruit => fruit[reqQueryDataKey]);
                
                res.send(keyValFilter);
                //console.log(columnFilter);
                /*if(reqQueryDataVal !== '' ) {
                    res.send(keyValFilter);
                }
                else {
                    res.send(columnFilter);
                }*/
            } else {
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
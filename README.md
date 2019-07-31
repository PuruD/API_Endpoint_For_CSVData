# Read CSV file through Node API

Read/sort CSV file data through Node API in JSON format

## Getting Started

Please follow below steps to run CSV file read node api.

### Prerequisites

What things you need to install the software and how to install them

```
Node Installed Version v8.9.1 or above
NPM version 6.4.1 or above
Postman to test api

```

### Installing

A step by step series of examples that tell you how to get a development env running

Step 1

```
Clone this repository using 'git clone git@git.persistent.co.in:hmilab/Client.git' command
```

Step 2

```
Go to 'CSV_File_Read_Node_API' folder
```

Step 3

```
Run 'npm install' command
```


Step 4

```
Run 'npm start' command
```

Step 5 (optional)

```
You can change csv file data according to your requirement - asset/employee.csv
```

Step 6 (optional)

```
if you change csv file name (e.g. employee.csv) then you have to change (csvFilePath) in api > routes > employee.js file.
```


## Run API

http://localhost:5000/employee

### Sort data by column

http://localhost:5000/employee?lastName

### Sort data by key value

http://localhost:5000/employee?firstName=Brenda&lastName=Robinson

How to change PORT 

```
Go to server.js and change port number (e.g 5000 to 3000)
```

## Built With

* [Node](https://nodejs.org/en/) - Node.js is an open source server environment
* [Express](https://expressjs.com/) - web framework for Node.js
* [fast-csv](https://www.npmjs.com/package/fast-csv) - Fast-csv for parsing and formatting csv


## Authors

* **HMI COE** 


## License

This project is licensed under MIT license.



const express = require('express')
const csvtojson = require('csvtojson')
const csvfilepath = "testdata.csv"
const fs = require('fs')

const app = express()

app.get('/',(req,res)=>{
    csvtojson()
    .fromFile(csvfilepath)
    .then((jsonfile) => {
        //console.log(json)
    
        fs.writeFileSync("output.json",JSON.stringify(jsonfile),"utf-8",(err) =>{
            if(err) console.log(err)
        })
        res.json(jsonfile)
    })
})
app.listen(3000)
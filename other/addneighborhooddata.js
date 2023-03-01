const {parse} = require('csv-parse');
const fs = require('fs');



// fs.createReadStream('./other/nycneighborhood.csv')
// .pipe(parse({columns:true}))
// .on('data', (data) => result.push(data))
// .on('error', (error) => console.log(error))
// .on('end', () => console.log('end'))
// create function to read nystate json file


// use SYNCO version
function readFile (){
    const result = []
    fs.readFile('./other/nycneighborhood.csv', (err, data) => {
        if (err) throw err;

        parse(data, {columns: true, trim: true}, (err,rows)=>{
                rows.forEach(row => {
                    result.push(row)
                })
        })
    })
    handleCSV(result)
}

function handleCSV(){
    console.log(result)
}



// create function to read nyc csv file





function handleBrew(data){

}

readFile()
// create function to use nyc csv data and build dictionary with keys as zip code and values as [bourough, neighborhood]


// create function that reads each brewery and compares it to nyc dictionary
    // if it's there, add neighborhood / bourough, push brewery into array


// save new array into json file
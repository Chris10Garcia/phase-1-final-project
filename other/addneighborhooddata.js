const fs = require('fs');

function main(){
    let rawData = fs.readFileSync('./other/nychood.json')
    let json = JSON.parse(rawData)
    const zipMap = handleNYCHood(json)

    rawData = fs.readFileSync('./other/nyStateData.json')
    json = JSON.parse(rawData)

    compareWriteData(json, zipMap)
}

function handleNYCHood(data){
    const zipMap = {}
    data.forEach(obj => {
        zipMap[obj.ZipCode] = [obj.Borough, obj.Neighborhood]
    });
    return zipMap
}

function compareWriteData(nyState, zipMap){
    const nycBrews = []
    nyState.forEach(brewery => {
        const nyStateZip = brewery.postal_code.slice(0,5)
        if (zipMap[nyStateZip]){
            brewery.Borough = zipMap[nyStateZip][0]
            brewery.Neighborhood = zipMap[nyStateZip][1]
            nycBrews.push(brewery)
        }
    })

    saveData(nycBrews)
}

function saveData(data){
    let fs = require('fs')
    fs.writeFile("db.json", JSON.stringify(data), 'utf-8', function(err){
        if (err){
            console.log(err)
        }
    })
}



main()





// create function to use nyc csv data and build dictionary with keys as zip code and values as [bourough, neighborhood]


// create function that reads each brewery and compares it to nyc dictionary
    // if it's there, add neighborhood / bourough, push brewery into array


// save new array into json file





// fs.createReadStream('./other/nycneighborhood.csv')
// .pipe(parse({columns:true}))
// .on('data', (data) => result.push(data))
// .on('error', (error) => console.log(error))
// .on('end', () => console.log('end'))
// create function to read nystate json file


// use SYNCO version
// function readFile (){
//     const result = []
//     fs.readFile('./other/nycneighborhood.csv', (err, data) => {
//         if (err) throw err;

//         parse(data, {columns: true, trim: true}, (err,rows)=>{
//                 rows.forEach(row => {
//                     result.push(row)
                    
//                 })
//                 console.log(result)
//         })
        
//     })
//     // handleCSV(result)
// }
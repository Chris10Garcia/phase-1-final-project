// need to write code to download breweries located in NY State first

// apparently this is how you do import in JS / node.js
const fetch = require('node-fetch')


async function getData(){
    let allData = []
    let morePagesAvailable = true;
    let currentPage = 0;

    // need to keep repeatly fetching data until there is no more pages left
    while(morePagesAvailable){

        currentPage++
        let data = await fetch(`https://api.openbrewerydb.org/breweries?by_state=new_york&per_page=10&page=${currentPage}`)
                            .then(resp => resp.json())              // using async and await makes it easier to write code
        
        data.forEach(obj => allData.push(obj))
        morePagesAvailable = Boolean(data.length)   //when there is zero elements in the array, this will result in false, stopping the loop
    }

    saveData(allData)
        
}

// function to save the data into .json file
function saveData(data){
    let fs = require('fs')
    fs.writeFile("./other/nyStateData.json", JSON.stringify(data), 'utf-8', function(err){
        if (err){
            console.log(err)
        }
    })
}

getData()
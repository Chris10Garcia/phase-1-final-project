urlJSON = 'http://localhost:3000/nyc_breweries/'

/* data structure
id, name, street, city, state, postal_code, phone, website_url, Borough, Neighborhood
*/


// maybe add function to build likes? / area where breweries are liked?


// builds brewery detail HTML elements
function buildDetail(brewObj){
    const divBrewDetail = document.getElementById('brewDetail')

    divBrewDetail.innerHTML = 
        `<h4>${brewObj.name}</h4>
        <p>Neighborhood of ${brewObj.Neighborhood}</p>
        <p>Within the borough of ${brewObj.Borough}</p>
        <p>${brewObj.street}</p>
        <p>${brewObj.city}, ${brewObj.state} ${brewObj.postal_code}</p>
        <p>Phone Number: ${brewObj.phone} and website: <a href = ${brewObj.website_url}> ${brewObj.website_url}</p>
        `   
}


// builds brewery list HTML elements
function buildList(brewArray){
    const divBrewList = document.getElementById('brewList')
    divBrewList.innerHTML = ''

    const ul = document.createElement('ul')

    brewArray.forEach(brewObj => {
        const li = document.createElement('li')
        li.innerText = brewObj.name
        li.id = brewObj.id
        addListenerToListBttn.call(li)
        ul.append(li)
    });

    divBrewList.append(ul)
}


//

// fetches list of breweries while dealing with filters / search parameters
function getDataForList(filter = ''){
    
    // proceses filter and add's the correct tail end for fetch URL
    switch (filter){
        // values are from radio button
        case "all_boroughs":
        case "Bronx":
        case "Brooklyn":
        case "Manhattan":
        case "Staten Island":
            filter = "?Borough=" + filter
            break;

        // for intital load / all data
        case "":
            break

        // for searching
        default:
            filter = "?q=" + filter
    }

    fetch(urlJSON + filter)
        .then(response => response.json())
        .then(data => buildList(data))
}


// fetches single specific brewery data using brewery id
function getDataForBrewery(brewId){
    fetch(urlJSON + brewId)
        .then(response => response.json())
        .then(data => buildDetail(data))
}

// patch request to handle likes / unlikes


/*
    all event listeners required for this app are written below
*/

// waits until page loads to run following js code depenedant on loaded page
document.addEventListener('DOMContentLoaded', ()=>{
    getDataForList()
    addListenerToRadioBttn()
    addListenerToFormSearch()
})

// adds functionality to each brewery name and passes id to acquire specific brewery details
function addListenerToListBttn(){
    this.addEventListener('click', e => getDataForBrewery(e.target.id))
}

// adds functionality to radio buttons and passes value to acquire brewery list
function addListenerToRadioBttn(){
    const filterBttn = document.getElementById('filterButtons')
    filterBttn.addEventListener('change', e => getDataForList(e.target.value))
}

// adds functionality to search and passes value to acquire brewery list
function addListenerToFormSearch(){
    const form = document.getElementById('formSearch')
    form.addEventListener('submit', e => {
        e.preventDefault()
        getDataForList(e.target.search.value)
    })
}

// event listener to handle likes / unlikes
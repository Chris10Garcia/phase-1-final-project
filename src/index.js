urlJSON = 'http://localhost:3000/nyc_breweries/'

/* data structure
id, name, street, city, state, postal_code, phone, website_url, Borough, Neighborhood
*/


// maybe add function to build likes? / area where breweries are liked?


// builds brewery detail HTML elements
function buildDetail(brewObj){
    const divBrewDetail = document.getElementById('brewDetail')

    divBrewDetail.innerHTML = 
        `<h4><u>${brewObj.name}</u></h4>
        <br>Neighborhood: ${brewObj.Neighborhood}
        <p>Borough: ${brewObj.Borough}</p>
        <br>${brewObj.street}
        <br>${brewObj.city}, ${brewObj.state} ${brewObj.postal_code}
        <br>Phone Number: ${brewObj.phone}
        <br>Website: <a href = ${brewObj.website_url}> ${brewObj.website_url}
        `   
}


// builds brewery list HTML elements
function buildList(brewArray){
    const divBrewList = document.getElementById('brewList')
    divBrewList.innerHTML = ''
    
    brewArray.forEach(brewObj => {

        const div = document.createElement('div')
        div.className = "brewery"

        const p = document.createElement('p')
        p.innerText = brewObj.name
        
        const bttn = document.createElement('button')
        bttn.innerText = "Click here for more details"
        bttn.id = brewObj.id

        addListenerToListBttn.call(bttn)

        div.append(p, bttn)

        divBrewList.append(div)

    });
}


//

// fetches list of breweries while dealing with filters / search parameters
function getDataForList(filter = ''){
    
    // proceses filter and add's the correct tail end for fetch URL
    switch (filter){
        // values are from radio button elements
        case "Bronx":
        case "Brooklyn":
        case "Manhattan":
        case "Staten Island":
            filter = "?Borough=" + filter
            break;

        // for intital load / all boroughs
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
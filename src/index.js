// url for API
urlJSON = 'http://localhost:3000/nyc_breweries/'

/* attributes from data structure used
id, name, street, city, state, postal_code, phone, website_url, Borough, Neighborhood
*/



/*
****************************************
*   Functions used for building page   *
****************************************
*/


// builds brewery details
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


// builds brewery list
function buildList(brewArray){
    const divBrewList = document.getElementById('brewList')
    divBrewList.innerHTML = ''
    
    // ****** Required project array iteration below ******
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



/*
***************************************
*   Functions used for data fetches   *
***************************************
*/

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

        // for searching key terms 
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


/*
********************************************************************
*    all event listeners required for this app are written below   *
********************************************************************
*/


// adds functionality to button and passes id to acquire specific brewery details when activated
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

// waits until page loads to run following js code
document.addEventListener('DOMContentLoaded', ()=>{
    getDataForList()
    addListenerToRadioBttn()
    addListenerToFormSearch()
})


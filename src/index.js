urlJSON = 'http://localhost:3000/nyc_breweries/'
/* data structure
id, name, brewery_type, street, city, state,
county_province, postal_code, country, longitude, latitude, phone
website_url, updated_at, created_at, Borough, Neighborhood

*/



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


function buildList(brewArray){
    const divBrewList = document.getElementById('brewList')
    divBrewList.innerHTML = ''

    const ul = document.createElement('ul')

    brewArray.forEach(brewObj => {
        const li = document.createElement('li')
        li.innerText = brewObj.name
        li.id = brewObj.id
        li.addEventListener('click', (e) => getDataForBrewery(e.target.id))
        ul.append(li)
    });

    divBrewList.append(ul)
}


function getDataForList(filter = ''){
    
    // proceses filter and add's the correct tail end for fetch URL
    switch (filter){
        case "all_boroughs":
        case "Bronx":
        case "Brooklyn":
        case "Manhattan":
        case "Staten Island":
            filter = "?Borough=" + filter
            break;
        case "":
            break
        default:
            filter = "?q=" + filter
    }

    fetch(urlJSON + filter)
    .then(response => response.json())
    .then(data => buildList(data))
}


function getDataForBrewery(brewId){
    fetch(urlJSON + brewId)
    .then(response => response.json())
    .then(data => buildDetail(data))
}

function addListenerToRadioBttn(){
    const filterBttn = document.getElementById('filterButtons')
    filterBttn.addEventListener('change', e=> getDataForList(e.target.value))
}

function addListenerToFormSearch(){
    const form = document.getElementById('formSearch')
    form.addEventListener('submit', e =>{
        e.preventDefault()
        getDataForList(e.target.search.value)
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    getDataForList()
    addListenerToRadioBttn()
    addListenerToFormSearch()
})


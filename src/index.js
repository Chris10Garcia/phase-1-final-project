urlJSON = 'http://localhost:3000/nyc_breweries/'
/* data structure
id, name, brewery_type, street, city, state,
county_province, postal_code, country, longitude, latitude, phone
website_url, updated_at, created_at, Borough, Neighborhood

*/


function buildDetail(brewObj){
    const divBrewDetail = document.getElementById('brewDetail')

    divBrewDetail.innerHTML = 
        `<h4>${brewObj.name}</h5>
        <p>Neighborhood of ${brewObj.Neighborhood}</p>
        <p>Within the borough of ${brewObj.Borough}</p>
        <p>${brewObj.street}</p>
        <p>${brewObj.city}, ${brewObj.state} ${brewObj.postal_code}</p>
        <p>Phone Number: ${brewObj.phone} and website: ${brewObj.website_url}
        `   
}


function buildList(brewArray){
    const divBrewList = document.getElementById('brewList')

    const ul = document.createElement('ul')

    brewArray.forEach(brewObj => {
        const li = document.createElement('li')
        li.innerText = brewObj.name
        li.id = brewObj.id
        li.addEventListener('click', (e) => getData(e.target.id))
        ul.append(li)
    });

    divBrewList.append(ul)
}




function getData(brewId = ''){

    if (brewId){
        fetch(urlJSON + brewId)
        .then(response => response.json())
        .then(data => buildDetail(data))
    } else {
        fetch(urlJSON)
        .then(response => response.json())
        .then(data => buildList(data))
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    getData()
})
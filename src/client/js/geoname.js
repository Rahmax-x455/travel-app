//Get Lat and Lng By Country Name
export function geonameAPI(country){
    return fetch(`http://localhost:8081/api/geoname`,{
        method:'POST',
        credentials: 'same-origin',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({countryName: country})
    })
    .then(res=>res.json())
    .then(data=>{

        return data;
    });
}
//Get weather forcast based on lng and lat
export function weatherbit(lngValue,latValue){
    return fetch(`http://localhost:8081/api/weatherbit`,{
        method:'POST',
        credentials: 'same-origin',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {   lng: lngValue,
                lat: latValue
            })
    })
    .then(res=>res.json())
    .then(data=>{

        return data;
    });
}
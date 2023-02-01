//Getan image By Country Name
export function pixabay(country){
    return fetch(`http://localhost:8081/api/pixabay`,{
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
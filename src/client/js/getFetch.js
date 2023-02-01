export function getFetch(){
    console.log('begin fetching');
    fetch('http://localhost:8081/test')
    .then(res=>res.json())
    .then(data=>console.log(data));
    console.log('end fetching');
}
import fetch from 'node-fetch';     //installed npm -i node-fetch

const API = 'https://api.escuelajs.co/api/v1'

function fetchMyData(APIurl){
    return fetch(APIurl);   //fetch is a Promise, allows use of reserved words e.g. then, catch, finally, response, etc.
};

/*fetchMyData(`${API}/products`)
    .then( response => response.json())  //response can be any name. First we need to conver data into Json for readability
    .then( items => {
        console.log(items)  //show the data already convertedinto JSON
    })
    .then( () => console.log('hola') )
    .catch( error=>(console.log(error)) );*/

fetchMyData(`${API}/products`)  //brings all products
    .then( (response)=> response.json() )   //converts
    .then( (products)=> { 
        console.log(products);
        return fetchMyData(`${API}/products/${products[0].id}`)})    //brings first poduct by its ID
    .then( (response=> response.json))
    .then( (product)=> { 
        console.log(product.title);
        return fetchMyData(`${API}/categories/${product.category.id}`)} )  //brings category of previous product
    .then( (response=> response.json))
    .then( (category)=> {
        console.log(category.name);
    } )
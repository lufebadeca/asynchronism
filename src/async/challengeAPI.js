import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchMyData(urlAPI){     //async function (notice this way 1 of declaring it async)
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

const asyncFunction = async (urlAPI) => {   //async function (notice this way 2 of declaring it async)
    try{        //try allows to await for several calls grouped
        const products = await fetchMyData(`${urlAPI}/products`);
        const product = await fetchMyData(`${urlAPI}/products/${products[0].id}`);
        const category = await fetchMyData(`${urlAPI}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    catch (error){
        console.log(error);
    }
}       //notice how the code is cleaner and free of callback hell

asyncFunction(API);
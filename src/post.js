import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

const data = {
    "title": "Luifer's old printed outlet",
    "price": 15,
    "description": "My old printer, 4 ink colors",
    "categoryId": 1,
    "images": ["https://townsquare.media/site/112/files/2019/10/RS26427_131889619_printer_old-scr.jpg"]
  }

function postMyData(urlAPI, data){
    const response = fetch(urlAPI, {    //additional argument for fetch to make POST
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

postMyData(`${API}/products`, data)
    .then(response => response.json() )      //server response when data is stored
    .then(data1 => console.log( data1 ) )
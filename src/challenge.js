var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //must install npm xmlhttprequest
const API = 'https://api.escuelajs.co/api/v1';  //products endpoint URL

function fetchMyData(urlApi, callback){ //function to prepare and control the request flow
    let xhttp =  new XMLHttpRequest();  //allows control on the flow od the call, instead of fetch

    xhttp.open('GET', urlApi, true);    //uses object and opens a connection to API, true to enable
    xhttp.onreadystatechange = function( event ) {  //event to lsiten request behavior
        if (xhttp.readyState === 4){    //4 for completed, === to validate value and type
            if(xhttp.status === 200){   //returns status of the request RESPONSE. 200 for OK
                callback(null, JSON.parse(xhttp.responseText)); //transforms data into JSON object
            }
            else{   //if response is not 200 means error
                const error =  new Error('Error '+ urlApi); //creates an error object?
                return callback(error, null);   //returns nothing but the error 
            }
        }
    }
    xhttp.send();   //sends the pettition
};

//the following portion will use the custom function several times to retrieve several example data from the API:
fetchMyData(`${API}/products`, function(error1,data1){    //gets all products and stores it into data1
    if(error1)  return console.error(error1);   //if failed request, show error

    fetchMyData(`${API}/products/${data1[0].id}`, function(error2,data2){ //gets the first product id and stores into data2 
        if(error2) return console.error(error2);
        fetchMyData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){   //gets the category id of first product, given its id
            if(error3) return console.error(error3);
            console.log(data1[0]);  //from all products obtained, show the first
            console.log(data2.title);   //show the title for the given id (of the first product)
            console.log(data3.name);
        });
    });
});
//notice how different calls are made within the previous, creating a spaguetti-like code
//Why not make different calls within same level?

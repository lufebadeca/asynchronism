const cows =14;

const cowsCount = new Promise(function(resolve, reject){
    if (cows >10) {
        resolve(`Cow account: ${cows} suitable to milk`);
    }
    else{
        reject('not enough cows for milk production');
    }
});

cowsCount.then(result=> {
    console.log(result);
}).catch(error=>{console.log(error)}).finally(()=> console.log('finally'))

//catch, then and finally rteceive anonym functions as parameters


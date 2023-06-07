const myAsyncFun = () => {
    return new Promise( (resolve, reject) => {  //something that we now will happen at some point
        (true)
            ? setTimeout( ()=> resolve('Promise resolution!'), 2500)
            : reject(new Error('Error...'));
    }  );
}

const anotherFunc = async() => {    //async sets the function to be prepared to await for a promise resolution?
    const myAsyncFunCall = await myAsyncFun();
    console.log(myAsyncFunCall);
    console.log("Async call- after awaited for promise");
}

console.log('First');
anotherFunc();
console.log('Last one');
const promise = new Promise((resolve, reject)=>{
    //long running task here
    //resolve for success
    //reject for failure
    setTimeout(()=>{
        resolve({
            name: 'Janek', 
            age: 29
        }); 
        //reject('Error!');
    }, 1500);
});
console.log('before');

promise.then((data)=>{
    console.log('1', data);
    
    return new Promise((resolve, reject)=>{
        //long running task here
        //resolve for success
        //reject for failure
        setTimeout(()=>{
            resolve('This is my other promise'); 
        }, 1500);
    });

}).then((str)=>{
    console.log('2', str);
}).catch((error)=>{
    console.log('error: ', error);
});

console.log('after');

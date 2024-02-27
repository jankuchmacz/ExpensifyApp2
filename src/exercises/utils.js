console.log('utils.js is running');

export const square = (x) => {
    return x*x;
}
export const add = (a, b) => {
    return a+b;
}
//exports: two types:  default export - named exports
//named export  because we export by name


//we can choose single default export!!


export default (a, b) => {
    return a-b;
}

//export {square,add, substract as default};
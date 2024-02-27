//object
/*const person = {
    name: 'Jan',
    age: 29,
    location: {
        city: 'Cracow',
        temp: -10
    }
};
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location
if(city && temperature){
    console.log(`It is ${temperature} in ${city}`);
}
const book = {
    title: 'Pilecki',
    author: 'Witold Pilecki',
    publisher: {
       name: 'PWN'
    }
};
const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);*/

///Array 
const address = ['69 Bienczycka', 'Cracow', 'Lesser Poland', '31-860'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee', '$2.0', '$2.5', '$2.75'];
const [coffee, , mediumCost] = item;
console.log(`A medium ${coffee} costs ${mediumCost} `);
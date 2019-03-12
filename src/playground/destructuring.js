// const person = { 
//     name: 'Adam', 
//     age: 36, 
//     location: { 
//         city: 'Saint Paul', 
//         temp: 12
//     }
// }; 

// const { name: firstName = 'Anonymous', age } = person; 

// console.log(`${firstName} is ${age}.`); 

// const { temp: temperature, city } = person.location; 

// if(city && temperature) { 
//     console.log(`It's ${temperature} in ${city}`); 
// }

// const book = { 
//     title: 'Ego is the enemy', 
//     author: 'Ryan Holiday', 
//     publisher: { 
//         // name: 'Penguin'
//     }
// }; 

// const { name: publisherName ='Self-Published' } = book.publisher; 

// console.log(publisherName); 

// Array desctructuring

const address = ['1744 Sherburne ave', 'Saint Paul', 'Minnesota', '55104']; 
const [, city, state = 'New York'] = address; 
console.log(`You are in ${city} ${state}`); 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']; 
const [itemName, , , mediumPrice] = item; 
console.log(`A medium ${itemName} cost ${mediumPrice}`); 


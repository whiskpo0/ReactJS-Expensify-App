// arguments objects - no longer bound with arrow functions


const add = (a, b) => { 
    // console.log(arguments); 
    return a + b; 
}

console.log(add(55, 1)); 

// this keyword - no longer bound with arrow functions 

const user = { 
    name : 'Adam Mathison', 
    cities: ['Saint Paul', 'Roseville', "Saint Paul Park"], 
    printPlacesLived () {    
        return this.cities.map((city) => { 
            return this.name + 'has lived in ' + city; 
        }); 
    } 
}; 

console.log(user.printPlacesLived()); 

const multiplier = { 
    numbers: [10, 20 , 30], 
    multiplyBy: 3, 
    multiply() { 
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
}; 

console.log(multiplier.multiply()); 
// solving for length
let cars = ['Ford', 'Dodge', 'Nissan', 'Tesla']
console.log(`the length of the cars array ${cars.length}`)

// solving concat
let moreCars = ['BMW', 'Bronco', 'Mustang', 'Honda']
let totalCars = cars.concat(moreCars);
console.log(`this is the toal of the cars [${totalCars}]`)
console.log(typeof totalCars)

// solving indexof 
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// solving join
let stringOfCars = totalCars.join()
console.log(stringOfCars)

// solving split 
let carsFromString = stringOfCars.split(`','`)
console.log(carsFromString)

// solving reverse
let carsInReverse = totalCars.reverse();
console.log(carsInReverse)

// solving sort 
let carsInReverseAlpha = carsInReverse.sort();
console.log(carsInReverseAlpha)

// solving slice - slice does not mutate or change original array
let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4,6);
console.log(reptiles)
console.log(pets)


// solving splice 
let removedRetiles = pets.splice(4,2 , 'hamster')
console.log(removedRetiles)
console.log(pets)

// solving pop 
let removedPet = pets.pop()
console.log(removedPet);
console.log(pets)

// solving push 
pets.push(removedPet)
console.log(pets)

// solving shift
let firstPet= pets.shift()
console.log(firstPet)
console.log(pets)

// solving unshift 
pets.unshift('turtle') 
console.log(pets)


// solving forEach
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

let addTwo = (num, index, arr) => {
    for(let i = 0; i < arr.length; i++){
        return arr[index]= num +2
    }
}

numbers.forEach(addTwo)
console.log(numbers)
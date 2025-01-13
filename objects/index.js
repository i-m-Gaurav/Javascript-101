const Car = {
    Name : 'BMW',
    Price : 40000000,
    Model : 'S',
    Features : [
        {
            breaks : 'power breaks',
            hp : 110
        }
    ],
}

const results = JSON.parse(JSON.stringify(Car));
console.log(results);

// console.log(Car);
// console.log(JSON.parse(Car));
// console.log(JSON.stringify(JSON.parse(Car)));




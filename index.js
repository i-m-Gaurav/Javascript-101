console.log("Practice javscript for the interview.")

// For loops

for(let i = 0 ; i< 4 ; i++){
    console.log(i);
}

// while(5 < 6){
//     console.log('wow')
// }

// for in Loops

const person = {name : 'Alice', age : 44}

for(let key in person){
    console.log(key);
}

// console.log(person.name);

let colors = ['red', 'blue','green'];

for(let color of colors){
    console.log(color);
}

console.log(colors);

let newColors = [...colors, 'pink'];

console.log(newColors);

//Write a for loop to print numbers from 1 to 10.

// for(let i = 1 ; i <= 10; i++){
//     console.log(i);
// }

// Write a for loop to print numbers from 10 to 1 in reverse order.

for(let i = 10 ; i>0; i--){
    console.log(i);
}

//Use a for loop to print all even numbers between 1 and 20.

for(let i = 0 ; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//Write a for loop to calculate the sum of all numbers from 1 to 100.
let sum = 0;
for( let i  = 1 ; i <= 100 ;i++){
     sum = sum + i;
}

console.log(sum)

// Use a for loop to iterate over the array [10, 20, 30, 40, 50] and print each element.

const nums = [10,20,30,40,50]

let result   = 0;

for(let num of nums){
    console.log(num);
    result = result + num;
}
console.log("sum is :- "  + result);

// Use a for loop to find the largest number in the array [3, 7, 2, 9, 5].

const a = [3,7,2,99,5];

let largest = 0;

for( let i = 0 ; i< a.length; i++){

    if( a[i] > a[i-1]){
        largest = a[i];
    }

}
console.log(largest);

// Use a for loop to count how many numbers in the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are even.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0;

for(let i = 0 ;i< arr.length; i++){
    if(arr[i] %2 ==0){
        count++;
    }
}

console.log(count);

//Use a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array

const arr1 = [1, 2, 3, 4, 5]
const res = []

for(let i = arr1.length-1 ;i >= 0 ; i--){

    res.push(arr1[i]);
    
}
console.log(res)


const main = [1,2,3,4,[4,5,6,6,[3,3,2,2]]];

console.log(main);





const per = {
    name :'gaurav',
    age : 43
}

// There are two types of notation for accessing the objects properties.
// dot notation and bracket notion.

console.log(per.name);

console.log(per['name'])

console.log(per.age);

console.log(per['age']);


// delete keyword can delete the objects property

delete per.name;

console.log(per)












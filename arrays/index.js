let arr = [1,2,3,4,5,6];

let result = arr.splice(4,2, "gaurav",'Gautam');
console.log(result);



// it will delete the element from the array, 
// takes two arguments, first one is for starting point, 
// second one is how many element from that starting point 
// you want to delete.

// also it modifies the original array.

// we can also insert the element , and it will be inserted at the deleted element place.

console.log(arr);

// its mutable.



// Now there is another method called SLICE

let res = arr.slice(1,6);
console.log( " This is the slice method := " + res);

// This method is immutable original array stays the same,
// it returns the deleted element,
// first argument is starting point, 2nd is ending point, and it will just return the 
// element from start to end, that's it.




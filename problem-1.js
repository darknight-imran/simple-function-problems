// BIggest number For of Loop

/*
const numbers = [10, 15, 12, 25, 63, 54, 56, 58, 4, 65, 46, 56, 46, 56, 46, 68, 9, 46, 9, 46, 125, 460];
function biggerNumber(numbers) {
    let bigNumber = numbers[0];
    for (const number of numbers) {
        if (number > bigNumber) {
            bigNumber = number;
        }

    } return bigNumber;
}

const bigNumberResults = biggerNumber(numbers);
console.log(bigNumberResults);

*/

// BIggest number For of Loop

/*
const numbers = [10, 15, 12, 25, 63, 54, 56, 58, 4, 65, 46, 56, 46, 56, 46, 68, 9, 46, 9, 46, 125, 460];
let bigNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {


    if (numbers[i] > bigNumber) {
        bigNumber = numbers[i];
    }
    console.log("after loop:", bigNumber);

}
console.log(bigNumber);
*/

// for loop function biggest number count 


function giveBiggestNumber(array) {
    if (!Array.isArray(array)) {
        // (typeof(!Array.isArray(array)))
        console.log('this is not an array...!');

    }
    let big = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > big) {
            big = array[i]
        }

    }
    return big;
}
const numbers = [10, 15, 12, 25, 63, 54, 56, 58, 4, 65, 46, 56, 46, 56, 46, 68, 9, 46, 9, 46, 125, 460];
// const numbers = true;
const results = giveBiggestNumber(numbers);
console.log(results);



// 2nd largest Element
/*
function findSecondLargest(arr) {
    let first, second;

    // There should be at least two elements
    if (arr.length < 2) {
        return "Invalid Input";
    }

    // Sort the array in ascending order
    arr.sort();

    // Start from the second last element as 
    // the largest element is at last
    for (let i = arr.length - 2; i >= 0; i--) {
        // If the element is not equal to the 
        // largest element
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }

    return "There is no second largest element";
}

// Driver program to test the function
const arr = [12, 35, 10, 35, 10, 34, 1];

// Output: The second largest element is 34
console.log(findSecondLargest(arr)); 

*/
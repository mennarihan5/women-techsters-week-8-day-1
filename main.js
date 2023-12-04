// 	1.	Create a function that checks if the input/parameter is an even number.
function check(num) {
    if (num % 2 === 0) { 
      return "Even";
    } 
    return "Odd";
  }

check(4);

// 	2.	Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
function numbers(n1,n2) {
    let array = [];
    if (n1 < n2) {
       for (let i = n1; i <= n2; i++) {
            array.push(i);
        }
        return array;
     }
    return `n1 should be less than n2`;
  } 

numbers(1,10);

// 	3.	Create a function that sum the values in-between two numbers. 
function sum(a, b) {
    let total = 0;
    for (let i = a; i <= b; i++) {
        total += i;
    }
    return total;
  }

sum(1,10);
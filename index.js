/*

Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” 
instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz“.

*/

function FizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0){
    return ("FizzBuzz");
  }

  if (number % 3 === 0) {
    return "Fizz";
  }

  if (number % 5 === 0){
    return "Buzz";
  }
}

for (var i = 1; i < 101; i++){
  if (FizzBuzz(i)){
    console.log(FizzBuzz(i));
  } else {
    console.log(i);
  }
}

module.exports = {
  FizzBuzz
}
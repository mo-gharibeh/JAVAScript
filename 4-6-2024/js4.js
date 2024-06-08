/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(nc, pn, gl, jt) {
    console.log( "You will be a" +jt+ " in " +gl+" , and married to "+ pn+ " with" +nc+ " kids.");

}
tellFortune("3", "Alice", "Jordan", "software engineer");


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
////Solution
function calculateDogAge(arg){
  let age = arg * 7; 
  console.log("Your doggie is " + age + " years old in dog years!")
}
calculateDogAge(5);



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
////Solution
function calculateSupply(age, apd){
  let year = 100 - age;
  let days = 365 * year;
  let cupsNum = days * apd;
  console.log("You will need "+ cupsNum + " cups of tea to last you until the ripe old age of 100" )
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  console.log("Hello " + name);

}
greet("Mohammad");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
/* x is not defined *///////////

/*
function double(7) {
  return 2 * 7;
}
/* Unexpected number *///////////////
  
/*
function double('7') {
  return 2 * 'x';
}
/* Unexpected string *////////////



/*
6
fix these functions:*/
function double1(x) {
  return 2 * x ;
}

function double2(x) {
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num){
  console.log(num * num * num);
}
cube(5);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(){
  
}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  let x = 20 - age;
  if (age >= 20){
    return ("yes you can");
  }else{
    return ("please come back after "+ x + " years to get on");  
  }
}

console.log(canIGetADrivingLicense(18));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
/////Solution
function sameLength(str1, str2){
  if (str1.length == str2.length){
    return true;  
  }else{
    return false;
  }
}

let s = sameLength("car", "tea");
console.log(s);


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
////Solution
function largerNubmer(num1, num2){
  if (num1 > num2){
    return num1;
  }else{
    return num2;
  }
}
console.log(largerNubmer(8, 10));


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2, num3){
  if (num1 < num2 && num1 < num3 ){
    return num1;
  }else if (num2 < num3 && num2 < num1 ){
    return num2;
  }else {
    return num3;
  }
}
console.log(smallerNubmer(51, 8, 0));


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1, str2, str3, str4, str5) {
  let strings = [str1, str2, str3, str4, str5];

  let shortest = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < shortest.length) {
      shortest = strings[i];
    }
  }

  return shortest;
}

console.log(shorterString("apple", "banana", "pear", "grape", "kiwi"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
  let strings = [str1, str2, str3, str4, ];

  let longest = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < longest.length) {
      longest = strings[i];
    }
  }

  return longest;
}

console.log(longerString("apple", "banana", "pear", "grape", "kiwi"));





/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num){
  if (num % 2 == 0){
    return true;
  }else{
    return false;
  }
}
console.log(isEven(9));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
  if (num % 2 != 0){
    return true;
  }else{
    return false;
  }
}
console.log(isOdd(9));



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num){
  if (num < 0){
    return num * -1;
  }else {
    return num;
  }
}
console.log(positive(-5));


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fn, ln){
  return (fn + " " + ln)
}
console.log(fullName("Ahmad", "Ali"))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1, n2, n3, n4, n5){
  let numb = [n1, n2, n3, n4, n5];
  let sum = 0 ;
  let avr;
  for (let i = 0; i < 5; i++){
    sum += numb[i];
  }
  avr = sum / 5;
  return avr;
}
console.log(average(5,7,9,3,5));


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random();
}
console.log(randomNumber());





/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max){
  return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(5, 10)); 



/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
  function  rate(mark){
    if (mark < 50){
      return "Fail";
    }else if ( 50 <= mark && mark <= 59 ) {
      return "E";
    }else if ( 60 <= mark && mark <= 69 ) {
      return "D";
    }else if ( 70 <= mark && mark <= 79 ) {
      return "C";
    }else if ( 80 <= mark && mark <= 89 ) {
      return "B";
    }else if ( 90 <= mark && mark <= 100 ) {
      return "A";
    }
  }

console.log(rate(96));




/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counterr() {
  let count = 0;

  return function() {
    return count++;
  } 
}
const counter = counterr();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


function createCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  function resetCounter() {
    let previousCount = count;
    count = 0;
    return { previousCount: previousCount, message: "The counter has been reset" };
  }

  return { counter, resetCounter };
}

const counterObj = createCounter();

console.log(counterObj.counter()); 
console.log(counterObj.counter()); 
console.log(counterObj.counter()); 

const resetResult = counterObj.resetCounter();
console.log(resetResult.previousCount);
console.log(resetResult.message); 

console.log(counterObj.counter());
console.log(counterObj.counter()); 
console.log(counterObj.counter()); 
console.log(counterObj.counter()); 
console.log(counterObj.counter()); 
console.log(counterObj.counter()); 
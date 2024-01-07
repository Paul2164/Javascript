document.getElementById("sample").innerHTML = "Javascript is Good Language";

document.getElementById("elem").innerHTML = 4 +8;

const cars = ['volvo',"benz","toyota"];
cars[0] = "Lexus";
console.log(cars);
cars.push("Honda");
console.log(cars);

// javascript operator

// Arithmetic 

let x = 5;
let y = 2;

let z = x % 2;

console.log(z);

// Increment

let a = 1;

a++;

console.log(a);

let t = 10;

console.log(++t);
console.log(t);

let b = 4;

console.log(--b);

console.log(b);

let c = 5;

console.log(c--);
console.log(c);

 console.log(5+4);
 console.log(5-4);
 console.log(5*4);
 console.log(5**4);
 console.log(5%2);

 //Assignment operator

 let score = 10;
 score += 10;
 console.log(score);

 let balance = 5000;

 balance -= 400;
 console.log(balance);

 let fruit = 20;
 fruit *= 5;
 console.log(fruit);

 //Number operator

 let num = 100;
 console.log(typeof num);

 let mile = 1e6;
 console.log(mile);

 let smallNum = 1e-6;
 console.log(smallNum);

 const PI = 3.141596254;

 let num1 = PI.toFixed(2)
 num1= PI.toPrecision(5);
 console.log(num1);

// Date type

//string : string are series of character

let name = "James bond";

console.log(`My name is ${name}`);

let v = "fruits";

let u = 3 + 4;

let h = v + u;

console.log(h);


let day = "Good morning, ";

let night = "Good night, ";

let question = "How are doing?"

console.log(day + question);
console.log(night + question);


let course = "Javascript is interesting";


//console.log(course.trim());

// console.log(course.toUpperCase());
// console.log(course.toLowerCase());
// console.log(course.indexOf("a"));
// console.log(course.lastIndexOf("a"));
// console.log(course.slice(0,10));
// console.log(course.replace("not","so"));
// console.log(course.charAt(4));
// console.log(course.split(""));
// console.log(course.split(""));

let str = 'Breaded mushroom ';

console.log(str.padEnd(22, "topic"));

// const str1 = 'Breaded Mushrooms';

// console.log(str1.padEnd(25, '.'));

console.log(str.toString());

let letter = "Hello world";

console.log(letter.toString());



let myWord = "Be yes";

const myArray = myWord.split("");

let word = myArray[1];
console.log(word);

//Comparison operator

let p = 7;

console.log(p >10);
console.log(p>=10);

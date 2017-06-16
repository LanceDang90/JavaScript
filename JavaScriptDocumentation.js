WEBSITE TO TEST CODE:

jsbin.com
plnkr.co


"use strict" // Strict Mode


VARIABLE:

var var1 = 5;
var var2 = 'text';
var var3 = true;
var var4 = [1, 2, 3, '4'];
var var5 = [1, 2, ]; 	// var[2] = undefined
var var6 = undefined;
var var7 = null;
console.log(null == undefined); // true
console.log(null === undefined); // false
var var8 = NaN;
console.log(typeof var8); // "number"

typeof(var1)
typeof var1

var dynamicVariable = 5;
dynamicVariable = "five";

/////////////////Hoisting 
var1 = 5;
console.log(var1);
var var1;
/////////////////




CONTROL STRUCTURE: 


IF STATEMENT

var condition = 1; // true, 2, -1, 'text'
var anotherCondition = false; // null == false

if (condition) {
	// code
} else if (anotherCondition) {
	// code
} else {
	// code
}



SWITCH:

var luckyNumber = 4;

switch (luckyNumber) {
	case 1:
		console.log("IS 1");
		break;
	case 2:
		//code
		break;
	case 4:
		// code
		break;
	default:
		//code
}



FOR LOOP:

for (var i = 0; i < 5; i++) {
	for (var j = 0; j < 2; j++) {
		continue; // only apply for the inner loop
		break;	// only apply for the inner loop
	}
}



WHILE - DO WHILE LOOP:

var condition = true;
var i = 2;
while (condition) {
	if (i == 3) {
		condition = false;
	}
	console.log(i);
	i++;
}

do {
	console.log("Executed");
} while (condition);





OPERATORS:


ADDITION:

var a = 2;
var b = '1';
console.log(a + b); // "21"
// true + true = 2
// 12 + null = 12
// 12 + undefined = NaN
// 3 + ' join' = "3 join"
// true + ' join' = "true join"

SUBTRACTION:

a -= b;
a--;
// 'Split us' - 'us' = NaN
// 12 - '1' = 11

MULTIPLICATION:

var a = 1.3;
var b = 2.2;
a * b // 2.86000000
(a * b).toFixed(2); // 2.86
// 2 * '2.2' = 4.4
// 2 * 'text' = NaN
// 'text' * 'anotherText' = NaN
// 12 * null = 0
a * Infinity = Infinity

DIVISion:

12 / '2' = 6
3.3 / 2.2 = 1.499999998
(3.3 / 2.2).toFixed(3) = 1.499
10 % 3 = 1
10 / 0 = Infinity
10 / Infinity = 0

COMPARING:

1 === 1 // true
1 == '1' // true
1 === '1' // false
1 !== '1' // true
1 != '1' // false

NaN == NaN // false
NaN != NaN // false
0 == null // false
// null can't compare
null == undefined // true (exception)
undefined == 0 // false (undefined always return false when compare
			   //		except null)

BOOLEAN:

(1 == 1) && ( 2 == 2)
(1 == 1) || ( 2 == 2)
(!2) // false

TERNARY

(1 == 1) ? 'Equal' : 'Not Equal';









GLOBAL VS LOCAL:

function notLocalScope() {
	test = 'global scope';
}
console.log(test); // test is a global var if not using strict mode






ARRAY:

var array = [1, 2, 3];
array.length // 3
array[5] = 100;
console.log(array); // [1, 2, 3, undefined, underfined, 100]

array.forEach(function(element) {
	console.log(element); // 1, 2, 3, undefined, underfined, 100
});

array.push(4); // adding to the end of the array
array.pop(); // pop out the last element
array.shift(); // pop out the first element
array.unshift('new'); // adding to the begining of the array
array.indexOf('new'); // get the index of the element's value 'new'
array.splice(3); // get the array from index 3 - 1 to the end
				// the old array lost the elements
array.slice(3); // the same as above, but the old array stay untouch


// the function run on each value of the array, and return a new array
array.filter(function(value) {
	return value > 2;
});

array.map(function(value)) {
	return value * 2;
});

array.reverse(); // modify the old the array and reverse it

array.concat(newArray); // the new and old array are untouch

array.join(', '); // join all the elements in the array together with ','


// reduce to the total of all the elements in the array
array.reduce(function(total, value) {
	return total + value;
});







OBJECT:

var person = {
	name: "Lance",		// "name": 'Lance'
	age: 28,
	details: {
		hobbies: ['Sports', 'Cooking'],
		location: 'USA'
	}, 
	greet: function() {
		console.log('Hello! I am ' + this.name);
	}
};
console.log(person.name);
console.log(person['name']);
person.details.hobbies;

person.greet(); // return Hello! I am Lance

person.name = 'Yen'


// create another object
var anotherPerson = new Object();
anotherPerson.name = 'Yen';
anotherPerson.age = 28;
anotherPerson.job = 'CS'; // create a new field


// another way to create a new object
var anotherPerson2 = Object.create(null);
var anotherPerson2 = Object.create(person); // get the prototype of person object
anotherPerson2.name = 'Anna';
anotherPerson2.age // return 28




var person = {
	name: "Lance",		// "name": 'Lance'
	age: 28
};

person.__proto__ // return the prototype of person
person.toString(); // prototype has some built-in methods



Object.prototype.greet = function () {
	console.log("hello there, I am " + this.name);
};
person.greet(); // hello there!

var lance = Object.create(person);
var yen = Object.create(person);
yen.name = "Yen";

lance.greet(); // hello there, I am Lance
yen.greet(); // hello there, I am Yen
yen.__proto__ == person // true (not safe)
yen.__proto__.__proto__ == Object.prototype // true
Object.getPrototypeOf(yen) == person // true



// Contructor function, create a prototype object
function Person() {
	this.name = 'Max';
	this.greet = function() {
		console.log("hello, I am " + this.name);
	}
}

Person.prototype.greet = function () {
	console.log('Hello');
};


var person = new Person();
person.name = 'Lance';

person.__proto__ == Person // false
person.__proto__ == Person.prototype // true

person instanceof Person // true



// passing arguments to the constructor function
function Person(name, age) {
	this.name = name;
	this.age = age;
}

var lance = new Person('Lance', 28);
var yen = new Person('Yen', 28);


bind(), call(), apply() are using for object



// Properties with defineProperty
var account = {
	cash = 12000,
	_name: 'Default',
	withdraw: function(amount) {
		this.cash -= amount;
		console.log('withdraw ' + amount + ', new cash reserve is: ' + this.cash);
	}
};

Object.defineProperty(account, 'deposit', {
	value: function(amount) {
		this.cash += amount;
	}
});

Object.defineProperty(account, 'name', {
	//value: 'ID000-1',
	writable: true,
	enumerable: true
	get: function() {
		return 'Hello';
	}
	set: function(name) {
		this._name = name;
	}
});

account.name // Hello;



// built-in Methods and Properties
var person = {
	name: 'Max',
	age: 27,
	greet: function() {
		console.log('Hello');
	}
}

delete person.name; // delete persion.name
'age' in person; // true

for (var field in person) {
	console.log(person[field]);
}







DEBUGGING WITH THE BROWSER DEVELOPER TOOLS:

option + command + i // opend the window
console, source, set the break point


try {
	// code
} catch (error) {
	console.log(error);
} finally {
	// code
}










FUNCTIONS:


function calc() {
	console.log('Inside function!');
};
calc();


// asign a variable to a function
var calc = function (number1, number2) {
	return number1 + number2;
};
calc(4, 5, 7); // return 9, ignore "7"



closures:

function generator(input) {
	var number = input;
	return function () {
		return number * 2;
	};
}

immediately invoked function:

(function calc(input) {
	var number = input;
	return number * 2;
})(5);


built-in Methods:

function message(message, number) {
	console.log(message);
	console.log(arguments); // show all the argument object
}

console.log(message.name); // "message" : name of the function
console.log(message.length); // 2 : number of arguments









BUILT-IN OBJECT FUNCTIONS:


Timers Intervals:

// Wait 2000s then execuate the function
setTimeout(function() {
	console.log('Finished!');
}, 2000);

// Run the function every 500s
setInterval(function() {
	console.log('Ping!');
}, 500);



// Run and clear the interval
var interval = setInterval(function() {
	console.log('Ping!');
}, 500);

setTimeout(function() {
	clearInterval(interval);
}, 2500);



Transforming Formats:

var a = '5';
parseInt(a) // 5

var b = 'FBB123';
parseInt(b, 16) // Hex: 1649883

var c = 10
a.toString(); // '10'

var d = 10.3;
a.toFixed(); // 10



"String Function"

var string = 'Any text';
string[2] // 'y'
string.charAt(2) // 'y'
string.concat(" add a new string") // "Any text add a new string"
string.toUpperCase() // ANY TEXT
string.split(" ") // ["Any", "text"]
var string = "  Any text   ";
string.trim() // 'Any text'


"Math Object"

Math.PI;
Math.abs(-3)
Math.round(1.27)
Math.ceil(1.27)
Math.floor(1.99)
Math.E
Math.log(Math.E)
Math.max(1, 200, 1000)
Math.min(1, 2, 100)
Math.random() // 0-1
Math.floor(Math.random() * 100) + 1 // 1-100



"Date Object" // JS Date

var today = new Date(); // Object
today.toString() // Tue Jun 07 2016 10:40:46 GMT+0200
var today = new Date(2016, 5, 26);
var today = new Date('2016/05/20');
Date.parse('2016/05/20')
today.getDate() // date of the month
today.getDay() // date of the week










DOM

Window Object:

// the window is the global object
window.innerWidth // the width of the window
window.outerWidth
innerHeight
outerHeight
window // showing the whole property of the window
localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1')); // "1000"
sessionStorage.setItem('key1', 1000);
console.log(sessionStorage.getItem('key1')); // "1000", will be delete after
window.location
window.open('http://www.google.com');



Location Object:

location.host 
location.pathname
location.reload()
location.replace('http://www.google.com')




Document Object:

console.log(document); // showing all the properties
document.URL
document.title
document.body
document.body.children
document.body.children[0].textContent = 'something else';
document.body.children[0].style.backgroundColor = 'red';
document.body.firstChild // will get the white space
document.body.firstElementChild
document.body.firstElementChild.firstElementChild
document.body.firstElementChild.nextElementSiling
document.body.lastElementChild
document.body.firstElementChild.firstElementChild.parentElement

document.getElementByTagName('li')
document.getElementByClassName('simple')
document.getElementById('simple')

document.querySelector('h1')
document.querySelectorAll('.simple') // (.) is for class
document.querySelectorAll('#easy').style.backgroundColor = 'red' // (#) is for id
document.querySelector('.simple').firstChild.textContent = 'hello'

















































































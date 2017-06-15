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

OBJECT:

var var9 = {
	name: "Lance",
	age: "28"
};
console.log(var9);
console.log(var9.name);



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











































































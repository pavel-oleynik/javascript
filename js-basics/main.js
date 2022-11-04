// Numbers
var number1 = 10;
var number2 = 3;

console.log( number1 + number2 );
console.log( number1 / number2);
console.log( number1 % number2); // остаток от деления
console.log( number1 - number2);
console.log( number1 * number2);
number1++;
console.log( number1 );
number2--;
console.log( number2 );
console.log( 2 ** 4 );


var number3 = 12.435;
console.log(Math.round(number3));
console.log(Math.ceil(number3)); //округление в большую сторону
console.log(Math.floor(number3));//округление в меньшую сторону
console.log(Math.trunc(number3));
console.log(Math.fround(number3));
let infinity = 1 / 0;
console.log( infinity );
let negInfinity = -1 / 0;
console.log( negInfinity );
let notANumber = infinity + negInfinity;
console.log (notANumber);
let nan = 2 * "a";
console.log( nan);

let n1 = NaN;
let n2 = infinity;

// сравнение
console.log( 2 <= 4);// сравнение выдает Boolean (false end true);
console.log(2 > 4);
console.log(2 === '2');
console.log(2 == '2');
console.log(2 == 2.0);
console.log(2 === 2.0);
console.log(-0 == 0);

console.log(-1 * 0);

console.log(1 >> 1); //побитовые сдвиги было 0001  стало 0000
console.log(1 << 1);
console.log(3 >> 1);
console.log(3 << 1);


// boolean
let bool1 = true;
let bool2 = false;
console.log(bool1 & bool2);
console.log(bool1 && bool2);

console.log(bool1 | bool2);
console.log(bool1 || bool2);

console.log(!bool1);
console.log(!bool2);
console.log(!!0);
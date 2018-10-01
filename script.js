// variables 03:27
var myName = "Khalifa";
var myAge = 40;

myName = 100;

// math 04:27
document.write("5 + 4 =", 5 + 4, "<br />");
document.write("5 - 4 =", 5 - 4, "<br />");
document.write("5 * 4 =", 5 * 4, "<br />");
document.write("5 / 4 =", 5 / 4, "<br />");
document.write("5 % 4 =", 5 % 4, "<br />");
// below combine as strings 
// document.write("5 + 4 ="+ 5 + 4, "<br />");

document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");

// over 16 decimal values things get messed up
precisionTest = 0.10000000000000001;
document.write(precisionTest + 0.100000000000000001, "<br/>");

// rounding off to two decimal places
var balance = 1563.87;
document.write("Monthly Payment : ", ( balance / 12). toFixed(2)," <br />");

// increment by one
var randNum = 5;

// document.write("randNum-- =", randNum-- , "<br />");
// document.write("--randNum =", --randNum , "<br />");


//  add one to a value and store it inside itself

//  document.write("randNum += 5 =", randNum += 5, "<br />");
//  document.write("randNum -= 5 =", randNum -= 5, "<br />");
//  document.write("randNum *= 5 =", randNum *= 5, "<br />");
//  document.write("randNum /= 5 =", randNum /= 5, "<br />");

// order of operations
document.write("3 + 2 * 5 =", 3 + 2 * 5, "<br />");
document.write("( 3 + 2) * 5 =", ( 3 + 2) * 5, "<br />");
 
// inbuilt js methods and properties built in js maths libraries
 document.write("Math.E = ", Math.E, "<br />");
 document.write("Math.PI = ", Math.PI, "<br />");
 document.write("Math.log(10) = ", Math.log(10), "<br />");
 document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br />");

//  random values 12:00
document.write("Random # (1-10) =", Math.floor((Math.random() * 10) + 1),"<br />");

// convert strings into numbers
document.write("Converted String : ", Number("3.14"), "<br />");
document.write("Converted Int : ", parseInt("3.14"), "<br />");
document.write("Converted Float : ", parseFloat("3.14"), "<br />");
 
// strings 13:21 
var randStr = "A long " + "string that " + "goes on and on" ;

document.write("String Length ", randStr.length + "<br />");
document.write("Index for \"goes\" : ", randStr.indexOf("goes"), "<br />");

document.write(randStr.slice(19, 23) + "<br />");
document.write(randStr.slice(19) + "<br />");
document.write(randStr.substr(19, 4) + "<br />");

// replace part of the string
document.write(randStr.replace("and on", "forever") + "<br />");
document.write("At Index 2 : ", randStr.charAt(2) + "<br />");

// split an string into an array 
var randStrArray = randStr.split(" ");

document.write(randStrArray +"<br />");

randStr = randStr.trim();

document.write(randStr = randStr.trim(), "<br />");

document.write(randStr.toUpperCase() + "<br />");
document.write(randStr.toLowerCase() + "<br />");
 
// styling strings 17:24
var strToStyle = "Random String" ;

document.write("Big : ", strToStyle.big(), "<br />");
document.write("Bold : ", strToStyle.bold(), "<br />");
document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
document.write("Italics : ", strToStyle.italics(), "<br />");
document.write("Google : ", strToStyle.link("https://google.com"), "<br />");
document.write("Small : ", strToStyle.small(), "<br />");
// document.write("Strike : ", strToStyle.stike(), "<br />"); not supported in html5
document.write("Sub : ", strToStyle.sub(), "<br />");
document.write("Sup : ", strToStyle.sup(), "<br />");

//  if statement 18:14
// Relational Operators : === != > < >= <=
// Logical Operators : && || !
var age = 6;

if ((age >= 5) && (age <= 6)){
    document.write("Go to Kindergarden" +"<br />");
} else if (age > 18) {
    document.write("Go to College" + "<br />");
} else {
    document.write("Go to Grade", age - 5, "<br />");
}
    document.write("true || false", true || false, "<br />");

    document.write("!true ", !true, "<br />");

    document.write("\"5\" == 5 = ", ("5" == 5), "<br />");

    document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
// a string and a number false as the values and types are not equal

// switch 21:44
switch(age) {
    case 5 :
    case 6 : 
    document.write("Go to Kindergarten" + "<br />");
    break;

    case 7 :
    document.write("Go to 1st grade" + "<br />");
    break;
    default : 
    document.write("Subtract 5 from your age" + "<br />");
}


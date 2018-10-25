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
var age = 25;

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
//  ternary operator 23:04
// (condition) ? ifTrue : ifFalse
 var canIVote = (age >= 18) ? true : false;

 document.write("canIVote : " , canIVote, "<br />" );

//  looping : while loop 23:55 
var i = 1;

while( i <= 10){
    document.write(i + "<br />");
    i++;
}
// do while 24:51

// do {
//     var guess = prompt("Guess a number between 1 and 20");
//     }while(guess != 15)

//     alert("You guessed 15!");

// for 25:51
for (j = 0; j <= 20; j++){

    if((j % 2) === 0){
        continue;
    }
    if( j === 15){
       break; 
    }
    document.write(j +"<br />");
}
// for in 27:37
 var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};

 for (k in customer){
     document.write(customer [k] +"<br />");
 }
//  Arrays 28:39
var tomSmith = ["Tom Smith", "123 Main", 120.50];
document.write("1st Index ",  tomSmith[2], "<br />");

tomSmith[3] = "tSmith@aol.com";

tomSmith.splice(2, 1, "Pittsburgh", "PA");

tomSmith.splice(4, 1);
// convert an array into a string

document.write("Array : ", tomSmith.valueOf() , "<br />");

document.write("Array : ", tomSmith.join(",") , "<br />");

delete tomSmith[3];

tomSmith.sort();

var numbers = [4, 3, 9, 1, 20, 43];

numbers.sort(function(x,y){ return y - x});

document.write("Num Array : ", numbers.toString(), "<br />");
// combine arrays
var combinedArray = numbers.concat(tomSmith);
// remove last item on tomSmith array
tomSmith.pop();
// add items to the end of tomSmith array
tomSmith.push("555-1212", "US");
// to delete only the first item
tomSmith.shift();
// add items to the very first index
tomSmith.unshift("Tom Wakawei Smith");
// cycle through all the items in the array
for( i = 0; i < tomSmith.length; i++){
    document.write(tomSmith[i], "<br />");
}
// functions 34:42
function inArray(arrayToCheck, value){
    for(i = 0; i < arrayToCheck.length; i++){
        if(arrayToCheck[i] === value){
            return true;
        }
    }
    return false;
}

var randArray = [1,2,3,4,5];

document.write("In Array : ", inArray(randArray, 4),"<br />");
// pass function as parameter 36:41
// var2 is a local variable - it lives inside the function doesn't exit outside
function times2(num){
    var var2 = 2;
    return num * var2;
}
// document.write("var2" , var2, "<br />");

function times3(num){
    return num * 3;
}
function multiply(fsociety, num){
    return fsociety(num);
}
document.write("2 * 15 = ", multiply(times2, 15), "<br />");

document.write("3 * 15 = ", multiply(times3, 15), "<br />");

// assigning a function to a variable
var triple = function(num){
    return num * 3;
}
document.write("3 * 45 = ", multiply(triple, 45), "<br />");
// receive variable Number of Arguments 39:42
// variable No. of arguments into a function
function getSum(){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
document.write("Sum = ", getSum(1,2,3,4,5,6,), "<br />");
// Return Variable Number of Arguments 40:55
// return a variable No. of arguments by using an array 
function times2(theArray){
    // new empty array
    var newArray = [];
    for(i = 0; i < theArray.length; i++){
        newArray.push(theArray[i] * 2);
    }
    return newArray;
}
document.write("Array Double = ", times2([1,2,3,4,5]).toString(), "<br />");
// Recursive Functions 42:02
// recursive function- a function that calls itself
function factorial(num){
    if(num <= 1){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
// 1st: num = 4 * factorial(3) = 4 * 6 = 24
// 2nd: num = 3 * factorial(2) = 3 * 2 = 24
// 3rd: num = 2 * factorial(1) = 2 * 1 = 2
document.write("Factorial of 4 =", factorial(4), "<br />");
// Event handling 43:54
 function openAlert(mess){
     alert(mess);
 }
//  51:30 key events
function getChar(event){
    if(event.which == null){
        return String.fromCharCode(event.keyCode);
    }else if (event.which != 0 && event.charCode != 0){
        return String.fromCharCode(event.which);
    }else {
        return null;
    }
}

document.getElementById('charInput').onkeypress = function(event){
    var char = getChar(event || window.event)
    if(!char) return false;

    document.getElementById('keyData').innerHTML = char + " was clicked";
    return true;
}
// change tag value 55:05
 document.getElementById('charInput').onfocus = function(event){
     document.getElementById('keyData').innerHTML = "Input Gained Focus";
 }
//  if the user selected any text
document.getElementById('charInput').onselect = function(event){
    document.getElementById('keyData').innerHTML = "Text Selected";
}
// change class 56:41
document.getElementById('logoButton').onclick = function(event){
    document.getElementById('logo').className = "show";
}
// change Input Element 57:43
document.getElementById('logo').onmouseover = function(event){
    document.getElementById('logo').src="/assets/5txax3.jpg";
    document.getElementById('mouseInput').value = "Mouse Over Image";
} 
document.getElementById('logo').onmouseout = function(event){
    document.getElementById('logo').src="/assets/Cartoon-Sunset-Painting.jpg";
    document.getElementById('mouseInput').value = "Mouse Left Image";
} 
// make logo disappear when the image is clicked on
document.getElementById('logo').onclick = function(event){
    document.getElementById('logo').className = "hidden";
}
// Mouse X / Y coordinates 59:20
document.body.onmousemove = function(e){
    e = e || window.event;
    var pageX = e.pageX;
    var pageY = e.pageY;

    if(pageX === undefined){
        pageX = e.clientX + document.body.scrollLeft + documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + documentElement.scrollTop;
    }
    document.getElementById('mouseX').value = pageX;
    document.getElementById('mouseY').value = pageY;
};
// Get Elements By Tag Names 1:01:28
// clear all our inputs *not working
document.getElementById('clearInputs').onClick = function(event){
    var inputElements = document.getElementsByTagName('input')
    
  for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].type == "text") {
        inputElements[i].value = "";
      }
  }  
} 
// Element styling 1:03:00
http://www.w3schools.com/jsref/dom_obj_style.asp

document.getElementById('chgBkColor').onclick = function(event){
document.getElementById('sampDiv').style.backgroundColor = "#EFDECD";
}
document.getElementById('chgBkImg').onclick = function(event){
    document.getElementById('sampDiv').style.backgroundImage = "url(/assets/2320257.jpg)";
    }
document.getElementById('chgBorderStyle').onclick = function(event){
        document.getElementById('sampDiv').style.borderStyle = "solid";
        }   
document.getElementById('chgBorderWidth').onclick = function(event){
            document.getElementById('sampDiv').style.borderWidth = "thick";
            }   
document.getElementById('chgBorderColor').onclick = function(event){
    document.getElementById('sampDiv').style.borderColor = "blue";
                }
// Manipulating URLs 1:05:48
document.write("Current URL : ", window.location.href, "<br />");
document.write("Current HOST : ", window.location.hostname, "<br />");
document.write("Current Path : ", window.location.pathname, "<br />");

document.getElementById('goToGoogle').onclick = function(event){window.location.href = "http://google.com"}

document.getElementById('forwardPage').onclick = function(event){
    history.forward();
}
document.getElementById('backPage').onclick = function(event){
    history.back();
}
document.getElementById('reload').onclick = function(event){
    window.location.reload(true);
}
// jump to browser's history where user been -2 to go back in history two places and forward is +

// history.go(-2)
// Editing Child Nodes 1:09:37  
var pElements = document.getElementsByTagName('p');
// pElements[3].style.backgroundColor = "#EFDECD" ;

// document.childNodes[1].style.backgroundColor = "#FAEBD7";

var sampDiv2 = document.getElementById('sampDiv2');
sampDiv2.childNodes[0].style.backgroundColor = "blue";
sampDiv2.childNodes[0].childNodes[1].style.backgroundColor = "green";
document.write("Node Type : ", sampDiv2.childNodes[0].childNodes[0].nodeType, "<br />");
document.write("Node Name : ", sampDiv2.childNodes[0].childNodes[0].nodeName, "<br />");
document.write("Node Name : ", sampDiv2.childNodes[0].childNodes[1].nodeName, "<br />");
// Setting Attributes 1:15:08
var nttLogo2 = document.getElementById('logo2');
document.write("Logo has alt : ", nttLogo2.hasAttribute("alt"), "<br />");
 nttLogo2.setAttribute("alt", "NTT Logo2");
 document.write("Logo alt value : ", nttLogo2.getAttribute("alt"), "<br />");
 var attribList = document.getElementById('logo2').attributes;
 for(i = 0; i < attribList.length; i++){
     document.write("Attribute ", i, " : ", attribList[i].nodeName , " : ", attribList[i].nodeValue, "<br />");
 }
//  Adding Elements 1:18:11
var paragraph3 = document.createElement("p");
paragraph3.setAttribute("id", "paragraph3");
paragraph3.innerHTML = "Proin iis nulla maxime natus praesentium velit obcaecati.";
sampDiv2.appendChild(paragraph3);
sampDiv2.insertBefore(paragraph3, sampDiv2.childNodes[0]);
// OO JavaScript 1:19:50
var cust1 = {
    name: "Njathaini Kamau",
    street: "123 Main",
    city: "Pittsburgh",
    state: "PA",
    email: "knjatha@aol.com",
    balance: 120.50,
    payDownBal: function(amtPaid){
        this.balance -= amtPaid;
    },
    addToBal: function(amtCharged){
        this.balance += amtCharged;
    }
};
document.write("Customer Name : ", cust1.name, "<br />");
cust1.street = "215 Main";
document.write("Customer Street : ", cust1.street, "<br />");
cust1.country = "US";
document.write("Customer Country : ", cust1.country, "<br />");
delete cust1.country;
for (var prop in cust1){
    if(cust1.hasOwnProperty(prop)){
    document.write(prop, "<br />");    
    }
}
document.write("name in cust1 : ", "name" in cust1, "<br />");
function getInfo(cust){
    return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
}
document.write(getInfo(cust1), "<br />");
cust1.payDownBal(20.50);
cust1.addToBal(10.00);
document.write(getInfo(cust1), "<br />");
// How to create generic objects so as to deal with many objects. you do so by an object constructor
// creating an object constructor1:25:00
function Customer(name, street, city, state, email, balance){
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.email = email;
    this.balance = balance;
    this.payDownBal = function(amtPaid){
        this.balance -= amtPaid;
    };
    this.addToBal = function(amtCharged){
        this.balance -= amtCharged;
    };
}
var cust2 = new Customer("Sally Smith", "254 Main", "Pittsburgh", "PA", "kababa@aol.com", 0.00);
cust2.addToBal(15.50);
Customer.prototype.isCreditAvail = true;

Customer.prototype.toString = function(){
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " CreditWorthy : " + this.isCreditAvail;
};

document.write(cust2.toString());


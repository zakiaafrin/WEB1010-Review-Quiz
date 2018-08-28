// Create a variable and set its value to the answer of a math equation. It should be a number Value
var a = 7 * 8;
// Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.
var b = "This is the first string." + "This is the second string." + "This is the third string." + "This is the fourth string." + "This is the fifth string.";
// Create a variable and use the ES6 string interpolation (back ticks) to set the value of a variable to a string that includes 5 variables whose values are numbers. Use ${} to use these number variables in the string variable.
var c1 = 1;
var c2 = 99;
var c3 = 2;
var c4 = 3;
var c5 = 4;
var c = `The result: ${c1},  ${c2},  ${c3},  ${c4},  ${c5}`;

// Create an array that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.
var d = [4,1,2,3,"one","two",8>3,2==2,1>4,[8,"eight",9]];
// Create an object that has 4 properties: A number, a string, an array, and an object
var obj = {
        num: 1,
        str: "Ok",
        array: [8, 4, 8],
        obj1: {}
        };

//console.log(d)

// Create 5 variables in a js file that is linked to your html file 

var h2 = document.querySelector("h2");
var p = document.querySelector(".para");
var d = document.querySelector("#d");
var inp = document.querySelector("input[type]");
var button = document.querySelector("button");
var src = document.querySelector("#src");

//doStuff(input,src);
function doStuff(input,src){
        d.innerHTML += `<img src="${src}" alt = "Flower"/>`;
        p.textContent += input;   
}

function loopIt(num){
        for(var i=1;i<=num;i++){
                doStuff(inp.value, "https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg");  
        }
}

button.addEventListener("click", function(){  
        loopIt(3);
})
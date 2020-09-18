// -----------------Variable declaration.-------------------
// the variable has no value after declaration
let carName;
// ------------------Assigning a variable---------------------
// here, we assign a value (Benz) to the declared variable (carName).
carName = "Benz";
// --------------------------------------------------------------------------
// A variable can be defined and assigned at the same time. Example;
let carName1 = "Volvo";
// document.getElementById("car").innerHTML= carName;
let x;
x = 2;
x = 5;
x ="food";
let y = 349e7;
console.log(y);
console.log(x);
console.log(carName)
let t = (x==y);
console.log(t);
let z = ["err" , "er" , "r"];
console.log(z);
let man = {
    name: "Cee",
    surname: "tee",
    age: 24,
    country: 'Nigeria',
    surname: function(){
        return this.name + "" + this.surname;
    }
    // otherss: function(){
    //     return this.age + ","+ this.country;
    // }
   
};


console.log(man);
man = undefined;
console.log(man);
man = null;
console.log(man);

// ----------------FUNCTIONS------------------
// A javascript function is a block of code designed to perform a particular task.
// A function is executed when you call it
// Its syntax is as follows;
let my = function myFunction( x, y){
    return x+y; //code to be executed.
}
console.log(my)
console.log(my(2,4));

let xx = my(6,2)
console.log(xx);


var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person);


//   ----------------Js string methods-----------------
//  to find the length of a string;
let word = "abcddefghijklmnopqrstuvwxy";
console.log(word);
console.log(word.length);
console.log(word.indexOf("h"));
console.log(word.indexOf("o"));
console.log(word.lastIndexOf("h"));
console.log(word.lastIndexOf("d"));
console.log(word.match("d"));
console.log(word.match("c"));
// -------- both indecOf and lastIndexOf return -1 if the text in question is not found in the string. Eg;
console.log(word.lastIndexOf("z"));
console.log(word.indexOf("z"));
console.log(word.search("o"));
console.log(word.charAt(8));
// slice, substring, substr methods are used in extracting strings. The difference between slice and substring is that 
// slice takes negative indexes while substring doesn't.
console.log(word.slice(2,9));
console.log(word.substring(2,9));
console.log(word.substr(2,9)); // Here, the output will be the third index and the next 9 letters.
let newWord = "this is actually a new word";
// console.log(newWord);
// console.log(newWord.length);
// console.log(newWord.indexOf("s"));
// console.log(newWord.lastIndexOf("s"));
// console.log(newWord.indexOf("actually"));
// console.log(newWord.indexOf("this"));
// console.log(newWord.indexOf("is"));
// console.log(newWord.indexOf("a"));
// console.log(newWord.indexOf("new"));
// console.log(newWord.indexOf("word"));
// console.log(newWord.search("this"));
// console.log(newWord.search("a"));
// console.log(newWord.search("t"));
console.log(newWord.replace( "word", "sentence"));
// NOTE: replace IS CASE SENSITIVE. ie If we use WORD instead of word, the code will not work. In order to address this, we use the INSENSITIVE/IGNORE REGULAR EXPRESSION /i.
// THE REGULAR EXPRESSION GLOBAL /g means that the code is applicable to all cases.
// example;
console.log(newWord.replace("WORD" , "line"));
console.log(newWord.replace(/WORD/i , "insensitive/ignore regex"));
console.log(newWord.replace(/word/g , "global regex"));
console.log(newWord.toUpperCase()) //The opposite of this method is the toLowerCase.
//------CONCAT is used to join items together. Eg; joinWords is the same as joinWords1------
let joinWords = "feel".concat( " " , "us");
let joinWords1 = "feel" +" "+ "the rhythm";
console.log(joinWords);
console.log(joinWords1);
console.log(word.charAt(4));
//CONVERTING A STRING TO AN ARRAY USING split(). example;
let text = "a,b,c,d,e";
let splitText = text.split(",");
let splitSpace = text.split(" ");
let splitPipe = text.split("|");
 
console.log(text);
console.log(splitText);
console.log(splitSpace);
console.log(splitPipe);

let msg = "Hello";
let splitMsg = msg.split(" ");
splitComma = msg.split(" , ");
console.log(msg);
console.log(splitMsg);
console.log(splitComma);
// we can also decide how many elements we want to split in a string; eg
console.log(msg.split("" , 3 ));
let a = 10;
let b = 20;
let c = a + b;
let d = + a + b;
let e = "the result is " + a + b;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// JAVASCRIPT ARRAYS.
let ar = [ "aba", "enugu", "owerri", "calabar" ];
let arrr = [1,2,3,4,5,6];
let arr = [23, "earth", {name: "archer", age: 24, sex: "male"}, function(a,b){
  return a-b ;
  
}];
console.log(arr);
console.log(arrr);
console.log(arrr);

console.log(arr[0]);//accessing an aarray.

//CHANGING AN ELEMENT IN AN ARRAY.
let changeArray = ar[0]= "abuja"; //changes the 0 index array (aba) to abuja;
console.log(changeArray);








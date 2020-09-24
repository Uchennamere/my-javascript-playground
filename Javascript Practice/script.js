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
let ar = [ "aba", "enugu", "owerri", "calabar", "Ibadan" ];
let arrr = [1,2,3,4,5,6];
let arr = [23, "earth", {name: "archer", age: 24, sex: "male"}, function(a,b){
  return a-b ;
  
}];
console.log(arr);
console.log(arrr);
console.log(arrr);

//accessing an aarray.
console.log(arr[0]);
console.log(arr[1]);

//length of an array.
console.log(ar.length);
console.log(arrr.length);
console.log(arr.length);

//adding to an array.
arrr[6] = 7; //add 7 to the array
arrr[8] = 10;
arrr[arrr.length] = "new array"; // adds "new array" to the end of the array.
console.log(arrr);
console.log(arrr.length);

// reducing the length of an array.
arrr.length = 4 ;
console.log(arrr);
ar.length = 3 ;
console.log(ar);



//CHANGING AN ELEMENT IN AN ARRAY.
let changeArray = ar[0]= "abuja"; //changes the 0 index array (aba) to abuja;
console.log(ar);

// ---------------- ARRAY METHODS.---------------
//1. SORT.
let fruits = [ 'banana', 'orange', 'pear', 'mango', 'apple'];
let numerals = [7,3,8,9,6,4,1,5,2];
// console.log(fruits.sort());
console.log(numerals.sort());

//2. ACCESSING THE FIRST ARRAY.
console.log(fruits[0]);
console.log(numerals[0]);

//3. ACCESSING THE LAST ARRAY.
console.log(fruits[fruits.length-1]);
console.log(numerals[numerals.length-1]);

//4. ADDING ELEMENTS TO AN ARRAY.
//--- This can be done using the LENGTH method.
fruits[fruits.length] = 'strawberry';

// or PUSH method--- Adds a new element to the end of the array.
fruits.push('lime');
console.log(fruits);

//or ARRAY INDEX method.
//fruits[9] = 'watermelon';
//console.log(fruits);

//5----Array.isArray() is used to know if a variable is an array.
console.log(Array.isArray(fruits));

//6----CONVERTING AN ARRAY TO STRINGS using toString method.
let arrayTostring = fruits.toString();
console.log(arrayTostring);

//7----JOIN METHOD: this is also used to convert arrays to string.
console.log(fruits.join());
// Using the JOIN method, you can secify the seperator. eg
console.log(fruits.join('--'));

//8---POP METHOD: this removes and returns the last element in an array.
console.log(fruits.pop()); //lime is "popped out".

// 9.--SHIFT METHOD: works like POP but the difference is that it works on the first element.
console.log(fruits.shift());

//10-- UNSHIFT -- same as ush. but it adds elements to the beginning.
fruits.unshift('udara');
console.log(fruits);

//11--DELETE-- USED TO DELETE ELEMENTS. eg
delete fruits[2];
console.log(fruits);

//12-- SPLICE METHOD.-- Adds new items to an array.
// SYNTAX: arr.splice( position of the new items to be added, how many items to be removed, ... the new items to be added ...)
fruits.splice(2, 0, 'paw-paw', 'pineapple');
console.log(fruits);
let snack = ['bread', 'buns', 'meatpie', 'pizza'];
snack.splice( 2, 0, 'egg','jam', 'ham', 'fish');
snack.splice(4,1,'onions');
snack.splice(0,1,'burger');
console.log(snack);

//SPLICE method can also be used to remove items from an array. Eg.
var fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitss);
fruitss.splice(1,1); // this code starts from the first position/index and removes one item(orange).
console.log(fruitss);

//13.----CONCAT method concatenates or merges existing arrays. Eg;
let males = ['Jude', 'Max', 'Daniel'];
let females = ['Sarah', 'Miya', 'Audrey'];
let myFriends = males.concat(females);
console.log(myFriends);

//---CONCAT method can also be used to join more than two arrays together. eg;
let englishCities = ['Birmingham', 'London', 'Manchester'];
let frenchCities = ['lyon', 'Toulon','Paris']
let spanishCities = ['Barcelona', 'Madrid'];
let nigerianCities = ['lagos', 'abuja', 'owerri', 'ibadan'];
let eurocities = englishCities.concat(frenchCities,spanishCities);
let allCities = nigerianCities.concat(frenchCities,englishCities,spanishCities);
console.log(eurocities);
console.log(allCities);

//CONCAT method also takes string values that is, it can merge an arrays and strings too.

//14----SLICE METHOD -- This method slices/cuts off a part of the array starting from the index position that is given to the end.
// the SLICE method does not remove a elements from the array. It rather CREATES a new array.
let building = ['bungalow','duplex','mud','skyscraper'];
console.log(building.slice(1));
console.log(building);

// THE SLICE method can also take two arguments (START AND END ARGUMENTS). It selects elements from the START argument and up to (but not including) the END argument. EG
console.log(building.slice(1,3)); // we have a new array here ie ['duplex' ,'mud'];

//15----toString method--- this converts arrays to strings. eg
console.log(building.toString());

//16---SORT 
console.log(snack);
console.log(snack.sort());

//---NUMERIC SORT: If we sort numbers using the sort method, it sees it as string and returns a differebt result from what we want. example
//-- To solve this problem, we introduce COMPARE FUNCTIONS as shown in lines 294 and 295. These COMPARE FUNCTIONS give us an alternative sort order.
let numbers = [1,3,5,8,2,9,10,30,28,20,21];
console.log(numbers.sort());
let sortedNumbers = numbers.sort(function(a,b){return a-b}); //ACCENDING ORDER.
let srtDecending = numbers.sort(function(a,b){return b-a}); //DECENDING ORDER.
console.log(sortedNumbers);
console.log(srtDecending);
console.log(Math.min(...numbers)); //the spread operator expands an array of numbers into a list of arguments to enable the min/max carry out the required operation.

//17--REVERSE.
console.log(snack.reverse());

//-----------------ARRAY LOOP METHODS ---------------------------
//18--- FOR EACH method -- used to iterate/loop through arrays and performs a particular operation once on each of all the values in the array. Here, we introduce a call back function and pass in 3 arguments; value(number),index (optianal) and array(optional)..VIA.
let n = numbers.forEach(function(numbers,index,array){
  console.log((numbers+4));
})
// console.log(n);

//19-- MAP METHOD-- creates a new array, performs the operation/instruction on each element in the array.eg
let m = numbers.map(function(numbers,index,array){
  return(numbers+4);
})
console.log(m);

//--20-- FILTER METHOD.--- Creates a new array with array elements that passes a test.eg
let filteredNumbers = numbers.filter(function(numbers){
  return numbers > 20;
})
console.log(filteredNumbers);

//--21--REDUCE--
let sum = numbers.reduce(function(total,amount){
  return total + amount;
})
console.log(sum);















































// fruits[fruits.length]= 'grape';
// fruits[fruits.length]= 'lemon';
// fruits.push('biscuits');
// fruits[3]= "butter";
// console.log(fruits);

// let emptyArray = [];
// emptyArray[0]= 'home';
// emptyArray.push("how are you");
// console.log(emptyArray);







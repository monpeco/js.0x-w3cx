#### Module 5: Working with forms   5.1 Introduction - Module 5   Module 5 outline

# Module 5 outline

### What you will learn in Module 5

* We continue the study of object-oriented JavaScript programming with "predefined classes": Object, Array, String, Date, Math
* We present a very useful API for building HTML5 tables dynamically.
* We'll also see how to use HTML5 forms from JavaScript: intercept their submission, retrieve input field values, and so on.
* We will study the JavaScript Object Notation (JSON) format, used extensively when manipulating data from remote servers (via REST WebServices) or for persistence (saving data client or server-side). We will see several examples that consume such data and display them in a dynamic HTML5 table.
* Finally, we will develop together a mini contact manager using ES6 classes, a dynamic table, a form and load/save its data using the JSON format. It will be your job to improve it by adding additional features.

This module ends with the final exam which regroups questions specific to the current module but also a potpourri of questions related to the 4 previous modules.

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   References and objects

# References and objects

### Live coding video: references and objects

>! Missing Video/Transcript

Source code shown in the video
https://codepen.io/w3devcampus/pen/KqmGgq?editors=0012

First of all, we have to define **reference**. Unlike a pointer variable, which contains the actual address of an object within the memory, a reference 
variable is an alias to a variable. This means that when you modify a reference variable, the original variable is modified too. This is because the two 
variables reference (i.e. point to) the same object.

When you define a variable (such as `var x = 10;` or `let name = "Michel";` or `let courseAuthor = {firstName:'Michel', lastName:'Buffa')`, this is 
what happens:

* If its value is a primitive value (`number`, `string`, or `boolean`), the variable contains this value directly.
* If its value is an `object`, the variable contains the memory address of the object. We say that this variable **points to** an object (or references this object). Accessing the variable will automatically resolve the reference, meaning that the value of the variable is the referenced object.

Examples:

```javascript
// Defining two variables
var x = 2; // the variable x contains the primitive datum 2
var y = { a: 2 } // The variable y references the object {a: 2}
// "Copying" two variables
var x2 = x;
var y2 = y;
var y3 = y;
// Modifying copied variables
x2 = 3;
y2 = { a: 3 };
// Check
x; // 2 <- x is not modified because it contains a primitive value
y; // { a: 2 } <- y is not modified because y2 does not point to same object
y3.a = 4;
y; // { a: 4 } <- The object referenced by "y" and "y3" is modified
```

Of course, these rules also apply to the properties of objects.

Example:

```javascript
var driver = {
    name: 'Jean'
};
var car = {
    color: 'red',
    driver: driver
};
driver.name = 'Albert';
car.driver.name; // 'Albert'
```

JavaScript is a **pass by value** language, unlike some other languages, which are **pass by reference** languages. This means that when you pass a 
variable to a function as argument, the value of the variable is copied into the argument.

Example:


```javascript
var x = 2;
function sum(a, b) {
    a = a + b;
    return a;
}
sum(x, 3); // returns 5
x; // 2 <- but x equals 2
```
When working with objects, the reference of the object is copied into the argument. That means you can modify the referenced object. But if you change 
the reference (for example by assigning a new object), the original variable (which now points to another object) will not be modified.

Example 1:

```javascript
var obj = { x: 2 }
function add(a, b) {
a.x += b;
}
add(obj, 3);
obj.x; // 5 <- The referenced object is modified
```


```javascript
var obj = { x: 2 };
function addAndSet(a, b) {
    var addition = a.x + b;
    a = { x: addition };
};
addAndSet(obj, 3);
obj.x; /* 2 <- The referenced object is not modified
because at the end of the function the variable "obj"
and the variable "a" are not referencing the same object.*/
```

Other examples:

```javascript
> var originalObject = {name:'Michel'};
undefined
 
> var copy = originalObject;
undefined
 
> copy.name;
"Michel"
 
> copy.name = 'Dark Vador';
"Dark Vador"
 
> originalObject.name
"Dark Vador"
 
// They are the same. originalObject and copy are two "references" of the same object in memory
// If we change the name, we change the value in memory, but copy and originalObject "point to" the
// same place, to the same object. They are just "pointers" or "reference" to the same object
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Comparing two objects

# Comparing two objects

Comparing two objects will only return true if they point to the same object (i.e., if they have the same reference).

Two objects of the same type, with the same property value, that look identical, will not be equal one to another if they don’t have the same reference (if they point to different places in memory).


```javascript
> var originalObject = {name:'Michel'};
undefined
 
> var copy = originalObject;
undefined
 
> copy === originalObject
true
 
> var anotherObject = {name:'Michel'};
undefined
 
> copy === anotherObject
false
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   The "global" window object

# The "global" window object

It is time to tell you the truth: the JavaScript code is executed by an “environment" (usually a Web browser, but there are some HTTP Web servers that use JavaScript for coding the server side of Web sites of applications, such as the NodeJS HTTP server). 

This environment defines a **global object**.

> When this environment is a Web server  (and this is the case for all
> examples we have seen in this course), this global object is named
> window.
> 
> The “global variables” defined with the keyword var are properties of
> this window object,  and we can say the same of predefined functions
> like prompt, alert, etc.
> 
> However, at the top level of programs and functions,  `let`, unlike `var`,
> does not create a property on the global window object.
> 
> TIP: if you have global variables/objects declared with let, just
> declare them with var instead, and you will be able to inspect them 
> easily from the devtool console.  You can switch back to using let,
> later.

Let's see some examples:


```javascript
> var a = 1;
undefined
 
> a;
1
 
> window.a;
1
 
> window['a'];
1
> let z = 1; // LET DOES NOT DEFINE properties of the window object
undefined
> window.z
undefined
```
`a` and `window.a` are the same variable.
`navigator` and `window.navigator` are the same, `document` and `window.document` are the same thing.

```javascript
> document === window.document
true
 
> navigator === window.navigator
true
```
Predefined functions are methods from the global object window:

```javascript
> parseInt('10 little children');
10
 
> window.parseInt('10 little children');
10
 
> alert === window.alert
true
 
> prompt === window.prompt
true
 
> window.addEventListeners === addEventListeners
true
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JS class: Object

# Built-in JS class: Object

### Live coding video: predefined class - Object

>! Missing Video/transcrip

Source code shown in the above video
https://codepen.io/w3devcampus/pen/EXmONY?editors=0012

### Built-in JavaScript classes: Object

The father of all objects: Object

All objects will inherit the properties and methods from the special class named Object.

These two lines are equivalent:

```javascript
> var o = {}; // creation of an empty object
undefined
 
> var o = new Object(); // same thing as in line 1
undefined
```

#### The toString method inherited from Object by all objects

```javascript
> o.toString();
"[object Object]"
 
> o.name = 'Michel';
"Michel"
 
> o.toString();
"[object Object]"
 
> var t = [1, 2, 3];
undefined
 
> t.toString();
"1,2,3"
```

`toString()` in JavaScript is rather similar to the `Object.toString()` method we find in the Java programming language: when we try to "display" an object, it is transformed into a string by calling `toString()` implicitly.

```javascript
> alert(t);
 
> alert(t.toString()); // same as previous line of code
 
> "An object into a string : " + t // same as t.toString()
"The object as a String : 1, 2, 3"
```
* Line 5: using the `+` operator with a string as the left argument will force the other arguments to convert to string by implicitly calling their toString() method.

The valueOf method inherited from Object by all objects

The ValueOf method returns the value of an object:

```javascript
> var t = [1, 2, 3];
undefined
 
> t.valueOf()
[1, 2, 3]
 
> t.toString();
"1,2,3"
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JS class: Array

# Built-in JS class: Array

>! Missing Video/Transcript

Source code from the above video
https://codepen.io/w3devcampus/pen/XgRyar?editors=0012

### Built-in JavaScript objects: Array

The `Array` class can be used for creating arrays (however, we recommend that you use the other methods presented instead):


```javascript
> var a = new Array(); // same as a = []; use this instead!
undefined
 
> var b = new Array(1, 2, 3);
undefined
 
> b;
[1, 2, 3]
```

Attention: if only one element, this corresponds to the initial size of the array.

```javascript
> var myArray = new Array(3);
undefined
 
> myArray;
[undefined × 3]
```
#### Arrays are objects, but they are “special” objects

* Their property names are numerical indexes that start from 0
* They have a special length property that represents their length/number of elements
* They have other built-in properties in addition to the ones inherited from Object (toString, valueOf)

```javascript
> var a = [], o = {};
undefined
 
> a.length; // a is an array
0
 
> o.length; // o is a simple literal object
undefined
```
Some horrible things we can do with arrays (**TO AVOID!**):
```javascript
> var a = [1, 2];
undefined
 
> typeof a
"object"
 
> a.push(3);
3
 
> a
[1, 2, 3]
 
> a.length
3
 
// Now let’s add a name property to the array. Yes, we can do that!
 
> a.name = "I'm an array named a!";
"I'm an array named a!"
 
> a.length;
3
 
> a;
[1, 2, 3, name: "I'm an array named a!"]
```

> With arrays, only properties with a numerical index are taken into account by the length property!

#### The length property can be modified: reducing or increasing the size of an array

If you give to the length property a value bigger than the number of elements in an array, it adds undefined elements to it:

```javascript
> var a = [1, 2];
undefined
 
> a.length = 5;
5
 
> a;
[1, 2, undefined × 3]
```

If you give to the length property a value less than the array’s number of elements, it reduces the size of the array:

```javascript
> var a = [1, 2, 3];
undefined
 
> a.length = 2;
2
 
> a;
[1, 2]
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   The most useful methods of the class Array

# The most useful methods of the class Array

Most useful methods you can use on arrays: sort(), join(), slice(), splice(), push()and pop()

* `sort`: sort the elements in the array. Either alphabetically if they are strings, or in ascending order if they are numbers. There is also a way to sort the elements using other criteria, which is explained a bit further on in the course. With a call to `var b = a.sort()`, `a` is also sorted. The `sort` method sorts the array + returns it.
* `join`: adds a string between each element and returns the result as a string
* `slice`: returns a sub-array without modifying the original array
* `splice`: modifies the array, it removes **“a slice”** and it also adds new elements
* `push`: appends an element at the end of the array and returns the new length
* `pop`: removes the last element and returns it

#### Typical uses of  push, pop, sort, join:


```javascript
> var a = [3, 5, 1, 7, 'test'];
undefined
 
> a.push('new') // appends at the end and returns the new length
6
 
> a;
[3, 5, 1, 7, "test", "new"]
 
> a.pop(); // removes the last element and returns it
"new"
 
> a;
[3, 5, 1, 7, "test"]
 
> var b = a.sort();
undefined
 
> b;
[1, 3, 5, 7, "test"]
 
> a;
[1, 3, 5, 7, "test"]
 
// a is also sorted. The sort method sorts the array + returns it
undefined
 
> a.join(' and ');
"1 and 3 and 5 and 7 and test"
```
#### The slice() method returns a sub-array without modifying the original array:

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will 
not be modified.

#### Possible syntaxes:

* `arr.slice()`
* `arr.slice(begin)`
* `arr.slice(begin, end) // ELEMENT AT INDEX=end will not be included in the slice!`


```javascript
> a;
[1, 3, 5, 7, "test"]
 
> b = a.slice(1, 3); // elements of indexes = 1 and 2
[3, 5]
 
> b = a.slice(0, 1); // element of index = 0
[1]
 
> b = a.slice(0, 2); // elements o indexes = 0 and 1
[1, 3]
 
> a;
[1, 3, 5, 7, "test"]
 
// a is unchanged by calls to a.slice(...)
```
#### The splice() method modifies the array: it removes “a slice” and also adds new elements

The first two parameters are start and end indexes, the other parameters are the elements to add to the array to replace the slice that will be removed.

#### Possible syntaxes:

* `array.splice(start)`
* `array.splice(start, deleteCount)`
* `array.splice(start, deleteCount, item1, item2, ...)`

`start`: index at which to start changing the array (with origin 0)

`deleteCount`: An integer indicating the number of old array elements to remove.

`item1`, `item2`, ...: these are optional. They are the elements to add to the array, beginning at the `start` index. If you don't specify any elements, `splice()`
will only remove elements from the array.

Examples:


```javascript
> a;
[1, 3, 5, 7, "test"]
 
> b = a.splice(1, 2, 100, 101, 102);
[3, 5]
 
> a;
[1, 100, 101, 102, 7, "test"]
 
> a.splice(1, 3);
[100, 101, 102]
 
> a;
[1, 7, "test"]
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JS class: Number

# Built-in JS class: Number

The Number class can be used to transform strings into numbers, but it is recommended that you use parseInt or parseFloat instead.


```javascript
> var n = Number('3.1416');
undefined
 
> n;
3.1416
 
> typeof n;
"number"
 
> var n = parseInt('3.1416'); // convert a string to an integer number
undefined
 
> n;
3
 
> var n = parseFloat('3.1416'); // convert a string to a float number
undefined
 
> n;
3.1416
```
Number has useful non-modifiable properties (constants): `MAX_VALUE` and `MIN_VALUE`

```javascript
> Number.MAX_VALUE;
1.7976931348623157e+308
 
> Number.MIN_VALUE;
5e-324
```

#### Methods useful for converting numbers: toFixed(), toExponential(), toString()

* `toFixed`: sets the number of digits for the decimal part of a number. 
There is also another method, named [`toPrecision`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision), that has a very close behavior, and can also return numbers in scientific notation. 
* `toExponential`: force a number to use a scientific notation. For example `var a=1000;` `a.toExponential();` `console.log(a);` will give `1e+3`


```javascript
> var n = 123.456;
123.456
 
> n.toFixed(1); // sets the number of digits for the decimal part of the number
"123.5"
 
> n = new Number(123.456); // same as n = 123.456
Number {[[PrimitiveValue]]: 123.456} // well, not exactly, but when you use n, it is equivalent
 
> n.toFixed(1);
"123.5"
 
> n.toExponential();
"1.23456e+2"
 
 
> var n = 255;
undefined
 
> n.toString();
"255"
 
> n.toString(10);
"255"
 
> n.toString(16);
"ff"
 
> (3).toString(2);
"11"
 
> (3).toString(10);
"3"
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JS class: String

# Built-in JS class: String

>! Missing Video/Transcript

Source code from the video example
https://codepen.io/w3devcampus/pen/pwPGve?editors=0012

#### Built-in JavaScript class: String

The String class can be used to build new strings, but it’s preferable to use the standard syntax

```javascript
> var name = 'Michel'; // use this rather than using new String(...)
undefined
 
> typeof name;
"string"
 
> var name = new String('Michel');
undefined
 
> typeof name;
"string"
```
Some reminders about strings:

```javascript
> var name = 'Michel';
undefined
 
> name.length;
6
 
> name[0];
"M"
 
> name[0] = 'Z';
"Z"
 
> name; // we cannot modify a string using s[index] = value;
"Michel"
 
> 'Michel'.length;
6
 
> 'Michel'[0];
"M"
```
Explanations: 

* Line 10: in JavaScript, and in many other programming languages, a string is not modifiable at all. 
When we do `var s = s + "hello"`, in fact, we are building a new string somewhere in memory, and we assign this new value to the variable `s`. 
We never "modify" the characters of the string s, we just give to s another address in memory to point to. 

#### Useful methods: toUpperCase, toLowerCase, indexOf, charAt

These methods are all inherited from the String class:

* `toUpperCase`: returns the string in upper case. Do not change the original string.
* `toLowerCase`: returns the string in lower case. Do not change the original string.
* `indexOf`: returns the index of the string value passed as parameter, -1 if the string value is not found in the original string.
* `charAt`: returns the char at the index passed as parameter. Returns an empty string if the index is out of bounds (less than 0 or greater than the length of the string).

```javascript
> var s = "I'm the Walrus";
undefined
 
> var s1 = s.toUpperCase();
undefined
 
> s1;
"I'M THE WALRUS"
> var s2 = s1.toLowerCase();
undefined
 
> s2;
"i'm the walrus"
 
> s; // s is unchanged
"I'm the Walrus"
 
> s.indexOf('w'); // no ‘w’ in s
-1
 
> s2.indexOf('w');
8
 
> s2[8]; // char at index 8
"w"
 
s2.charAt(8); // same as s2[8]
"w"
```
#### Other useful methods: lastIndexOf, chaining methods

lastIndexOf: returns the last index of the string value passed as parameter
indexOf can also be used with two parameters, the second one being the starting index when looking for the string value passed as parameter

```javascript
> s = 'wow wow wow!';
"wow wow wow!"
 
> s.lastIndexOf('w');
10
 
> s.indexOf('w', 1); // start looking at s at index=1, s[0] is ignored
2
 
> var s1 = s.toUpperCase();
undefined
 
> s1;
"WOW WOW WOW!"
 
> s1.toLowerCase().lastIndexOf('w'); // we can chain method calls using ‘.’
10
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   The most useful methods of the class String

# The most useful methods of the class String

### The most useful methods of the String class: slice, substring, split, join

### The slice and substring methods

Both these methods can be used to extract a substring from a string.

They take two parameters: the start and end index of the slice (**element at end index will NOT be included in the slice**): "please cut from this index, to this one, not included!"". 

These two methods are very similar. 

Examples:

```javascript
> var s = "My name is Bond! James Bond!";
undefined
 
> s;
"My name is Bond! James Bond!"
 
> s.slice(11, 16);
"Bond!"
 
> s; // s is unchanged
"My name is Bond! James Bond!"
 
s.substring(11, 16);
"Bond!"
 
> s; // s is still unchanged
"My name is Bond! James Bond!"
> s = s.substring(11, 16);
"Bond!"
 
> s; // this time s has changed, because we did s = s.substring(...), the same 
     // could have been done with s = s .slice(...)
"Bond!"
```
[advanced] There is a difference between slice and substring, when the second parameter is negative:

If you are a beginner, we recommend that you use `substring` for most common cases (as it will behave the same as slice) and that you stay away from negative parameters, where slice and substring show small differences.

Beginners: do not read what follows about `slice` and `substring!` There will be no quiz questions at the end of this chapter about this part!

```javascript
> var s = "My name is Bond! James Bond!";
undefined
 
> s.slice(11, -1); // start from index = 11 to length-1, extract the end of the string from 11th element
"Bond! James Bond"
 
> s.substring(11, -1); // the reverse, extract from 0 until 11-1, get the first 10 chars
"My name is "
 
> s.substring(1, -1); // extract from 0 to 1-1 = 0, get the first char
"M"
```
Actually, here is a summary of the common behaviors and the differences between slice and substring.

#### [advanced] slice(start, stop) works like substring(start, stop) with a few different behaviors:

#### What they have in common:

* If start equals stop: returns an empty string
* If stop is omitted: extracts characters to the end of the string
* If either argument is greater than the string's length, the string's length will be used instead.

#### Distinctions of substring():

* If start > stop, then substring will swap those two arguments.
* If either argument is negative or is NaN, it is treated as if it were 0.

#### Distinctions of slice():

* If start > stop, slice() will NOT swap the two arguments.
* If start is negative: sets char from the end of string.
* If stop is negative: sets stop to: string.length – Math.abs(stop.

###The split(), join() and concat() methods

The split method returns an array of strings, the parameter is a separator. The join method builds a string from an array of strings.

```javascript
> var s = "My name is Bond! James Bond!";
undefined
 
> s.split(" ");
["My", "name", "is", "Bond!", "James", "Bond!"]
 
> s;
"My name is Bond! James Bond!"
 
> s.split(' ').join('-#-');
"My-#-name-#-is-#-Bond!-#-James-#-Bond!"
 
> s.split(' ').join('.......');
"My.......name.......is.......Bond!.......James.......Bond!"
 
> s.split('Bond!').join('.......');
"My name is ....... James ......."
 
> s.split('Bond!').join(' ');
"My name is James "
 
> s; // s is unchanged
"My name is Bond! James Bond!"
 
> s.concat("And I've made a lot of movies!");
"My name is Bond! James Bond! And I've made a lot of movies!"
 
> s; // s is also unchanged by concat
"My name is Bond! James Bond!"
 
> s = s + "and I've made a lot of movies!"; // this changes s
"My name is Bond! James Bond! And I've made a lot of movies!"
 
> s += " Action films!" // this too, most common syntax for concatenating strings
"My name is Bond! James Bond! And I've made a lot of movies! Action films!"
 
> s; // s changed too
"My name is Bond! James Bond! And I've made a lot of movies! Action films!"
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JavaScript class: Math

# Built-in JavaScript class: Math

Built-in JavaScript class: Math

It’s not possible to do `var m = new Math();`

```javascript
> var m = new Math();
VM5777:1 Uncaught TypeError: Math is not a constructor
at <anonymous>:1:9
(anonymous) @ VM5777:1
```

But the `Math` class has a lot of properties and methods that are useful for arithmetic expressions. **They are all class methods and properties, so you will need to use the name of the class followed by the dot operator to access them.**

Here are some examples:

```javascript
> Math.PI;
3.141592653589793
 
> Math.SQRT2;
1.4142135623730951
 
> Math.E; // Euler constant
2.718281828459045
 
> Math.LN2; // Neperian log of 2
0.6931471805599453
 
> Math.LN10; // Neperian log of 10
2.302585092994046
```
#### Random numbers between 0 and 1 with Math.random()

Math.random() returns a float value between 0 and 1.

Examples:

```javascript
> Math.random();
0.6033316111663034
 
> 100 * Math.random(); // between 0 and 100
11.780563288516422
```

To get a number between a min and a max value, use this formula: val = ((max - min) * Math.random()) + min

And here is an utility function:

```javascript
function getRandomValue(min, max) {
    return ((max - min) * Math.random()) + min;
}
 
> getRandomValue(5, 10);
5.064160540161435
```

#### Math and rounding methods round(), ceil(), floor()

`round`: to get the closest integer value.

For example `Math.round(Math.random());` will return 0 or 1.

Indeed, if `Math.random()` returns a value above 0.5, Math.round of this value will return 1, if the value is below 0.5, `Math.round` will return 0:

```javascript
> Math.round(Math.random());
1
 
> Math.round(Math.random());
0
 
> Math.round(Math.random());
1
 
> Math.round(Math.random());
1
```
#### Get the min and the max of two values with Math.min(a, b) and Math.max(a, b)

```javascript
> Math.min(12, 4);
4
 
> Math.max(12, 4);
12
```
#### A useful function that restricts a value between  min and  max bounds:

```javascript
function restrictValue(value, min, max) {
    return Math.min(Math.max(1, value), max);
}
 
> restrictValue(40, 1, 20);
20
 
> restrictValue(-10, 1, 20);
1
 
> restrictValue(10, 1, 20);
10
```
#### Math functions for arithmetical computations sin(), cos(), tan(), atan(), atan2(), pow(), sqrt()

```javascript
> Math.pow(2, 8); // 2^8
256
 
> Math.sqrt(9);
3
 
> Math.sin(Math.PI/2);
1
 
> Math.cos(Math.PI/2);
6.123233995736766e-17
```

#### Math.atan2(dy, dx) is useful for getting an angle between a point in a canvas and the mouse cursor

Here is a typical example of the use of Math.atan2 in a video game, in order to make an object follow the mouse cursor by moving towards it. Look at the code in the mainloop function.

https://codepen.io/w3devcampus/pen/aWOJQN

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset=utf-8 />
<title>Use Math.atan2 to make an object follow the mouse cursor</title>
</head>
<body onload="init();">
  <p>Move the mouse cursor and see the black rectangle following it.</p>
  <canvas id="myCanvas" width="400" height="400">
  </canvas>
</body>
</html>
```


```css
canvas {
  border: 2px solid black;
}
```



```javascript
var canvas, ctx, width, height;
var rect = {x:40, y:40, radius: 30, width:40, height:40, v:3};
var mousepos = {x:0, y:0};

function init() {
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext('2d');
  width = canvas.width;
  height = canvas.height; 
  
  canvas.addEventListener('mousemove', function (evt) {
        mousepos = getMousePos(canvas, evt);
     }, false); 
 
  mainloop();
}


function mainloop() {
    // 1) clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // 2) move object
    var dx = rect.x - mousepos.x;
    var dy = rect.y - mousepos.y;
    var angle = Math.atan2(dy, dx);
  
    rect.x -= rect.v*Math.cos(angle);   
    rect.y -= rect.v*Math.sin(angle); 
  
    // 3) draw object
    drawRectangle(angle);
  
    // 4) request new frame
     window.requestAnimationFrame(mainloop);
}
 
function drawRectangle(angle) {
  ctx.save();
  
  // These two lines move the coordinate system
  ctx.translate(rect.x, rect.y);
  ctx.rotate(angle);
  // recenter the coordinate system in the middle
  // the rectangle. Like that it will rotate around
  // this point instead of top left corner
  ctx.translate(-rect.width/2, -rect.height/2);
  
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.restore();
}

function getMousePos(canvas, evt) {
  // necessary to take into account CSS boudaries
  var rect = canvas.getBoundingClientRect();
  return {
     x: evt.clientX - rect.left,
     y: evt.clientY - rect.top
  };
}
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Built-in JS class: Date

# Built-in JS class: Date

### Built-in JavaScript class: Date

Getting a date by calling the Date constructor

Without any argument, a call to `new Date()` returns the current date.

Note: The return value is actually a Date object, which is displayed by calling toString() on this object.


```javascript
> var date = new Date();
undefined
 
> date;
Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)
> date.toString(); // same thing!
Wed Apr 12 2017 11:10:28 GMT+0200 (CEST)
```
We can also pass it an argument that can be:

* A string that encodes a date
* A set of numeric values separated by a comma for month, day, hour, and so on
* A Unix "timestamp"  (number of milliseconds elapsed since 1970)

... in this case it returns a date object that corresponds to the encoded date passed as argument.

Examples:

```javascript
> new Date('2017 04 28');
Fri Apr 28 2017 00:00:00 GMT+0200 (CEST)
 
> new Date('2017 1 2');
Mon Jan 02 2017 00:00:00 GMT+0100 (CET)
 
> new Date('2017 1 2 8:30');
Mon Jan 02 2017 08:30:00 GMT+0100 (CET)
```
Numerical parameters can also be passed in this order: year, month (0-11), day (1-31), time (0-23), minutes (0-59), seconds , milliseconds (0-999). We do not have to pass everything but it should always be in this order.

Examples:

```javascript
> new Date(2017, 3, 16, 14, 43, 10, 120);
Sun Apr 16 2017 14:43:10 GMT+0200 (CEST)
 
> new Date(2017, 0, 10, 14);
Tue Jan 10 2017 14:00:00 GMT+0100 (CET)
 
> new Date(2017, 1, 28) // 1 is February! Month indexes start at 0!
Tue Feb 28 2017 00:00:00 GMT+0100 (CET)
 
> new Date(2008, 1, 29);
Fri Feb 29 2008 00:00:00 GMT+0100 (CET)
 
> new Date(2017, 1, 29); // No February 29th in 2017! Gives 1st of March
Wed Mar 01 2017 00:00:00 GMT+0100 (CET)
 
> new Date(2017, 11, 31); // Happy new year!
Sun Dec 31 2017 00:00:00 GMT+0100 (CET)
 
> new Date(2017, 11, 32) // 32 Dec -> 1st of January!
Mon Jan 01 2018 00:00:00 GMT+0100 (CET)
```
One can build the date with a Unix timestamp (number of milliseconds since 1970):

```javascript
> new Date(1199885822900);
Wed Jan 09 2008 14:37:02 GMT+0100 (CET)
```
Calling `Date()` without "new" returns the current date as a string. It does not matter if we pass parameters:

```javascript
> Date();
"Sun Apr 16 2017 14:51:47 GMT+0200 (CEST)"
```
#### Useful methods

```javascript
> var d = new Date();
undefined
 
> d.toString();
"Sun Apr 16 2017 14:52:52 GMT+0200 (CEST)"
 
> d.setMonth(2); // Change for month with index=2
1489672372092
 
> d.toString();
"Thu Mar 16 2017 14:52:52 GMT+0100 (CET)"
 
> d.getMonth(); // get current month index
2
```
Let's play with my birthday!

```javascript
> var d = new Date(1965, 3, 16); // Michel Buffa's birthday
undefined
 
> d.getDay(); // Sunday is 0
5
 
> d; // let's verify
Fri Apr 16 1965 00:00:00 GMT+0200 (CEST)
 
> // Great, it was a Friday :-)
```

Let's write a small piece of code that will guess which days of the week Michel Buffa's birthday will occur, between 2017 and 2047:

```javascript
> var dayOfTheWeek = [0,0,0,0,0,0,0];
 
for (var year = 2017; year <= 2047; year++) {
    dayOfTheWeek[new Date(year, 4, 16).getDay()]++;
}
 
> dayOfTheWeek
[4, 4, 5, 5, 5, 4, 4] // 4 times on a Sunday, Monday, Friday and Saturday, 
                      // 5 times on Tuesday, Wednesday and Thursday
```
#### Explanations:

* Line 1 we use an array with each element being the number of times the birthday occurs on a Sunday, Monday, etc.
* Line 3: we iterate using a for loop on every year between 2017 and 2047.
* Line 4: we build a `Date` object using 16 of April, but change the year, we compute the date of each of Michel Buffa's birthdays between 2017 and 2045, and we get the index of the day (using the `getDay()` method). This index is used to increment corresponding elements of the array defined in line 1.
* Finally, line 7 displays the content of the array. Remember  that typing a variable name in the devtool console is equivalent to calling the object `toString()` method.

And here is a full version with input fields and results displayed in an HTML table:


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Compute day occurences of your birthday</title>
</head>
<body>
  <label for="birthday">Your birthday: </label><input id="birthday" type="date" value="1965-04-16">
  <p>Please enter a starting and an ending year, then click the button.</p>
  <label for="start">Start year:</label>
  <input type=number id="start" value=2017 min=1965 max=3000>
  <p></p>
  <label for="end">End year:</label>
  <input type=number id="end" value=2047 min=1965 max=3000>
  <p></p>
  <button onclick="computeBirthdays();">
    Compute how many times 
    your birthday will occur, 
    for each day of the week
  </button>
  <p></p>
  <output id="results"></output>  
</body>
</html>
```



```css
table, th, td {
   border: 1px solid black;
  text-align:center;
}
```



```javascript

function computeBirthdays() {
  // An array. Each element is the number of times my birthday
  // will occur. For the moment: 0 times on a Monday, 0 times on Friday
  // etc.
  var dayOfTheWeek = [0,0,0,0,0,0,0];

  
  var birthday = document.querySelector("#birthday").value;
  
  // birthday is the value of the input field, 
  // as a string (ex: "1965-4-16")
  // Let's turn it into a Date object
  var birthdayAsDate = new Date(birthday);
  
  // Get the month and year (ex: 16 April)
  var birthdayMonth = birthdayAsDate.getMonth(); // ex: April
  var birthdayDate  = birthdayAsDate.getDate();   // ex: 16
  

  var startYear = document.querySelector("#start").value;
  var endYear = document.querySelector("#end").value;
  
  for (var year = startYear; year <= endYear; year++) {
      var dayOfTheWeekMyBirthDayOccurs = 
          new Date(year, birthdayMonth, birthdayDate).getDay();
  
        console.log('Year : ' + year + " Day of your birthday: " + 
                    getDayName(dayOfTheWeekMyBirthDayOccurs));

      // increment the counter for this day
      dayOfTheWeek[dayOfTheWeekMyBirthDayOccurs]++;
   }

   // add a table to the web page, presenting the results
   displayResults(dayOfTheWeek);

}

function getDayName(dayIndex) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
}

function displayResults(array) {
  document.querySelector("#results").innerHTML = "<p>Occurences of your Birthday:</p>";
  
  var table = document.createElement("table");
  var firstRow = table.insertRow();
  var secondRow = table.insertRow();
  
  
  array.forEach(function(dayOccurence, index) {
    var dayNameCell = firstRow.insertCell(index);
    dayNameCell.innerHTML = getDayName(index);
    
    var nbCell = secondRow.insertCell(index);
    nbCell.innerHTML = dayOccurence;
    
  });
  
  document.querySelector("#results").appendChild(table);
}
```

---

#### Module 5: Working with forms   5.2 Objects (part 4): objects and references, built-in JS classes   Discussion topics and projects

# Discussion topics and projects

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and optional projects.

#### Suggested topics

* Did you notice that the Math class has only class methods and properties: you always use Math.PI, Math.cos(...), etc. Do class properties and methods make sense to you now? It would be nonsense to create two Math objects such as m1 = new Math(); m2 = new Math(); var result = m1.cos(0.5); ...
* For a long time, we've talked about "predefined JavaScript objects", not "classes" when we talked about Math, Date, Array, etc. This is because JavaScript is not a class-based programming language. ES6 introduced classes and the class keyword, but in fact there are no "real classes" in JavaScript, like in class-based languages such as Java or C#. ES6 classes are just constructor functions and prototypes (the thing behind Object Oriented JavaScript) disguised. Did you know that?

---
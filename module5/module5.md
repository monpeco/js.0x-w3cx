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

#### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   The HTML table basics

# The HTML table basics

The HTML table basics: tags, attributes and CSS styling

Introduction

The `<table>` element helps with rendering tables in an HTML document.  

Each table row is defined with the `<tr>` tag (Table Row). A table header is defined with the `<th>` tag (Table Header). By default, table headings are bold and centered. A table data/cell is defined with the `<td>` tag (Table Data). In each cell, you can have other HTML elements/tags. You can have only "column table headers" (the first row of the table will be in bold), or you can also have "row headers" (first cell of each row).

Best practice for making the table accessible: always add a <caption> tag inside the <table> tag. Data tables very often have brief descriptive text before or after the table that indicates the content of that table. This text should be associated to its respective table using the `<caption>` element. The `<caption>` element must be the first thing after the opening <table> tag.

Second best practice for accessibility: use a scope attribute with all `<th scope = "row or column">` for identifying whether a table header is a column header or a row header. 

You can read these [recommendations](https://www.w3.org/WAI/tutorials/tables/) for making accessible tables.

Typical example:

```html
<table>
    <caption>A typical HTML table</caption>
    <tr>
        <th scope="col">Given Name</th>
        <th scope="col">Family Name</th>
        <th scope="col">Age</th>
    </tr>
    <tr>
        <td>Michel</td>
        <td>Buffa</td>
        <td>52</td>
    </tr>
    <tr>
        <td>Dark</td>
        <td>Vador</td>
        <td>Unknown</td>
    </tr>
    <tr>
        <td>Luke</td>
        <td>Skywalker</td>
        <td>Unknown</td>
    </tr>
</table>
```
Most of the time, we add some CSS rules for rendering cell/row/table borders and for adjusting spacing between the text in the cells and the cell borders. Let's look at another example:

#### HTML table with a very light CSS styling
https://codepen.io/w3devcampus/pen/vmNQNQ

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A typical HTML table with simple styling</title>
</head>
<body>
<table>
 <caption>A typical HTML table</caption>  
  <tr>
    <th scope="col">Given Name</th>
    <th scope="col">Family Name</th> 
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Michel</td>
    <td>Buffa</td> 
    <td>52</td>
  </tr>
  <tr>
    <td>Dark</td>
    <td>Vador</td> 
    <td>Unknown</td>
  </tr>
    <tr>
    <td>Luke</td>
    <td>Skywalker</td> 
    <td>Unknown</td>
  </tr>
</table>
  <p>Click the button below to add the CSS style "border-collapse: collapse;"
    to the table (this will make the double borders disappear):</p>
  <button onclick="borderCollapse();">Border Collapse</button>
</body>
</html>
```


```css
table {
  width:100%;
  border:1px solid;
}


tr, th, td {
  border:1px solid;
  font-family:courier;
}

td {
  text-align:center;
  padding:10px;
  
}
```


```javascript
function borderCollapse() {
  var table = document.querySelector("table");
  
  table.style.borderCollapse = "collapse";
}
```
This is a static table. You can look at the CSS code:

```css
table {
    width:100%;
    border:1px solid;
}
 
 
tr, th, td {
    border:1px solid;
    font-family:courier;
}
 
td {
    text-align:center;
    padding:10px;
}
```
Explanations:

+ Line 1: this rule says that the table will occupy the width of the window and will have a black, continuous border that is one pixel wide.
+ Line 7: this rule says that table rows, table cells and table headers will also have a border and will use the font family Courier.
+ Line 12: this says that all cells will have the text horizontally centered and an internal margin (called padding) of 10px in each direction (top, bottom, left, right).

Here is another example with more CSS styling (flat design)

https://codepen.io/w3devcampus/pen/MmKYNx
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A typical HTML table with simple flat design styling</title>
</head>
<body>
<table id="myTable" class=".flat-design">
 <caption>A typical HTML table</caption>  
  <tr>
    <th scope="col">Given Name</th>
    <th scope="col">Family Name</th> 
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Michel</td>
    <td>Buffa</td> 
    <td>52</td>
  </tr>
  <tr>
    <td>Dark</td>
    <td>Vador</td> 
    <td>Unknown</td>
  </tr>
    <tr>
    <td>Luke</td>
    <td>Skywalker</td> 
    <td>Unknown</td>
  </tr>
</table>

</body>
</html>
```


```css
#myTable {
  display: block;
  font-family: sans-serif;
  font-size: 115%;
  overflow: auto;
  width: auto;
  }

 #myTable  th {
    background-color: rgb(112, 196, 105);
    color: white;
    font-weight: normal;
    padding: 20px 30px;
    text-align: center;
  }


 #myTable td {
    background-color: rgb(238, 238, 238);
    color: rgb(111, 111, 111);
    padding: 20px 30px;
    text-align:center;
  }

#myTable caption {
  background-color:lightGreen;
  padding:20px;
  font-size: 130%;
}
```

And a final example with colored lines, header, footer, legend 

Look at the CSS - it's the only part that changed:
https://codepen.io/w3devcampus/pen/gWPppo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A typical HTML table with colored lines and more CSS styling</title>
</head>
 <body> 
   <p>Move tht mouse over the lines, look at the CSS part.</p>
  <table>
<caption>table caption</caption>
	<thead>
		<tr>
			<th scope="col">thead th</th>
			<th scope="col">thead th</th>
			<th scope="col">thead th</th>
			<th scope="col">thead th</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<th scope="row">tbody th</th>
			<td>tbody td</td>
			<td>tbody td</td>
			<td>tbody td</td>
		</tr>
		<tr>
			<th scope="row">tbody th</th>
			<td>tbody td</td>
			<td>tbody td</td>
			<td>tbody td</td>
		</tr>
		<tr>
			<th scope="row">tbody th</th>
			<td>tbody td</td>
			<td>tbody td</td>
			<td>tbody td</td>
		</tr>
    <tr>
			<th scope="row">tbody th</th>
			<td>tbody td</td>
			<td>tbody td</td>
			<td>tbody td</td>
		</tr>
    <tr>
			<th scope="row">tbody th</th>
			<td>tbody td</td>
			<td>tbody td</td>
			<td>tbody td</td>
		</tr>
	</tbody>
    	<tfoot>
		<tr>
			<th scope="row">tfoot th</th>
			<td colspan="2">tfoot td colspan=2</td>
			<td>tfoot td</td>
		</tr>
	</tfoot>
</table>
</body>
</html>
```


```css
table {
  width:98%;
  margin:0 auto;
  border-bottom:3px #eee solid;
  border-collapse:collapse;
  font-size:12px
}
th, td {
  padding:5px 10px
}
caption {
  font-weight:bold;
  font-size:24px;
  padding:5px; 
  color:#1BA6B2; 
  text-align:left;
  margin-bottom:5px
}
thead th {
  background:#ABC668;
  color:#fff;
  border-right:1px solid #fff
}
thead th:last-child {
  border-right:none
}
tbody th {
  width:10%
}
tbody tr:nth-child(even) {
  background:#eee
}
tbody tr:nth-child(even) th {
  background:#ddd
}
tbody tr:hover {
  background:#F3F5BB
}
tbody tr:hover th {
  background:#F2F684; 
  color:#1BA6B2
}
tfoot tr {
  border-top:6px solid #E9F7F6; 
  color:#1BA6B2
}
```

---

#### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   The HTML table JavaScript API: dynamic tables!

# The HTML table JavaScript API: dynamic tables!

### Introduction

There is a JavaScript API associated with the HTML table elements that makes dynamic table management possible, enabling you to add or delete a row, add or delete a cell, modify the content of the cells, etc.

We've already seen some examples in the course, but we have not completely covered the table JavaScript API.

#### The Table object (<table>)

When you look for a table using the DOM API or the selector API, or when you create a table using the DOM API, you get a Table object:



```javascript
var table = document.getElementById("myTable");
 
var table = document.querySelector("#myTable");
 
var table = document.createElement("table"); // creates a new table
```

Like all objects, an instance of Table will have properties and methods:

|        |Most useful properties |
|--------|-----------------------------------------------------|
|rows	 | Returns a collection of all `<tr>` elements in a table|
|caption | Returns the `<caption>` element of a table|
|tFoot	 | Returns a reference to the `<tfoot>` element of a table|
|tHead	 | Returns a reference to the `<thead>` element of a table|


|                  | Most useful methods|
|------------------|--------------------|
|insertRow()	   |Creates an empty `<tr>` element and adds it to the table. Example: `var row = table.insertRow();` inserts a new row at the end of the table. `var row = table.insertRow(0);` inserts at index = 0, `var row = table.insertRow(10);` inserts at index = 10, and pushes all the rows after this index.|
|deleteRow()	   |Removes a row (`<tr>`) from the table. Example `table.deleteRow(0);` deletes the row at index 0.|
|createCaption()	|Creates an empty `<caption>` element and adds it to the table|
|deleteCaption()	|Removes the first `<caption>` element from the table|
|createTHead()	|Creates an empty `<thead>` element and adds it to the table|
|deleteTHead()	|Removes the `<thead>` element from the table|
|createTFoot()	|Creates an empty `<tfoot>` element and adds it to the table|
|deleteTFoot()	|Removes the `<tfoot>` element from the table|

#### Example that adds a new row or removes a row to/from a table using the insertRow()/deleteRow() methods:



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A typical HTML table with simple styling</title>
</head>
<body>
<table id="myTable">
 <caption>A typical HTML table</caption>  
  <tr>
    <th scope="col">Given Name</th>
    <th scope="col">Family Name</th> 
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Michel</td>
    <td>Buffa</td> 
    <td>52</td>
  </tr>
  <tr>
    <td>Dark</td>
    <td>Vador</td> 
    <td>Unknown</td>
  </tr>
    <tr>
    <td>Luke</td>
    <td>Skywalker</td> 
    <td>Unknown</td>
  </tr>
</table>
  <p>Click to add a new row</p>
  <button onclick="insertRow();">Add a new row</button>
  <p>Click to delete the first row of the table</p>
  <button onclick="deleteFirstRow();">Delete first row</button>
</body>
</html>
```


```css
table {
  width:100%;
  border:1px solid;
  border-collapse: collapse;
}


tr, th, td {
  border:1px solid;
  font-family:courier;
}

td {
  text-align:center;
  padding:10px;
  
}
```

```javascript

function insertRow() {
  var table = document.querySelector("#myTable");
  
  // without parameters, insert at the end,
  // otherwise parameter = index where the row will be inserted
  var row = table.insertRow();
  
  row.innerHTML = "<td>New</td><td>New</td><td>New</td>"
}

function deleteFirstRow() {
  var table = document.querySelector("#myTable");
  table.deleteRow(1); // 0 is the header
}
```

>!Notice the use of row.innerHTML= here to add some cells to the row. We will soon see another method for doing this.

### The TableRow object (<tr>)

When you look for a row using the DOM API or the selector API, or when you create a row using the DOM API, you get a Row object:

```javascript
var row1 = document.getElementById("row1");
 
var row1 = document.querySelector("#row1");
 
var newRow = document.createElement("row"); // creates a new row
```


```javascript
> var t = document.createElement("table");
undefined
 
> var r1 = t.insertRow(0);
undefined
 
> r1.innerHTML="<td>Hello</td>";
"<td>Hello</td>"
 
> var r2 = t.insertRow();
undefined
 
> r2.innerHTML="<td>Hello 2</td>";
"<td>Hello 2</td>"
 
> var row1 = t.rows[0];
undefined
 
> row1;
<tr><td>Hello</td></tr>
```

Like all objects, a TableRow object has properties and methods. Here are the most useful ones:

|                |Most useful properties|
|----------------|----------------------|
|cells	         |Returns a collection of all `<td>` or `<th>` elements in a table row|
|rowIndex	     |Returns the position of a row in the rows collection of a table|
|sectionRowIndex |	Returns the position of a row in the rows collection of a `<tbody>`, `<thead>`, or `<tfoot>`|


|               |Most useful methods|
|---------------|-------------------|
|insertCell()	|Inserts a cell into the current table row. Without parameters, appends a cell after the last cell of the row. You can pass the index of the cell as a unique parameter, in which case other cells are "pushed" to the right. The value of 0 results in the new cell being inserted at the first position. The value of -1 can also be used, which results in the new cell being inserted in the last position.|
|deleteCell()	|Deletes a cell from the current table row. There is one parameter for this method: the index of the cell to remove. The value of 0 results in the deletion of the first cell. The value of -1 can also be used, which results in the deletion of the last cell.|



#### New versions of the previous examples, but instead of using the innerHTML of the TableRow object, we use the insertCell() method.

https://codepen.io/w3devcampus/pen/OmMmGr

```html
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A typical HTML table with simple styling</title>
</head>
<body>
<table id="myTable">
 <caption>A typical HTML table</caption>  
  <tr>
    <th scope="col">Given Name</th>
    <th scope="col">Family Name</th> 
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Michel</td>
    <td>Buffa</td> 
    <td>52</td>
  </tr>
  <tr>
    <td>Dark</td>
    <td>Vador</td> 
    <td>Unknown</td>
  </tr>
    <tr>
    <td>Luke</td>
    <td>Skywalker</td> 
    <td>Unknown</td>
  </tr>
</table>
  <p>Click to add a new row</p>
  <button onclick="insertRow();">Add a new row</button>
  <p>Click to delete the first row of the table</p>
  <button onclick="deleteFirstRow();">Delete first row</button>
</body>
</html>
```


```css
table {
  width:100%;
  border:1px solid;
  border-collapse: collapse;
}


tr, th, td {
  border:1px solid;
  font-family:courier;
}

td {
  text-align:center;
  padding:10px;
  
}
```



```javascript
function borderCollapse() {
  var table = document.querySelector("table");
  
  table.style.borderCollapse = "collapse";
}

function insertRow() {
  var table = document.querySelector("#myTable");
  
  // without parameters, insert at the end,
  // otherwise parameter = index where the row will be inserted
  var row = table.insertRow();
  
  var cell1 = row.insertCell();
  cell1.innerHTML = "New cell1";
  var cell2 = row.insertCell();
  cell2.innerHTML = "New cell2";
  var cell3 = row.insertCell();
  cell3.innerHTML = "New cell3";
}

function deleteFirstRow() {
  var table = document.querySelector("#myTable");
  table.deleteRow(1); // 0 is the header
}
```

Notice how we've created the new row cells:


```javascript
function insertRow() {
    var table = document.querySelector("#myTable");
    // without parameters, insert at the end,
    // otherwise parameter = index where the row will be inserted
    var row = table.insertRow();
    var cell1 = row.insertCell();
    cell1.innerHTML = "New cell1";
    var cell2 = row.insertCell();
    cell2.innerHTML = "New cell2";
    var cell3 = row.insertCell();
    cell3.innerHTML = "New cell3"; 
}
```

So use |insertCell()| or |just row.innerHTML="<td>...</td>"| ? It's up to you: depending on the HTML that you plan to insert into each cell, one version may be more readable than the other.

---

#### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   HTML forms: best practices

# HTML forms: best practices

#### 1 - Creating accessible forms

Forms are commonly used to enable user interaction within Web sites and Web applications, for example, for login, registering, commenting, and purchasing.

Since HTML5 provides functionalities to assist with accessibility, developers should make a concerted effort to mark up Web based forms. The following two guidelines are to give you a good start to make your forms accessible:

For every form field, ensure that a descriptive label is provided and use the `<label>` element to identify each form control.

1. For larger or complex forms, use the `<fieldset>` and <legend> elements to respectively group and associate related form controls.
2. We will give usage examples for each of these two basic guidelines in the following pages.

Further reading

The WAI Web site hosts a [Forms tutorial](https://www.w3.org/WAI/tutorials/forms/) where you will find more guidelines to help make your forms truly accessible: Form Instructions, Validating Input, User Notifications, Multi-Page Forms, and Custom Controls.

#### 2 - Why is this important?

Forms can be visually and cognitively complex and difficult to use. Accessible forms are easier to use for everyone, including people with disabilities.

* People with cognitive disabilities can more easily understand the form and how to complete it, as making forms accessible improves the layout structure, instructions, and feedback.

* People using speech input can use the labels via voice commands to activate controls and move the focus to the fields that they need to complete.

* People with limited dexterity benefit from large clickable areas that include the labels, especially for smaller controls, such as radio buttons and checkboxes.

* People using screen readers can identify and understand form controls more easily because they are associated with labels, field sets, and other structural elements.

#### 3 - Labeling controls

Labels need to describe the purpose of the form control

Form fields and other form controls usually have visible labels, such as "E-mail Address:" as the label for a text field (see figure below).

When these labels are marked up correctly, people can interact with them using only the keyboard, using voice input, and using screen readers. Also, the label itself becomes clickable, which enables a person who has difficulty clicking on small radio buttons or checkboxes to click anywhere on the label text.

Associating labels explicitly

Whenever possible, use the label element to explicitly associate text with form elements. The for attribute of the label must exactly match the id of the form control. 

Example 1 (click on the label, not on the input field to see the effect)

Source code:

```html
<label for="first_name">Your First Name</label>
<input id="first_name" type="text" name="fname"/>
```

Alternative example 1

Note that you can also include the <input> element inside the <label>...</label> element, and also add a <span lang="en"> for example, to indicate the language used in the label. Sometimes, nesting labels and inputs can also make CSS styling easier and produce better results with screen readers.

Source code (with `<input>` inside the `<label>`):


```html
<label for="first_name"><span lang=en">Your First Name</span>
    <input id="first_name" type="text" name="fname"/>
</label>
```
Example 2 (click on the label "Subscribe to newsletter" to see the effect)

Source code:

```html
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>
<label for="subscribe">Subscribe to newsletter</label>
<input type="checkbox" name="subscribe" id="subscribe">
```

#### 4 - Labeling buttons

The label of a `<button>` element is set inside the element and can include markup. This allows advanced accessibility hints to be included, such as marking up language change.

Example: `<button>Mon <span lang="fr">bouton</span></button>`, for a button with a label in French.

When using the `<input>` element to create buttons, the label is set in the value attribute of the element.

Example: `<input type="submit" value="Please submit">`, will be rendered as a button.

Source code for an example of "Submit" and "Cancel" buttons:


```html
<button type="submit">Submit</button>
<button type="button">Cancel</button>
 
<input type="submit" value="Submit">
<input type="button" value="Cancel">
```
These will produce the same results:

#### 5 - Labeling text areas

```html
<label for="address">Enter your address:</label>
<br>
<textarea id="address" name="addresstext"></textarea>
```
#### 6 - Grouping controls

Groupings of form controls, typically groups of related checkboxes and radio buttons, sometimes require a higher level description. Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify.

Associating related controls with fieldset

Grouping needs to be carried out visually and in the code, for example, by using the <fieldset> and <legend> elements to associate related form controls. The <fieldset> identifies the entire grouping and <legend> identifies the grouping's descriptive text.

#### Example 1 - Radio buttons

In the example below, there are three radio buttons that allow the user to choose an output format. Radio button groups should always be grouped using <fieldset>.

Source code:


```html
<fieldset>
   <legend>Output format</legend>
      <div>
         <input type="radio" name="format" id="txt" value="txt" checked>
         <label for="txt">Text file</label>
      </div>
   <div>
      <input type="radio" name="format" id="csv" value="csv">
      <label for="csv">CSV file</label>
   </div>
[…]
</fieldset>
```

#### Example 2 - Checkboxes

In the example below, there are three checkboxes that are all part of an opt-in function for receiving different types of information.

```html
<fieldset>
   <legend>I want to receive</legend>
   <div>
      <input type="checkbox" name="newsletter" id="check_1">
      <label for="check_1">The weekly newsletter</label>
   </div>
   […]
</fieldset>
```

#### [ADVANCED] Associating related controls with WAI-ARIA

WAI-ARIA provides a grouping role that functions in a similar way to fieldset and legend. For example, a div element can have role=group to indicate that the contained elements are members of a group.

WAI-ARIA roles are very important in the accessibility world, and we invite you to see an example provided in the [associated WAI tutorial](http://www.w3.org/WAI/tutorials/forms/grouping/). This article by Oscar Cao gives an [Introduction to understanding WAI-ARIA 1.0 roles](http://oscarcao.com/blog/2015/06/08/introduction-to-understanding-wai-aria-1-0-roles/).


---

#### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   HTML forms and JavaScript

# HTML forms and JavaScript

https://youtu.be/iq5gnJJ8svU

Source code from the example shown in the above video
https://codepen.io/w3devcampus/pen/ZyJXBe

HTML forms and JavaScript

Introduction

We highly recommend that you follow the HTML5 Coding essentials and Best Practices course on W3Cx that has an entire module dedicated to HTML5 forms. 

Forms are a way to get user input which is either sent to a remote server, or processed locally, or both.

This section of the course will only cover local processing and the client-side part, with a focus on JavaScript processing.

Typical example
https://codepen.io/w3devcampus/pen/ZKQJBR

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Form example</title>
</head>
<body>
<form id="myForm">
  <fieldset>
    <legend>Personal informations</legend>
    
    <label for="givenName">Given name:</label>
    <input type="text" id="givenName" required name="givenName">
    
    <br>
    
    <label for="familyName">Family name:</label>
    <input type="text" id="familyName" required name="familyName">
    
    <br>
     <label for="email">Email:</label>
    <input type="email" id="email" required name="email">
    
     <br>
     <label for="age">Age:</label>
    <input type="number" min=0 max=120  step=5 id="age" required name="age">
 
         <br>
     <label for="date">Birth date:</label>
    <input type="date"  id="date" required name="date">
  </fieldset>
  
  <button>Submit form</button>
  </form>
</body>
</html>
```


```css
fieldset {
  padding:10px;
  border-radius:10px;
}

label {
  display:inline-block;
  margin-bottom:10px;
}

input {
  float:right;
  margin-right:70px;
  width:150px;
}

input:invalid {
  background-color:pink;
}

input:valid {
  background-color:lightgreen;
}
```

#### HTML form input can be sent to a server without JavaScript

If a form's content is sent to a remote server, on the server side, you may have PHP, Java, C#, Ruby, Python, etc. components. There are several ways to collect server-side data from a form in a Web page: REST Web services, servlets, Microsoft ASP pages, etc. 

On the client side, the forms indicate to which server and how the data should be sent,  using the action and method attributes respectively. A <button type="submit">` or an `<input type=submit>` field is used to submit the form content.

For example: `<form action="myServerCode.php" method="POST">...</form>`. Here, we set the URL of the server side code (myServerCode.php), and the HTTP method that will be used by the browser for sending the form content (POST).

Example of HTML5 form that will not be sent if invalid input fields are present. Notice that the JavaScript part is only used for giving feedback while entering the password. No JavaScript is used for sending the form data, or for complex, global validation:


https://codepen.io/w3devcampus/pen/pPgWoq

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Example of HTML5 form</title>
        <meta charset="utf-8">
    </head>
    <body>
        <form action="forum.cfm" method="post">
            <fieldset>
                <legend>The bits I need to make you join my forum</legend>
                <label for="givenName">Given name</label>
                <input required type="text" name="givenName" id="givenName" autocomplete="off" autofocus />
                <br/>
                <label for="familyName">family name</label>
                <input required type="text" name="familyName" id="familyName" autocomplete="off" />
                <br/>
                <label for="passwordA">Password</label>
                <input required type="password" name="passwordA" id="passwordA" oninput="checkpasswords()" />
                <meter id="passwordStrength" min="0" max="10" value="0" low="5"></meter>
                <br/>
                <label for="passwordB">Make sure it's right</label>
                <input required type="password" name="passwordB" id="passwordB" oninput="checkpasswords()" />
                <br/>
            </fieldset>
            <fieldset>
                <legend>Random bits I don't need, I'm just curious</legend>
                <label for="dob">Birthday</label>
                <input type="date" name="dob" id="dob">
                <br/>
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" autocomplete="off"/>
                <br/>
                <label for="whereami">Hide and seek location</label>
                <textarea name="whereami" id="whereami"></textarea>
                <button id="findme" type="button">Locate me</button>
                <br/>					
            </fieldset>
            <fieldset>
                <legend>Answer me these questions three</legend>
                <label for="quest">What is your quest?</label>
                <input name="quest" id="quest" type="search" placeholder="I seek..." autocomplete="off" />
                <br/>
                <label for="colour">What is you favourite colour?</label>
                <input type="color" id="colour" name="colour" oninput="this.style.backgroundColor = this.value);" />
                <br/>
                <label for="swallow">What is the wind speed velocity of an unladen swallow?</label>
                <input list="swallows" id="swallow" name="swallow" />
                <datalist id="swallows">
                    <option value="African or European?"></option>
                </datalist>
                <br />
            </fieldset>
            <fieldset>
                <legend>Sanity checks</legend>
                <label for="chuck">How much wood would a woodchuck chuck if a woodchuck could chuck wood?</label>
                <input type="number" name="chuck" id="chuck" min="1" max="15" step="1" value="1" />
                <br/>
                <label for="santa">How possessed by Santa are you right now?</label>
                <input name="santa" id="santa" type="range" min="1" max="12" step="1" value="1" />
                <output name="so" id="santaoutput">1</output>
                <br/>
                <label for="call">Who you gonna call?</label>
                <input list="callingoptions" id="call" name="call" pattern="Ghostbusters|[0-9]*" oninput="validateCallingOptions();" />
                <datalist id="callingoptions">
                    <option value="Ghostbusters"></option>
                </datalist>			
            </fieldset>
            <input type="submit" value="Register!" />
        </form>

    </body>
</html>
```


```css
input:invalid:required,
input:invalid {
	background-color: #FFB6C1;
	border: 2px solid #FF0000;
}

form {
	margin: 20px;
}
fieldset {
	border: none;
}
legend {
	border-bottom: 2px solid #00008B;
	color: #00008B;
	font-family: Verdana;
	font-size:14px;
	width: 400px;
}
label {
	display: inline-block;
	padding: 4px;
	text-align: right;
	width: 400px;
}
input[type=text],
input[type=password],
input[type=date],
input[type=email],
input[type=search],
input[list],
input[type=color],
input[type=number],
input[type=submit],
input[type=button],
textarea {
	border: 2px solid #00008B;
	border-radius: 5px;
	padding: 7px;
	width: 300px;
}
textarea {
	height: 100px;
	vertical-align: top;
}
input[type=search] {
	width: 320px;
}
input[type=color] {
	cursor: pointer;
	width: 150px;
}
input[type=number] {
	width: 150px;
}
input[type=range] {
	width: 300px;
}
meter {
	height: 20px;
	width: 100px;
}
input[type=submit] {
	background-color: #BEBEF7;
	color: #00008B;
	cursor:pointer;
	font-weight: bold;
	margin-left: 420px;
	width: 320px;
}
input[type=button] {
	background-color: #EFBDB8;
	border-color: #8B0000;
	color: #8b0000;
	cursor:pointer;
	font-weight: bold;
	margin-left: 420px;
	width: 320px;
}
```



```javascript
function checkpasswords() {
	var p1 = document.getElementById("passwordA");
	var p2 = document.getElementById("passwordB");
	if (p1.value !== p2.value) {
		p2.setCustomValidity("Passwords do not match");
	} else {
		p2.setCustomValidity("");
	}
	var strength = document.getElementById("passwordStrength");
	var multiplier = 0;
	if ( /[a-z]/.test(p1.value) ) { multiplier++; }
	if ( /[A-Z]/.test(p1.value) ) { multiplier++; }
	if ( /[0-9]/.test(p1.value) ) { multiplier++; }
	strength.value = p1.value.length * multiplier;
}
function validateCallingOptions() {
	var input = document.getElementById("call");
	var validity = input.validity;
	if (validity.patternMismatch) {
		input.setCustomValidity("Not a phone number");
	} else {
		input.setCustomValidity("");
	}
}
```

#### HTML form input can be sent using Ajax / JavaScript

Another approach is to use JavaScript for sending the form content with Ajax. This will be covered in the JavaScript advanced course, to be be available on W3Cx.

#### JavaScript can be used for validating user input "on the fly"

While one is typing or selecting a color, or moving a slider, JavaScript event listeners can be used to track the user's interactions in real time, and perform some validation steps along with giving visual feedback.

We've already seen how we can track the keys typed in an input field in real time:
https://codepen.io/w3devcampus/pen/XMQpRa

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Simple input field validation using keyup events</title>
</head>
<body>
  <h1>Simple input field validation using the 'input' event</h1>
  <p>Just type a name in the input field and see what happens! <span style="color:red"> TRY TO TYPE A "!" too</span></p>
<label>
  <span>Name (required):</span>
  <input type="text" 
         name="nom" 
         maxlength="32" 
         required
         onkeyup = "validateName(event)">
</label>
  <p>
  <span id="keyTyped"></span>
</p>  
</body>
</html>
```

```javascript
function validateName(evt) {
  // this is the input field text content
  var key = evt.key;  
  
  // get the output div
  var output = document.querySelector('#keyTyped');
  // display the value typed in the div 
  output.innerHTML = "Valid key: " + key;
  
  // You can do validation here, set the input field to
  // invalid is the name contains forbidden characters
  // or is too short
  // for example, let's forbid names with length < 5 chars
  if(key === "!") {
    output.innerHTML = "This key is forbidden!";
    // remove the forbodden char
    // current typed value
    var name = evt.target.value;
    // we use the substring JavaScript function
    // to remove the last character
    // first parameter = start index
    // second = last index
    evt.target.value = name.substring(0, name.length-1);
  }
}
```

#### JavaScript can be used for a more global validation before sending a form to a remote server

Example: checking that a password entered twice is identical in two different input fields, that some values are coherent (e.g. a birthday cannot be in the future), etc.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example of using the validation API</title>
     <meta charset="utf-8">
  </head>
  <body>
<form class="myForm" onsubmit="return submitForm();">
  <fieldset>
    <legend>Example use of the validation API: try to submit with different passwords, and with same passwords</legend>
 <label for="password1" >Password:</label> <input type="password" id="password1" oninput="checkPasswords()" required>
 <p>
 <label for="password2">Repeat password:</label> <input type="password" id="password2" oninput="checkPasswords()" required>
 <p>
   <button>Submit</button>
  </fieldset>
</form>
</body>
</html>
```


```css
.myForm input:invalid { 
  background-color: lightPink;
}
.myForm input:valid { 
  background-color:lightGreen; 
}
 .myForm input:required {
   border: 2px solid red;
}
 .myForm input:optional {
   border: 2px solid green;
}
.myForm label { 
  display: inline-block; 
  width: 140px; 
  text-align: right; 
} 
```



```javascript
 function checkPasswords() {
    var password1 = document.querySelector('#password1');
    var password2 = document.querySelector('#password2');
   
    // Use HTML5 form validation API
    if (password1.value !== password2.value) {
       // password2 input field is invalid
       password2.setCustomValidity('Passwords are different');
    } else {
      // call to setCustomValidity with an empty arguments
      // indicates that the input field is valid
       password2.setCustomValidity('');
    }
}

function submitForm() {
  document.body.append("We can submit, the form is valid!");
  
  // Here, for example, we can do what we want with the data
  // Send to a server using Ajax,
  // show the data in a table,
  // save data client-side, etc.
  
  // returning false will not submit the form
  return false;
}
```
JavaScript can be used to make a WebApp that uses form data locally, perhaps with some client-side persistence API

For example, a contact manager that will work offline, saving data locally, in a database inside the browser. Data will be displayed in a dynamic HTML table, without the need for a remote database.

This is the small project we will build together at the end of the course. :-)

---

### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   Discussion topics and project
# Discussion topics and project

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and an optional project.

#### Suggested topics

+ HTML5 tables are some of the most complicated elements, and there are lots of tricks to make them nice and reactive using CSS3 styles. Please share in the forum some of the best looking tables you find.
+ There exist external JavaScript libraries for making "datatables", i.e., HTML tables especially made for displaying structured data. Do you know some of them and can you share your experiences and examples that use them in the forum? What do you think of them?

#### Optional project

+ Add a search input field + a search button to the dynamic table example. Add some more data in the table. Implement a search feature: when you search for "Ian Solo", for example, highlight the table row that contains it. If not found, display a message in the page, next to the search form.


---

#### Module 5: Working with forms   5.3 HTML5 tables, forms and input fields   Projects (verified cohort)

### Projects for the verified cohort

Please make a big table (with a few hundred rows containing structured data). Tip: use loops and random values. For example, use an array of names, an array of cities, an array of zip codes; use Math.random()  and Math.round() to generate random indexes. Then pick data from the arrays, build an object with random names, cities, zip codes, etc. and add it as a row in the table.
Ah, but this table looks too long now!!! Try to paginate it by using a previous and a next page button. You will display the table with 15 rows per page, not more!

---

#### Module 5: Working with forms   5.4 The JSON notation   What is JSON?

# What is JSON?

JSON stands for JavaScript Object Notation. It's a standard for transforming nearly any object into a string representation that is human readable. It became a standard for exchanging data to/from a remote HTTP server, and is available for many other languages in addition to JavaScript.

A JavaScript object o in JSON looks a lot like what o.toString() returns.

#### There are two main methods to know:

> Transform any JavaScript object in JSON:                      var jsonStr = JSON.stringify(obj);
> Transform any JSON string into a JavaScript object:    var jsObj  = JSON.parse(jsonStr);

#### Let's see some examples:


```javascript
> var x = 3;
undefined
 
> JSON.stringify(x);
"3"
 
> var simpleObject = {x:12, y:30};
undefined
 
> JSON.stringify(simpleObject);
"{"x":12,"y":30}"
 
> var anArray = ['Monday', 'Tuesday', 'Wednesday'];
undefined
 
> JSON.stringify(anArray);
"["Monday","Tuesday","Wednesday"]"
 
> var complexObject = {name:'Metallica',
    albums:[
        {name:"Master of Puppets", year:1986},
        {name:"Black Album", year:1991}
    ]
  };
undefined
 
> JSON.stringify(complexObject);
"{"name":"Metallica","albums":[{"name":"Master of Puppets","year":1986},{"name":"Black Album","year":1991}]}"
```
In the above examples, you can see JSON representations of a simple variable of a predefined type, of an array, of a simple object, of an object that contains an array of objects (Metallica example).

And indeed, it looks like the code you typed to create the objects, with quotes around it and around the property names. This is why it is called JavaScript Object Notation ;-)

#### You cannot use JSON objects as JavaScript objects

The JSON representation of JavaScript objects is a string. JSON has been developed mainly for replacing XML as a format for exchanging data between a client and a remote HTTP server. It has become very popular as the format for exchanging data when a Web Application uses Ajax for its communications with the HTTP server. Ajax is a way to send / receive data in the background, without the need to reload the Web page. Along with the DOM API, the appearance of this technology in 2005 with Internet Explorer, made it possible to make Web pages more dynamic. Google Maps was one of the first popular Ajax-powered Web application: as you moved the map, new parts arrived (downloaded in the background from the Gmap HTTP server), and the page updated to display these new parts.

JSON is also very practical for storing objects where strings are expected. There is a data store in your browser called LocalStorage that can be used as a small database for Web applications, but it stores only pairs of key/values in the string format. If you want to save a JavaScript object, you will have to turn it into JSON, then save it. When you read it from the data store, you will need to turn it back from JSON to JavaScript.

Here is a first example that turns an object into JSON and back into a JavaScript object:

```javascript
> var metallica = {name:'Metallica', albums:[{name:"Master of Puppets", year:1986}, 
       {name:"Black Album", year:1991}]};
undefined
> var metallicaJSON = JSON.stringify(metallica);
undefined
> metallicaJSON;
"{"name":"Metallica","albums":[{"name":"Master of Puppets","year":1986},
       {"name":"Black Album","year":1991}]}"
> metallicaJSON.name; // metallicaJSON is not a JavaScript object
undefined
> metallica.name; // metallica is an object
"Metallica"
> var obj = JSON.parse(metallicaJSON); // JSON -> object
undefined
> obj.name; // this is an object
"Metallica"
```
With the JSON representation of an object you cannot access the original object's properties using the "." operator, nor call its methods. The JSON format only stores the list of the object properties (name and value) as a string. Look at line 10: we cannot access the name property of the JSON representation of the metallica object defined at line 1.

When we parse a JSON string using JSON.parse(), we get a real JavaScript object, and we can access its properties (lines 16 and 19).

---

#### Module 5: Working with forms   5.4 The JSON notation   Example: consuming JSON remote data

# Example: consuming JSON remote data




















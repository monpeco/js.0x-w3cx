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

# mesaje a chuleta
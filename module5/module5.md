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
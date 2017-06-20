#### Module 4: Structuring data   4.1 Introduction - Module 4   Module 4 outline

# Module 4 outline

### What you will learn in Module 4

We continue exploring JavaScript Object Oriented Programming:

You will learn new things about JavaScript object properties and methods
You will see how to build many instances of objects using ES5 constructor functions and the new ES6 classes
You will learn how to use the "new" keyword for building objects, and about the mysterious "this" keyword you already met in some examples
You will learn about "class properties and methods" (vs. "instance properties and methods")
Finally, you will use these new concepts for improving the small game we started to develop in Module 2!

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   Introduction

# Introduction

You're already familiar with the concept of objects, but so far we've only seen one simple form, called **"objects literals"** or 
**"singleton objects"**. I think we've referred to them as **"simple objects"** in the course. Here is an example:

```javascript
var js1 = {
    courseName: 'JavaScript intro',
    weeks: 5,
    madeBy: 'W3Cx',
    author: 'Michel Buffa' // no "," after the last property!, even if ES5/6 accept it
}
```

And we access properties values using the "." operator, like this:

```javascript
> js1.author
"Michel Buffa"
 
> js1.weeks
5
```

However, we haven't explained 90% of what is going on, and what we can do with **"objects"**. Our objective in this module, is to 
explain the most important features of objects, while keeping it simple (more advanced topics will be taught in a future 
**"JavaScript Advanced"** course, such as prototypes, context binding, etc.).

#### Features you will learn:

* The relationship between JavaScript objects and arrays,
* What a "reference" is in a programming language,
* How to embed methods in your objects (functions inside an object),
* The `this` object that you very often encounter in Object Oriented JavaScript code,
* How to add methods and properties to your objects,
* How to make multiple objects of the same class using ES6 classes,
* The built-in JavaScript objects and classes: `Array`, `String`, `RegExp`, `Date`, `Math`, `Error`, etc. And, we will remind you about objects such as `navigator`, `document`, `window`, `screen`, etc.

#### Features you will learn in an upcoming course:

* JavaScript prototypes,
* Inheritance,
* Advanced manipulations of properties and methods,
* Methods such as bind, call, etc., that can be useful for changing the value of "this",
* And more!

#### Knowledge check 4.2.1 (not graded)
```javascript
var myBoss = {
    positon: 'The Boss!',
    givenName: 'John, John the Boss!',
    office: 31
};
```
How do we call an object defined like the one shown above?
A JavaScript object literal

#### Explanation
A JavaScript **object literal** is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate 
data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   From objects to arrays

# From objects to arrays

Source code of the example in the above video
https://codepen.io/w3devcampus/pen/XgNdLK?editors=0012



### From objects to arrays

In Javascript, an object = a table whose keys/indexes are defined!

Important note: Darth Vader is called "Dark Vador" in the French versions of SW, and, as a French tutor, I think it's cool to give to one of the heroes an international name. :-)

Look at this array:

```javascript
> var darkVador = ['villain', 'half human half machine'];
undefined
 
> darkVador[0]
"villain"
 
> darkVador[1]
"half human half machine"
```

And now, look at this object:

```javascript
var darkVador = {
    job: 'villain',
    race: 'half human half machine'
};
```
They look a bit similar, don't they?

* Same name of the variable that contains the object `= darkVador`
* Instead of `[` and `]` that we used for defining an array, we use `{` and `}` for defining an object
* The elements of the object (its properties) are separated by a comma `,`
* The pairs of keys/values are separated by `:` as in `race: 'half human, half machine'`
* The last pair of keys/values has no `,` at the end.
* It is possible to access the object's properties with `.` or with brackets

We saw that we can use the `.` operator, followed by the property name. It's also possible to use the bracket notation, and manipulate 
the object as an array whose indexes, instead of being 0, 1, 2 etc., are the property names!

```javascript
> var book = {
title: 'Le Petit Prince',
author: 'Saint-Exupery'
};
undefined
 
> var title = book.title;
undefined
 
> title;
"Le Petit Prince"
 
> var title = book['title'];
undefined
 
> title
"Le Petit Prince";
 
> var author = book['author'];
undefined
 
> author;
"Saint-Exupery"
```
As you can see, if you look at lines 7-10 and 13-16, writing book.title or book['title'] is equivalent!

### In JavaScript, objects are arrays whose indexes are property names: please remember this!

Knowledge check 4.2.2 (not graded)
```javascript
let michel = {
    job:'Your Teacher'
}
```
Check the correct proposal:

michel.job and michel['job'] are equivalent correcto
Explication
We saw that we can use the `.` operator, followed by the property name, like michel.job. It's also possible to use the bracket 
notation, and manipulate the object as an array whose indexes, instead of being 0, 1, 2, etc., are the property names! So `michel.job` 
and michel followed by brackets with `'job'` or `"job"` as an index are equivalent.

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   Property declaration syntax

# Property declaration syntax





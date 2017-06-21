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

Property names: different possibilities

We can put single or double quotes around the name of the property, or nothing at all:

```javascript
var louis = {age: 40}; // WE DO THIS MOST OF THE TIME!
var louis = {"age": 40};
var louis = {'age': 40};
```

In some cases we have to put quotes around the property name:

* When it is a reserved word from JavaScript,
* Or it contains spaces or special characters,
* Or it begins with a number.

Examples:

```javascript
book.1stPublication = '6 avril 1943'; // begins with a number
                                      // Throws a SyntaxError
book['1stPublication'] = '6 avril 1943'; // OK
book.date of publication = '6 avril 1943'; // spaces not allowed!
book['date of publication'] = '6 avril 1943'; // allowed, but avoid!
```

Another classic case where the name of a property is in a variable

In this case it is necessary  to use the syntax with '[' and ']' ...

Example:

```javascript
> var key = 'title';
undefined
 
> book[key];
"Le Petit Prince"
```

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   An object can contain another object

# An object can contain another object

```javascript
> var book = {
    name: 'Catch-22',
    published: 1961,
    author: {                 // embedded object!
        givenName: 'Joseph',
        familyName: 'Heller'
    }
};
undefined
 
> book.author.givenName;
"Joseph"
 
> book.author.familyName;
"Heller"
```

Accessing the embedded object author is done by chaining property accesses using the "." operator, like in book.author.givenName (here we access the givenName property of the object author, which is also a property of the book object).

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   Elements, properties and methods

# Elements, properties and methods

### Live coding video: object methods

>! Missing video/transcript

Source code of the live video example
https://codepen.io/w3devcampus/pen/EXNrjB?editors=0011

### Elements, properties and methods

Some vocabulary:

* For **arrays**, we speak of elements
* For **objects**, we talk about properties
* But a **property can also be a function**, in which case it is called a **method**

Yes, it is possible for an object's property to be a function!

A very simple example:


```javascript
var medor = {
    name: 'Benji',
    bark: function(){
        alert('Ouarf, Ouarf!');
    }
};
```
In this example, the `bark` property's value is a function, so we call bark **"a method"**.

A method is a special property that corresponds to the object's behavior

> Properties correspond to an object's DNA (its characteristics), and are nouns (`age`, `name`, etc.)

> Methods correspond to an object's behavior and are verbs (`bark`, `move`, `changeSpeed`, etc.)

Calling a method

Since a method is a property we can use the `.` operator (or brackets with the method's name as a string index).

Let's see some examples:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript OOP: methods</title>
  </head>
  <body>
    <button onclick='dvSpeak();'>Make Dark Vador speak!</button>
    </body>
</html>
```

```javascript
var darkVador = {
  race: 'human',
  job: 'villain',
  talk: function() {
    return 'come to the dark side, Luke!';
  },
  describeYourself: function() {
    return "I'm a " + this.race + " and I'm a " + this.job + " in a series of movies!";
  }
}

function dvSpeak() {
 document.body.innerHTML += '<p>Dark Vador describes himself: ' + darkVador.describeYourself(); + '</p>';  
 document.body.innerHTML += '<p>Dark Vador says ' + darkVador.talk(); + '</p>';
}
```


```javascript
var darkVador = {
    race: 'human',
    job: 'villain',
    talk: function() {
        return 'come to the dark side, Luke!';
    }
}
 
function dvSpeak() {
    document.body.innerHTML += '<p>Dark Vador says ' + darkVador.talk(); + '</p>';
}
```
* In line 1, we created a simple object named `darkVador`, that has two properties (`race` and `job`) and a method (`talk`).

In the `dvSpeak` function, at line 10, we call `darkVador`'s `talk` method. The syntax is a mix between the one for accessing a property (with the `.` operator), and 
the one for calling a function (with parentheses and `;` at the end).

When we write `darkVador.talk()`, we are executing the `talk` method of the object `darkVador`, but in plain English, we're just asking Dark Vador to talk. We invoke 
its behavior!

#### Another example with the player we saw briefly in Module 2

Here is the last version of the player object we saw in our small game:
https://codepen.io/w3devcampus/pen/xqNoJX

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Draw a monster in a canvas</title>
</head>
<body>
  <canvas id="myCanvas"  width="400" height="400"></canvas>
</body>
</html>
```


```css
canvas {
  border: 1px solid black;
}
```


```javascript
// useful to have them as global variables
var canvas, ctx, w, h; 
var mousePos;

var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red'
}

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // add a mousemove event listener to the canvas
    canvas.addEventListener('mousemove', mouseMoved);

    // ready to go !
    mainLoop();
};

function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function movePlayerWithMouse() {
  if(mousePos !== undefined) {
    player.x = mousePos.x;
    player.y = mousePos.y;
  }
}

function mainLoop() {
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the player
  drawFilledRectangle(player);
  
  // make the player follow the mouse
  movePlayerWithMouse();
  
  // ask for a new animation frame
  requestAnimationFrame(mainLoop);
}

function drawFilledRectangle(r) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(r.x, r.y);
  
    ctx.fillStyle = r.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, r.width, r.height);
  
    // GOOD practice: restore the context
    ctx.restore();
}
```
JavaScript source code:

```javascript
var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red'
}
 
// and we also used two other functions for moving the player with the mouse
// and for drawing it as a filled rectangle
 
function movePlayerWithMouse() {
    if(mousePos !== undefined) {
        player.x = mousePos.x;
        player.y = mousePos.y;
    }
}
 
function drawFilledRectangle(r) {
    // BEST practice: save the context, use 2D transformations
    ctx.save();
    // translate the coordinate system, draw relative to it
    ctx.translate(r.x, r.y);
    ctx.fillStyle = r.color;
    // (0, 0) is the top left corner of the monster
    ctx.fillRect(0, 0, r.width, r.height);
    // BEST practice: restore the context
    ctx.restore();
}
```

Now that we've seen that we can include methods into objects, here is a better, more readable and more encapsulated version of our player object:

```javascript
var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red',
    move(x, y) {
        // change x and y coordinates of the player
        // TODO!
    },
    draw() {
        // draw the player at its current position
        // with current width, height and color
        // TODO!
    }
}
```
Assuming that the move and draw methods are fully implemented, we will now be able to call:

player.move(mousePos.x, mousePos.y) to change the position of the player,
player.draw() to draw the player at its current position, with its current size and color.
Readability is better, it is like asking the player to move, or asking it to draw itself. And we do not need to pass the x, y, width, height, color to the draw method: it is inside the player object, and it can access all its internal property values!

In the next section we will look at how we can access other object's properties from a method or call other methods.

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   "this": accessing properties

# "this": accessing properties

Live coding video: add methods to the player object from the game

>! Missing video/transcript

Source code of examples shown in the above video

* Game without methods in the player object (example included in the previous course page), here on [CodePen](https://codepen.io/w3devcampus/pen/xqNoJX)
* Game with methods (example also included in this course page), here on [CodePen](https://codepen.io/w3devcampus/pen/oZRrQd/)

### The this keyword: Accessing properties from a method

#### The this keyword!

When one wants to access an object property or wants to call another method from an object method, we must use the `this` keyword. In the code of the 
player object, `this` means "from this object".

Let's look at our game again, with a new version of the player object - this time fully functional:

Let's look at our game again, with a new version of the player object - this time fully functional:


```javascript
// useful to have them as global variables
var canvas, ctx, w, h; 
var mousePos;

var player = {
  x:10,
  y:10,
  width:20,
  height:20,
  color:'red',
  
  move: function(x, y) {
    this.x = x;
    this.y = y;
  },
  
  draw: function(ctx) {
    // draw the player at its current position
    // with current width, height and color
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(this.x, this.y);
  
    ctx.fillStyle = this.color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, this.width, this.height);
  
    // GOOD practice: restore the context
    ctx.restore();    
  }
}

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // add a mousemove event listener to the canvas
    canvas.addEventListener('mousemove', mouseMoved);

    // ready to go !
    mainLoop();
};

function mouseMoved(evt) {
    mousePos = getMousePos(canvas, evt);
}

function getMousePos(canvas, evt) {
    // necessary work in the canvas coordinate system
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mainLoop() {
  // 1 - clear the canvas
  ctx.clearRect(0, 0, w, h);
  
  // draw the player
  player.draw(ctx);
  
  // make the player follow the mouse
  // the animations starts as the page is loaded
  // maybe the mouse is not yet over the canvas
  // this is why we test if the mousePos is defined
  if(mousePos !== undefined)
      player.move(mousePos.x, mousePos.y);
  
  // ask for a new animation frame
  requestAnimationFrame(mainLoop);
}

```
JavaScript code extract:

```javascript

var player = {
    x:10,
    y:10,
    width:20,
    height:20,
    color:'red',
    move: function(x, y) {
        this.x = x; // this.x is the property of "this object"
        this.y = y;
    },
    draw: function(ctx) {
        // draw the player at its current position
        // with current width, height and color
        // it's nearly the same code as the old drawFilledRect function
        ctx.save();
        // translate the coordinate system, draw relative to it
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        // (0, 0) is the top left corner of the monster
        ctx.fillRect(0, 0, this.width, this.height);
        // BEST practice: restore the context
        ctx.restore();
    }
}
```

Notice that we've used this followed by the `.` operator every time we've had to access the current value of an object's property (lines 9, 10, 20, 22 and 24).

We passed the canvas' graphic context as a parameter to the `draw` method (it's always good not to create dependencies when making objects). Passing the context 
as a parameter avoids using it as a global variable. If in another project we've got a context named "context" instead of "ctx", then we will just change the parameter when we call player.draw, otherwise we would have had to rename all occurrences of ctx in the code).

Same with the mouse coordinates we passed to the move method.

#### Let's see the Dark Vador example with the use of this in a method

```javascript
var darkVador = {
  race: 'human',
  job: 'villain',
  talk: function() {
    return 'come to the dark side, Luke!' + this.breathe();
  },
  describeYourself: function() {
    return "I'm a " + this.race + " and I'm a " + this.job + " in a series of movies!" + this.breathe();
  },
  breathe() {
    return ".....shhhhhhhhh.....";
  }
}

function dvSpeak() {
 document.body.innerHTML += '<p>Dark Vador describes himself: ' + darkVador.describeYourself(); + '</p>';  document.body.innerHTML += '<p>Dark Vador says: ' + darkVador.talk(); + '</p>';
}

```

```javascript
var darkVador = {
    race: 'human',
    job: 'villain',
    talk: function() {
        return 'come to the dark side, Luke!' + this.breathe();
    },
    describeYourself: function() {
        return "I'm a " + this.race + " and I'm a " + this.job +
               " in a series of movies!" + this.breathe();
        },
    breathe() {
        return ".....shhhhhhhhh.....";
    }
}
 
function dvSpeak() {
    document.body.innerHTML += '<p>Dark Vador describes himself: ' +     
                                darkVador.describeYourself(); +
                                '</p>';
    document.body.innerHTML += '<p>Dark Vador says: ' +
                                darkVador.talk(); +
                                '</p>';
}
```
In this example, notice that the describeYourself method from the `darkVador` object uses the two properties `name` and `job` using the `this` keyword. 
We also call the `breathe` method from the two methods `describeYourself` and `talk`, using `this.breathe();`.

---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   Adding/deleting properties and methods

# Adding/deleting properties and methods

### Properties and methods can be added/deleted after an object has been defined

> Unlike other object-oriented languages, it is possible in JavaScript to add or to remove properties after an object has been created

Examples:
https://codepen.io/w3devcampus/pen/WpqeyK

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript OOP: methods</title>
  </head>
  <body>
    <p>Look at the JS code. This time we created an empty object and added properties and methods afterwards.</p>
    <button onclick='dvSpeak();'>Make Dark Vador speak!</button>
    </body>
</html>
```

```javascript
// empty object with no properties/methods
var darkVador = {};

// add properties after darkVador has been created
 darkVador.race = 'human';
  darkVador.job = 'villain';
  darkVador.talk = function() {
    return 'come to the dark side, Luke!' + this.breathe();
  };

  darkVador.describeYourself = function() {
    return "I'm a " + this.race + " and I'm a " + this.job + " in a series of movies!" + this.breathe();
  };

  darkVador.breathe = function() {
    return ".....shhhhhhhhh.....";
  };


function dvSpeak() {
 document.body.innerHTML += '<p>Dark Vador describes himself: ' + darkVador.describeYourself(); + '</p>';  document.body.innerHTML += '<p>Dark Vador says: ' + darkVador.talk(); + '</p>';
}
```

```javascript
// empty object with properties/methods
var darkVador = {};
 
// add properties after darkVador has been created
darkVador.race = 'human';
darkVador.job = 'villain';
 
// add some methods
darkVador.talk = function() {
    return 'come to the dark side, Luke!' + this.breathe();
};
```
* Lines 5, 6 and 9: we can add properties and methods after the object has been created empty at line 2.

### Deleting a property or a method

You can use the JavaScript keyword `delete` to delete an object's property (it will become undefined).

Example:
https://codepen.io/w3devcampus/pen/RpzNEP
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript OOP: methods</title>
  </head>
  <body>
    <p>Look at the JS code. This time we created an empty object and added properties and methods afterwards.</p>
    <button onclick='dvSpeak();'>Make Dark Vador speak!</button>
    <p>Click the button below (it will delete the "race" property of the darkVador object). Then click again the button above and see the "undefined" value of the darkVador.race property now.</p>
    <button onclick="deleteSomeProperties()">Delete some of Dark Vador's properties</button>
    </body>
</html>
```

```javascript
// empty object with properties/methods
var darkVador = {};

// add properties after darkVador has been created
 darkVador.race = 'human';
 darkVador.job = 'villain';

// add some methods
  darkVador.talk = function() {
    return 'come to the dark side, Luke!' + this.breathe();
  };

  darkVador.describeYourself = function() {
    return "I'm a " + this.race 
      + " and I'm a " + this.job 
      + " in a series of movies!" + this.breathe();
  };

  darkVador.breathe = function() {
    return ".....shhhhhhhhh.....";
  };


function dvSpeak() {
 document.body.innerHTML += '<p>Dark Vador describes himself: ' + darkVador.describeYourself(); + '</p>';  document.body.innerHTML += '<p>Dark Vador says: ' + darkVador.talk(); + '</p>';
}

function deleteSomeProperties() {
  delete darkVador.race;
  delete darkVador.job;
}
```

JavaScript code extract:

```javascript
function deleteSomeProperties() {
  delete darkVador.race;
  delete darkVador.job;
}
```

#### Knowledge check 4.2.4 (not graded)

```javascript
let pacman = {};
pacman.color:'yellow';
pacman.shape: 'pizza';
```
Explanation
No, it's not correct! While adding and removing properties after the object has been declared/created (line 1 of the source code), the syntax for declaring 
properties INSIDE an object (with `:`) is no more valid. You must use the `=` operator for the assignment. The correct code is:

```javascript
let pacman = {};
pacman.color = 'yellow';
pacman.shape = 'pizza';
```
---

#### Module 4: Structuring data   4.2 Objects (part 2): properties and methods   Discussion topic

# Discussion topic

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

Suggested topic of discussion:

We simplified the explanations for `this` in this introductory course. Normally, `this` is the current object when you use it inside an "object literal" 
(like in this [CodePen example from the course](https://codepen.io/w3devcampus/pen/JWqgGZ)). 

But... we also met `this` in event listeners (see in this [example from the course](https://codepen.io/w3devcampus/pen/gmygzV?editors=1000). Look at the 
`onchange = "changePageBackgroundColor(this.value);")` ... 

In fact, the `this` keyword can be confusing in JavaScript. The key thing to remember is that it is bound to the calling object when the function is called, not when the function is created.

And in the case of event listeners, the callbacks are called by the browser... You can conclude that it's a good habit not to have event listeners in your 
objects: just use methods in which there is no confusion about `this`.

Let's discuss that (or `this`?) in the forum :-)

---

#### Module 4: Structuring data   4.3 Objects (part 3): creating multiple objects   Classes: definition

# Classes: definition
#### Module 2: Adding interactivity to HTML documents   2.1 Introduction - Module 2   Module 2 outline
# Module 2 outline
### What you will learn in Module 2

* Conditional statements and logical operators: if...then...else, etc.
* Loops: iterating on collections, doing things repeatedly
* Events: detect keys, mouse clicks or moves, window resize events, etc.
* DOM: interacting with the content of the HTML page (selecting elements, modifying them, adding and removing new ones)
* HTML5 canvas intro: learn how to draw and animate simple shapes in a HTML5 canvas



#### Module 2: Adding interactivity to HTML documents   2.2 Conditional statements, loops and logical operators   Boolean values and logical operators

# Boolean values and logical operators

### Live coding video: boolean value,, if...else statement and comparison operators


>! missing video/transcript

### Boolean values and logical operators

Introduction

Before talking about how your JavaScript program can make decisions, such as **if this condition is fulfilled then I'll do this, 
otherwise I'll do that...**, we need to define a few more concepts.

We will start with **boolean values** and **logical operators**.

#### Boolean values

The boolean type represents a logical entity having two values: **true** and **false**.

Use of the keywords true and false:

```javascript
var b = true; 
 
var b = false;
```

A boolean variable should not be enclosed in quotation marks, otherwise it becomes a string variable:
```javascript
var b = 'true'; // b is not a boolean but a string
```

#### Undefined and null values

#### Undefined

undefined is returned when a variable has not been assigned:

```javascript
var foo;
> foo
undefined
 
> typeof foo;
'undefined'
 
>if (foo === undefined) {
    console.log('The variable foo has no value and is undefined');
}
'The variable foo has no value and is undefined'
```
The above example shows how we can test whether a variable has a value (line 8 uses a conditional statement).

The keyword "undefined" is part of the JavaScript language, so you can assign the undefined value to a variable:

```javascript
> var foo = undefined; // equivalent to var foo; without giving any value
undefined
 
> foo;
undefined
```

`var foo;` and `var foo = undefined;` are equivalent but we recommend that you use the first version to declare the variable (it is shorter, and that reduces the code).

If you try to access a variable that has not been declared before, a `ReferenceError` will be raised. But the `typeof` operator will return "undefined":

```javascript
> bar;
ReferenceError
 
> typeof bar;
'undefined'
Logical operators
```

#### Logical operators

The logical operators are as follows: 

*  && (AND)  

```javascript 
if ((x  > 0) && (x < 10)) { 
	console.log('x is strictly positive and less than 10'); 
}
```

*  || (OR) 

```javascript
if ((x  > 0) || (x == -5)) { 
	console.log('x is positive or equal to -5'); 
}
```

*  ! (NOT) 

```javascript
if (!(x  > 0)) { 
	console.log('x is not positive (x is less or equal to 0'); 
}
```
			 
`&&`, `||` operators are binary, `!` is unary. 


```javascript
var b = !true; 
b; //false
 
var b = !!true;
b; //true
 
var b = "one"; 
!b;   false // implicit conversion of "one" to a boolean value
 
var b = "one"; // implicit conversion of "one" to a boolean value
!!b; //true

```

In an expression with logical operators, as shown in lines 8 and 11 of the previous example, non-boolean values are implicitly converted to boolean.

#### Lazy evaluation or short-circuit evaluation:

Logical expressions are evaluated from left to right. JavaScript uses a mechanism known as **short-circuit evaluation** to prevent 
the second, third, and nth conditions from being tested in certain cases: 

* **false && something (an expression)**  is always false, and the part to the right of `&&` operator is not tested.
* **true || something (an expression)** is evaluated to true, and the part to the right of the `||` operator is not tested.

Examples:

```javascript
var b = 5;
var c = 6;
 
if ((b === 5) || (b === 6))  { //the second part is never tested
    console.log('b is equal to 5 or equal to 6');
}
 
if ((b === 5) && (c === 6)) {  // second part is evaluated
    console.log('b  is equal to 5 and c is equal to 6');
}
 
if ((b === 15) && (c === 6)) {  // second part is never evaluated
    console.log('b  is equal to 5 and c is equal to 6');
} else {
    console.log('b not equal to 15 or c not equal to 6');
}

```

### Implicit conversions of non boolean values in expressions

Used with logical operators or within statements, non-boolean values are implicitly converted to booleans.  

### All the following values are evaluated as false :

1. false
2. undefined
3. null
4. 0
5. NaN
6. the empty string ''

### Everything else is evaluated as true!


```javascript
var boo = 'hello' && 'world';

```
***Great example***
boo equals 'world' because 'hello' is a string value that is evaluated as true.


```javascript
var boo2 = (0/0) || 43.2 ;

```
boo2 equals `43.2` because the expression 0/0 equals `NaN`, which is evaluated as `false`.

Question:

What is the value of the variable myNumber after the execution of this code? 

```javascript
var myNumber = !1;
 
if(myNumber == null){
   myNumber = 3;
}
 
myNumber = myNumber || 2;

```

### Comparison Operators

* Equal ==
* Not equal !=
* Greater than >
* Greater than or equal >=
* Less than <
* Less than or equal to <=
* Strict equal ===
* Strict not equal !==

### What is the difference between == and === in JavaScript?

### Equal (==)

Returns true if the operands are strictly equal with type conversion.

### Strict equal (===)

Returns true if the operands are strictly equal with no type conversion.

The triple-equals operator never does type coercion. It returns true if both operands reference the same object, or in the case of 
value types, have the same value.

Some examples :

```javascript
1 == 1 ;
//true
 
1 == 2 ;
//false
 
/* Here, the interpreter will try to convert the string ‘1’
into a number before doing the comparison */
 
1 == '1';
//true :
 
 
//with strict equal, no conversion:
 
1 === 1;
//true
1 === '1';
//false

```

### Depending on the context, generally strict equal (or strict not equal) is preferred. 

### Best practice for beginners: always use === or !== for comparisons.



Here's an interesting article about this question:

"Why you should use strict equal" (Impressive Webs, March 1st, 2012)
https://www.impressivewebs.com/why-use-triple-equals-javascipt/

#### Specific case of NaN

As we have already seen, JavaScript has some special values. One of them is NaN: **Not-a-Number**. 

NaN has this special property : 

```javascript
NaN == NaN;
// false
 
NaN === NaN;
// false

```

`Nan` is equal to nothing - not even to itself!  But you do have a function to check the `NaN` value:  `isNaN(expr)` 

* `isNaN`: returns true if the argument coerces to `NaN`, and otherwise returns `false`.


```javascript
isNaN(NaN);
// true
 
isNaN(0/0);
// true
 
isNaN(12);
// false
 
isNaN('foo');
// true

```

A reliable way for ECMAScript code to test if a value X is a `NaN`, is an expression of the form `X !== X`. The result will be `true` if, 
and only if, `X` is a `NaN`. (see the isNan documentation).


```javascript
var num =0/0;
 
if(isNaN(num)){
   num = 0;
}
//shortened version with the conditional operator
var num = isNaN(num) ? 0 : num
 
//version with logical operator (implicit conversion)
var num = num || 0;
 
/*
   <=> num = NaN || 0
 
   <=> num = false || 0
*/
 
num;
//returns 0 in this three cases

```


Of course 0/0 rarely happens, but there are other cases where NaN can appear, for example:

* `parseInt('foo');`  returns `NaN`   //parseInt tries to convert a String to a Number 
* `Math.sqrt(-1);` return `NaN` 


---

#### Module 2: Adding interactivity to HTML documents   2.2 Conditional statements, loops and logical operators  Conditional statements: if...then...else, switch

# Conditional statements: if...then...else, switch

### Live coding video: switch statement

>! Missing video/trasncript

#### Example from the video

CodePen example from the video
https://codepen.io/w3devcampus/pen/jmoJRZ

### Conditional statements

What are statements?

JavaScript source code is a set of statements. There are a couple of different statement types. We have already seen one of them, the variable statement:
```javascript

var myVar = 'hello ' + 'world';

```
We've also seen the expression statement:
```javascript

3 + 4;

// more often like this
var x = (3 + 4);
var y = (5 + x);
```

A statement closes with a semicolon, but we will see later that missing semicolons are automatically inserted (for readability reasons, we highly recommend systematically adding a semicolon at the end of all statements).

Statements are generally executed sequentially from top to bottom of the script. However, this flow can be modified by statements such as conditional statements and iteration statements.

### The block statement

The block statement is a simple statement which allows us to group a set of statements wrapped in curly braces. 

Block statement:
```javascript
{
    var i = 0;
    var result = false;
    console.log('i = ' + i);
}
```

The block statement is used by other statements such as the if-statement or for-statement. We will see these statements below.

### Conditional statements

All the examples for this section are in this codepen (to run it: click on the "edit on CodePen" label, and once in CodePen, open the devtool console to see the outputs of this program):


```javascript
/*CONDITIONAL STATEMENTS*/
/*if statement*/

var num = 10;
if (num == 10) {
    num = 20;
}

console.log('if statement,\n num>> ' + num);

/*if-else statement*/

var num = 10;
if (num > 10) {
    num = 20;
} else {
    num = 0;
}

console.log('if-else statement,\n num>> ' +num);

/*
Question 1 
how to replace this code by an expression including one operator?
*/
var max; 
var min;
//var min=1;
if (min){
    max = min + 10;
} else {
    max = 10;
}
console.log('question1, \n max>> ' + max);
//Answer is at the end of the document


/*switch statement*/

//this example is equivalent to the previous if-else example
var num = 10;
switch(num){
  case(num>10): num=20;
    break;
  default: num = 0;
}
console.log('switch1,\n num> ' + num);

//switch statement behaviour when break keyword is missing
//comment and uncomment cloudColor variable to see the different results

var gear = '';
//var cloudColor;
//var cloudColor = 'green';
var cloudColor = 'black';
switch(cloudColor) {
    case 'green': gear += 'spacesuit';
        break;
    case 'black': gear += 'boots, ';
    case 'grey': gear += 'umbrella, ';
    case 'white': gear += 'jacket, ';
    default: gear += 'watch';
}

console.log('switch2,\n gear >> ' + gear);

//The above example with break; 

var gear = '';
//var cloudColor;
//var cloudColor = 'green';
var cloudColor = 'black';
switch(cloudColor) {
    case 'green': 
      gear += 'spacesuit';
      break;
    case 'black': 
      gear += 'boots, ';
      break;
    case 'grey': 
      gear += 'umbrella, ';
      break;
    case 'white': 
      gear += 'jacket, ';
      break;
    default: 
      gear += 'watch';
}

console.log('swtich3,\n gear >> ' + gear);



/*
Question 1 
how to replace this code by an expression including one operator?
var max;
var min;
if (min){
    max = min + 10;
} else {
    max = 10;
}
*/

//Answer
var max;
var min;
max = (min)? min+10 : 10;
//console.log('question 1,\n max >> ' + max);



```
#### Conditional statements are used to execute a unit of code 
#### only if a condition is evaluated as true.
The if statement

Syntax:

```javascript

if ( Expression ) Statement else Statement

if ( Expression ) Statement

```
The expression may include:

* logical operators ( `!` `&&` `||` )
* comparison operators ( `==`, `===`, `>`, `>=`, `<`, `<=` )
* any values or expressions which can be converted to boolean

#### Example: if-statement

```javascript
var num = 10;
 
if (num === 10) {
    num = 20;
}
 
// num equals 20

```
#### Example: if-else statement

```javascript
var num = 10;
 
if (num > 10) {
    num = 20;
} else {
    num = 0;
}
 
// num equals 0

```

#### Reminder:

#### The following values will evaluate to false:

* false
* undefined
* null
* 0
* NaN
* "" (empty string)

#### All other values, including all objects, evaluate to true when passed to a conditional statement.

### The if-then-else ternary operator

This ternary operator is a shortcut version of if...then...else.

Let's look at this code example:

```javascript

var max;
var min = 2;
 
if (min < 10) {
    max = min + 10;
} else {
    max = min;
}
```
Explanation: You can replace this "if-then-else" statement with the ternary operator that uses a syntax with "?" and ":"


```javascript
var max;
var min;
max = (min < 10)? min+10 : min;

```
Line 3 can be read as if (min < 10) then max = min+10, else max = min. The "then" part is after the "?" and the "else" part is after the ":" part.

This "short" version is not recommended except for very simple statements that involve a very obvious block of instructions for the "then" and the "else". Usually this syntax is much harder to read for beginners.

#### Curly braces

Should we use them in if-then-else statements? There are examples without curly braces on the Web: what does this mean?

Here are two versions of the same code.

Version 1: no curly braces

```javascript
if (a > 2)
    result = 'a is bigger than 2';
else
    result = 'a is not bigger than 2';

```

Version 2: with curly braces for delimiting the "then" and "else" blocks

```javascript
if (a > 2) {
    result = 'a is bigger than 2';
} else {
    result = 'a is not bigger than 2';
}
```

Version 1 and version 2 are equivalent. Indeed, version 1 is correct: you can omit curly braces if the "then" or "else" blocks 
are made of only one statement (one line of code).

But version 2 is cleaner and more readable, and, in particular, it is much better for maintainability 
(because you can add a statement just by pressing the enter key. And you can add some extra lines of code without 
worrying about adding curly braces because you broke the **1 line statement rule**).

#### So it is strongly recommended that you always use if-statements enclosed in curly braces. 

Of course, one-line if-statements like this :
```javascript
if (true) doSomething();
```
...are really fast to write, but if you want to add a second statement later it will become more time consuming.

#### Conclusion: always use curly braces!

### The switch statement

In order to avoid having a series of ifs and elses, it is possible to use a switch statement. 

The syntax of the switch statement is:

```javascript
switch (expression) {
    case value1:
        statement
        break;       // break can be omitted in that case
                     // the second test case will be executed
                     // most of the time we add a break; at the end
                     // of a "case"
 
    case value2:
        statement
        break;
 
    case value3:
        statement
        break;
 
    default:         // if no case tested true
        statement
        break;
}
```
If the value of an expression equals one of the cases (the equality operator evaluated is `===`), all the statements next to this case block are executed sequentially until the keyword break is reached.

Example 1: a common switch/case/default example.

```javascript
var gear = '';
 
switch (cloudColor) {
    case 'green':
        gear = 'spacesuit';
        break;
 
    case 'black':
        gear = 'boots';
        break;
 
    case 'grey':
        gear = 'umbrella';
        break;
 
    case 'white':
        gear = 'jacket';
        break;
 
    default:
        gear = 'watch';
        break; // useless if in the last case
} // end of the switch statement

```
In this example, if the clouds are grey, then my gear will be just an umbrella. If they are white, I'll wear only a 
jacket, if they are black I'll be nude with just boots (!), and if they are green I'll get a spacesuit. And if the 
cloud color is none of these, then I'll only wear a watch. The presence of the break keyword at the end of the different 
cases make the choices 100% exclusive. Only one case can be executed!

Example 2: a switch without "breaks" at the end of each case.


```javascript
var gear = '';
 
switch (cloudColor) {
    case 'green':
        gear += 'spacesuit';
        break;
 
    case 'black':
        gear += 'boots, ';
 
    case 'grey':
        gear += 'umbrella, ';
 
    case 'white':
        gear += 'jacket, ';
 
    default:
        gear += 'watch';
} // end of the switch statement

```
Explanation: if the clouds are black, then my gear will be 'boots, umbrella, jacket, watch'. If the clouds are green, my gear 
is a spacesuit (because of the lack of the break keyword, other cases will not be tested). If the cloud color is not in the 
listed colors, then my gear is only a watch (default case).

To finish up this section, here is a complete example: three ways to do condition statements (to run it: click on 
the **edit on codepen** label and once in codepen, open the devtool console to see the outputs of this program):


```javascript
/*CONDITIONAL STATEMENTS*/
/*3 examples which are equivalent*/

//try to change foo value 
var foo=1;
//var foo=2; 
//var foo=1000;
//var foo=0;
//var foo='1';

var bar1,bar2,bar3;

//example 1 
if(foo===1){
  bar1='one';
}
else if(foo===2){
  bar1='two';
}
else{
  bar1='something';
}

//example 2
bar2 = (foo===1)?'one':(foo===2)?'two':'something';

//example 3
switch(foo){
  case 1 :
    bar3='one';
    break;
  case 2 : 
    bar3 ='two';
    break;
  default:
    bar3 ='something';
}

//now we print results :

console.log('example1,\n bar1 >> ' + bar1);
console.log('example2,\n bar2 >> ' + bar2);
console.log('example3,\n bar3 >> ' + bar3);

```



```javascript
var x = 2;
var y = 5;

if(y > 0) {
    if ((x > 2) && (y < 10)) {
        if(x === 2) console.log("YES");
    } else {
        if((y === 5) && (x > 10)) console.log("NO");
    }
} else {
    console.log("MAYBE");
}
console.log(" THE END");

```

> THE END

---

#### Module 2: Adding interactivity to HTML documents   2.2 Conditional statements, loops and logical operators   Loop statements

# Loop statements

### Live coding video: loop statements

>! missing video/transcript

Example from the video

Example on CodePen
https://codepen.io/w3devcampus/pen/qmGeYZ?editors=0012

### Loops

A loop is used to run the same block of code several times while a condition is satisfied.

If you have trouble with loops, the online tool [slowmoJS](http://toolness.github.io/slowmo-js/) can be really useful: you just have to copy and paste an example into it to run it step by step and see how your program executes loops.

### The while statement

With a while statement, a block of code is executed repeatedly while the specified condition is satisfied (evaluates to true).

Syntax:
```javascript
while ( condition ) statement

```
The condition is an expression, and the statement can be a block statement.

Typical example of a while statement:

```javascript
var i = 1, j = 1;
 
while ( i < 4 ) {
    j += i;
    i += 1; 
}

```
### The do-while statement

The do-while statement is very similar to the while statement, but its syntax is different:

```javascript
do statement while ( condition )

```

Typical example:

```javascript
var i = 0;
 
do {
    console.log('i = ' + i);
    i++;
} while(i < 20);
 
console.log('Value of i after the do-while statement: ' + i);

```

The **do-while statement executes the content of the loop once before checking the condition of the while**, 
whereas a **while statement will check the condition first before executing the content**.

A do-while is used for a block of code that must be executed at least once.These situations tend to be relatively rare, thus the simple while-statement is more commonly used. 

If you want to see the difference, look at the `do-while` statement with slowmoJS and the `while` statement slowmoJS. 

### The for statement

This statement adds some things to the while and do-while statements: an initialization expression and an incrementing expression.

Its syntax is:

```javascript
for (initialization; condition; incrementation) statement

```
The three expressions within the parentheses are optional. If the condition is omitted, it is replaced by true (infinite loop).

Typical example (counting from 0 to 10):

```javascript
for (var i = 0; i <= 10; i++) {
   console.log('i = ' + i);
}

```
We can have more than one instruction in the **initialization part**, and more than one instruction in the **incrementation part**. 
Here is another example:

```javascript
for (var i = 1, j = 1; i <= 10; i++, j+=2) {
    console.log('i = ' + i + ' j = ' + j);
}

```
In this example, two variables are defined and assigned within the initialization expression. Before each execution of the block statement, 
the condition is checked; here we need `i <=10`. After each execution of the block statement, the incrementation expression is executed 
to increment the variables i by 1 and j by 2.

Open the devtool console of your browser and copy and paste the above code, or look at the slowmoJS execution.

### The for-in statement

The for-in statement is used to iterate through an object (or through an array, which is also an object). 

Its syntax is:

```javascript
for ( variable in expression ) statement

```


```javascript
var michel = {              // michel is an object
    familyName:'Buffa',     // familyName, givenName, age
                            // are its properties
    givenName: 'Michel',
    age: 51
}
 
for(var property in michel) {   // the for-in will
                                // enumerate properties
    console.log(property);      // will print "familyName",
                                // "givenName",
                                // "age"
    console.log(michel[property]);  // michel['givenName'] same 
                                    // as michel.givenName
}

```
Before each execution of the block statement, the variable named `property` is assigned with the name of one of the properties (the keys) 
of the object.

We will see further examples of this statement in module 4, which is devoted to the study of JavaScript objects.

### [ADVANCED] Other statements

The continue statement

The continue statement is used to stop the execution of a block and start the next iteration of the loop. The difference from the "break" statement is that the loop continues.

Syntax:

```javascript
continue [label]

```
The label is optional.

Typical example:Typical example:

```javascript
for(var i = 1, k = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
 
    k += 2*i;
    console.log('k += ' + (2*i));
}
console.log('Final k value:' + k)

```

Copy and paste this example in your devtool console, but first, try to guess what the value of k will be!

Hint: lines 2-4 mean that line 6 will never be executed for i = 3. That means that i*2 will only be added to k for i = 1, 2 and 4...

### The break statement

The break statement is used to stop an iteration, a switch or a labelled statement.

Syntax:
```javascript
break [label]

```
break [label]

```javascript
var tab = ['michel', 'john', 'donald', 'paul']; // johh at index = 1
 
function isNameInTheArray(name, theArray) {
    console.log("Number of elements in the array : " + theArray.length);
    for(var i=0; i < theArray.length; i++) {
        console.log('comparing with element in the array at pos ' + i);
 
        if(theArray[i] === name) {
           console.log('the name ' + name +
                       ' is in the array at pos: ' + i);
           break;
        } else {
           console.log(name + ' is not at pos ' + i);
        }
    }
}
 
// Execute the function
isNameInTheArray('john', tab);

```

Copy and paste in the devtool console. You'll see that the function that compares each element in the array passed as the second parameter with the name 'john', will stop looping after 'john' has been found at index = 1.


---

#### Module 2: Adding interactivity to HTML documents   2.2 Conditional statements, loops and logical operators   Discussion and projects

# Discussion and projects

### Discussion and projects

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and optional projects.

#### Suggested topic of discussion:

Did you know about the === and !== operators we recommend you to use?

#### Optional projects:

If not allergic to High School math: try to write a piece of code that solves second degree equations. You pass the a, b, c parameters of: ax2 + bx + c, and the solve function will compute delta = b2 - 4a*c. Test the sign of delta, and if it's equal to zero, then display (in the console, or better, in the page) the roots of the equation.
Try to write a small program that asks you to guess a number. It will choose randomly a number, and will ask you to enter a value in an input field. Then it will display "too small" or "too big", until you find the number.

Hint: use the Math.random and Math.round methods, such as in let randomNumber = Math.round(Math.random() * 10); to get a random value between 0 and 10.

For working with input fields, look at section 1.4 from the first module, the math function plotter example used input fields. Or look at the section about DOM in this module.


---

#### Module 2: Adding interactivity to HTML documents   2.3 Functions (part2): callbacks   Functions and callbacks

# Functions and callbacks

#### Two ways to declare a function


#### 1 - Standard function declaration

We've already seen that functions can be **declared** using this syntax:
```javascript
function functionName(parameters) {
// code to be executed
}
```

A function declared this way can be **called** like this:

```javascript
functionName(parameters);
```

Notice that we do not add a semicolon at the end of a function declaration. **Semicolons are used to separate executable JavaScript statements**, 
and a function declaration is not an executable statement.

Here is an example:

```javascript
function sum(a, b) {
  // this function returns a result
  return (a + b);
}

function displayInPage(message, value) {
  // this function does not return anything
  document.body.innerHTML += message + value + "<br>";
}

var result = sum(3, 4);
displayInPage("Result: ", result);

// we could have written this
displayInPage("Result: ", sum(10, 15));
```

In the above example, the sum function returns a value, and the displayInPage function does not return anything.

#### 2 - Use a function expression

A JavaScript function can also be defined using an expression that can be stored in a variable. Then, the variable can be used as a function:

Here is a typical example:
```javascript
var sum = function(a, b) {
  return (a + b);
};

var displayInPage = function(message, value) {
  // this function does not return anything
  document.body.innerHTML += message + value + "<br>";
};

var result = sum(3, 4);
displayInPage("Result: ", result);

// we could have written this
displayInPage("Result: ", sum(10, 15));
```

Notice how the `sum` and `displayInPage` functions have been declared. **We used a variable to store the function expression**, then we 
can call the functions using the variable name. And we **added a semicolon at the end, since we executed a JavaScript instruction, giving 
a value to a variable**.

The **function expression* is an ***anonymous function***, a function without a name, that represents a value that can be assigned to a 
variable. Then, the variable can be used to execute the function.

We say that functions are **first class objects** which can be manipulated like any other object/value in JavaScript.

This means that functions can also be used as parameters to other functions. In this case they are called `callbacks`.

### Callbacks

ndeed, as functions are first-class objects, we can pass a function as an argument, as a parameter to another function and later execute that passed-in function or even return it to be executed later. When we do this, we talk about callback functions in JavaScript: a function passed to another function, and executed inside the function we called.

All the examples of event listeners that you've seen used callback functions. Here is another one that registers mouse click listeners on the window object (the window objects represent the whole HTML document):

```javascipt
// Add a click event listener on the whole document
// the processClick function is a callback:
// a function called by the browser when a click event
// is detected
window.addEventListener('click', processClick);

function processClick(event) {
  document.body.innerHTML += "Button clicked<br>";
}

// We could have written this, with the body of the callback as an argument of the addEventListener function
window.addEventListener('click', function(evt) {
  document.body.innerHTML += "Button clicked version 2<br>";
});
```

In this case, the `processClick` function is passed as a parameter to the `addEventListener` method/function.

Callback functions are derived from a programming paradigm known as **functional programming**. They are very, very common in JavaScript. We'll use them a lot in the next section of the course, called **Handling events**.

---

### Module 2: Adding interactivity to HTML documents   2.4 Handling events   Introduction

# Handling events  

### Introduction

Adding interactivity to a Web application can only be achieved with CSS, using the :hover pseudo CSS class, for instance. For example:


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Mouse over</title>
  <meta charset="utf-8"/>
</head>
<body> 
   <button>Put the mouse cursor over me</button>
</body>
</html>  
```

```css
button:hover {
  color:red;
  border:2px solid;
}
```
However, firing a specific action when the button is clicked, knowing which mouse button has been used, computing the (x, y) mouse 
pointer position in the button system coordinate, or executing more complex tasks can only be done through JavaScript.

With JavaScript, a button click, a move of the mouse, a resized window, and many other interactions create what are called `events`.  
The timing and order of events cannot be predicted in advance. We say that **event processing* is asynchronous. Web browsers detect 
events as they occur, and may pass them to JavaScript code. They do this by allowing you to register functions as event listeners, 
also called handlers or callbacks for specific events.

Each time an event occurs, the browser puts it in a **queue of events*.

Then the browser looks at a list of "Event Listeners" and calls the ones that correspond to the type of event *they listen to*.


---

#### Module 2: Adding interactivity to HTML documents   2.4 Handling events   Adding and removing event listeners

# Adding and removing event listeners

### Live coding video: adding an event listener to a document

>! missing video/transcript

Online example used in the above video:
https://codepen.io/w3devcampus/pen/zzOVGB?editors=1000


### Live coding video: adding an event listener to a specific HTML element

>! missing video/transcript

Online example used in the above video
https://codepen.io/w3devcampus/pen/pwzXqb?editors=1000

#### Adding and removing event listeners

Event listeners: a typical example

Here is one possible syntax for registering an event listener that listens to `click` events on any part of the window 
(clicks anywhere on a web document will be processed by this event handler):

```javascipt
<script>
    addEventListener('click', function(evt) {
        document.body.innerHTML += 'Button clicked!';
    });
</script>
```
The addEventListener function is one possible syntax for registering a function to be called when a given type of event occurs.


```javascipt
addEventListener(type_of_elem, callback_function)
```

In the example below, the type of event is a 'click', and the callback function is the part in bold:

```javascipt
function(evt) {
   console.log("Button clicked!");
}
```

When this function is small (a few lines of code), it's common practice to put its body as the second parameter of the addEventListener function.

In other words, this:


```javascipt
<script>
addEventListener('click', function(evt) {
    document.body.innerHTML += 'Button clicked!';
});
</script>
```
... is the same as this (the function called when a click occurs has its body "outside" of the addEventListener parameters, and we use its name as the second parameter):

```javascipt
<script>
addEventListener('click', processClick);
function processClick(evt) {
    console.log("Button clicked!");
}
</script>
```
### Adding an event listener to specific HTML elements

Instead of listening to event on the whole document (using `addEventListener` is the same as using `window.addEventListener`), we can 
listen to specific DOM elements.

For example, here is how we can listen to clicks on a specific button (whereas clicks on the rest of the document will be ignored).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Second example of an event listener</title>
    <meta charset="utf-8">
</head>
<body>
  <button id="myButton">Click me!</button>
  <p></p>
  <script>
    var b = document.querySelector("#myButton");
    b.addEventListener('click', function(evt) {
      alert("Button clicked");
    });
  </script> 
</body>
</html>
```

In this example, instead of using the `addEventListener` method directly, we used it on a DOM object (the button):

Get a reference of the HTML element that can fire the events you want to detect. This is done using the DOM API that we'll cover 
in detail later this week. In this example we used one of the most common/useful methods: `var b = document.querySelector("#myButton");`

Call the `addEventListener` method on this object. In the example: `b.addEventListener('click', callback)`
Every DOM object has an `addEventListener` method. Once you get a reference of  any HMTL element from JavaScript, you can start 
listening to events on it.

An alternative method for adding an event listener to an HTML element: use an `on` attribute (ex: `onclick = "...."`)

Instead of using `b.addEventListener('click', callback)`, it's possible to use an `onclick='doSomething();'` attribute directly 
in the HTML tag of the element:

In this example, instead of using the addEventListener method directly, we used it on a DOM object (the button):

Get a reference of the HTML element that can fire the events you want to detect. This is done using the DOM API that we'll cover in detail later this week. In this example we used one of the most common/useful methods: var b = document.querySelector("#myButton");
Call the addEventListener method on this object. In the example: b.addEventListener('click', callback)
Every DOM object has an addEventListener method. Once you get a reference of  any HMTL element from JavaScript, you can start listening to events on it.

An alternative method for adding an event listener to an HTML element: use an `on` attribute (ex: `onclick = "...."`)

Instead of using `b.addEventListener('click', callback)`, it's possible to use an `onclick='doSomething();'` attribute directly 
in the HTML tag of the element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Third example of an event listener</title>
    <meta charset="utf-8">
      <script>
         function processClick(evt) {
          alert("Button clicked");
        };
  </script> 
</head>
<body>
  <button id="myButton" onclick="processClick(event);">Click me!</button>
</body>
</html>
```
This syntax:


```javascipt
<button id="myButton" onclick="processClick(event);">Click me!</button>
```
... is ok when you only need a single event listener to click events for this button, as there can be **only one `onclick` attribute per element**.

Using the `b.addEventListener('click', callback)` syntax,  you can register more than one event listener. You'll need rarely to do this, so in my 
opinion it's fine to choose whichever syntax you like.

Remember that for big projects, it's always better to separate the HTML, CSS and JavaScript code. In this case, I'd recommend that 
you put all your event listener definitions in a separate JavaScript file, and use the addEventListener syntax in preference to the `on` 
attributes syntax.

### Removing event listeners

When we click on the button, we execute the `processClick(evt)` callback function, and inside we remove the listener we previously 
registered. Consequence: if we click on the button again, nothing happens as there is no longer a click event listener attached to it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Removing an event listener</title>
    <meta charset="utf-8">
</head>
<body>
  <button id="myButton">Click me, this will work only once!</button>
  <p></p>
  <script>
    var b = document.querySelector("#myButton");
    b.addEventListener('click', processClick);
    
    function processClick(evt) {
     alert("Button clicked, event listener removed, try to click on the button again: nothing will happen anymore!"); 
      b.removeEventListener('click', processClick);
    }
  </script> 
</body>
</html>
```
Note that to remove an event listener, you should have added it with its named function, so that we can pass it to both `addEventListener` 
and `removeEventListener`.


#### Knowledge check 2.4.1 (not graded)

What precaution should you take when adding an event listener to a given HTML element?

I need to be sure that the element is in the DOM before selecting it using the DOM API or the selector API correcto

Explanation
Indeed, we need to be sure that the element is in the DOM before quering it. You can do that by locating the JavaScript 
code after the HTML tag that corresponds to the element, or do this in a JavaScript function that is called only when the 
DOM is ready, for example using `<body onload="init()">`, and put the code in the init function.


---

#### Module 2: Adding interactivity to HTML documents   2.4 Handling events   The event object

# The event object

### The event object is the only parameter passed to event listeners

Typical example:

```javascript
function processClick(evt) {
    alert("Button clicked!");
}
```
Each event listener has a single parameter that is  a "DOM event object". It has various properties and methods that can be very useful.

For example, with a `keyup`, `keydown` or `keypress` event, the event object contains the code of the key that has been 
pressed/released, with a `mousemove` listener we can get the relative position of the mouse in the DOM element that has generated 
the event, etc.

The event object contains some important properties and methods that are common to all types of events:

* `evt.type`: the name of the event
* `evt.target`: for example, is the HTML element that has fired the event. In our previous examples with the click listeners on a 
button, `evt.target` in the event listener is the button itself.
* `evt.stopPropagation()`: will not propagate the event to all other elements that listen to it. If several elements are registered 
for a click event - for example, you have a click listener on a button and on the window (the whole page). If you click on the button, 
and if in its click event listener you call `evt.stopPropagation();` then the click event listener on the window object will never be 
called.
* `evt.preventDefault()`: the default browser behavior will not be executed. For example, in a `contextmenu` event listener attached 
to an object, if you call `evt.preventDefault()`, instead of having the right click default context menu of your browser displayed, 
you'll be able to display your own context menu, like in this [example](http://jsbin.com/kuyorac/edit?html,css,js,console,output).

It also contains properties that are associated with the type of the event, for example:

* `evt.button`: the mouse button that has been used in the case of a mouse event listener
* `evt.keyCode`: the code of the key that has been used
* `evt.pageX`: coordinate of the mouse relative to the page
* etc.

In the subsequent sections of this course we will look at the most common types of events in detail.

### Reference table

The most useful common properties are:

| Property  | Action performed    							|
|-----------|-----------------------------------------------|
|**type**	|Returns the name of the event.					|
|**target**	|Returns the element that triggered the event.	|




The most useful common methods are:

| Property              | Action performed    							|
|-----------------------|-----------------------------------------------|
|**preventDefault()**	|Cancels the event if it is "cancelable", meaning that the default action that belongs to the event will not occur. It is useful for cancelling the default browser behavior. For example: if you want to create a context menu that pops up with a right click, you must prevent the default behavior of the browser that will pop up its default context menu.					|
|**stopPropagation()**	|Prevents further propagation of an event during event flow.	|

---

#### Module 2: Adding interactivity to HTML documents   2.4 Handling events   Page lifecycle events

# Page lifecycle events

### Live coding video: page 'load' event and the event object

>! misssing video/transcript

Online example used in the above video
https://codepen.io/w3devcampus/pen/XgrveY?editors=0001
	
### Page lifecycle events

These events detect when the page is loaded and when the DOM is ready.

Events related to the page lifecycle

There are many other events related to the page life cycle. The most useful ones for an introduction course are shown below:

| Event     | occurs when ...    							|
|-----------|-----------------------------------------------|
|**load**	|This event occurs when an object has loaded (including all its resources: images, etc.). This event is very useful when you want to run JS code and be sure that the DOM is ready (in other words, be sure that a `document.getElementById(...)` or `document.querySelector(...)` will not raise an error because the document has not been loaded and elements you are looking for are not ready).				|
|**target**	|The event occurs when the document view is resized. Usually, we get the new size of the window inside the event listener using `var w = window.innerWidth;` and `var h = window.innerHeight;`	|
|**scroll**	|The event occurs when an element's scrollbar is being scrolled. Usually in the scroll event listener we use things such as: `var max = document.body.scrollHeight - innerHeight;` `var percent = (pageYOffset / max);` ...to know the percentage of the scroll in the page.	|

### Page event properties

There are no particular properties that need to be mentioned here. Usually, the load event listener corresponds to a JavaScript function that 
can be seen as **the main** function of your Web application. It is a best practice to start everything after the page has been completely loaded. 
In the resize listener, you get the new size of the window, or the new size of some HTML elements in the page (as they might have been resized 
too when the window was resized), and then you do something (redraw a graphic in an HTML canvas that takes into account the new canvas size, 
for example).

#### Example 1: wait until the page is loaded (when the DOM is ready) before doing something

This first variant that uses `<body onload="init();">`
	
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example1 of the 'load' event</title>
</head>
<body onload='init();'>
  <p>This page uses <code>&lt;body onload='init();'&gt;</code> in the JS code  to execute the init function ONLY WHEN THE PAGE HAS BEEN LOADED!</p>
  
  <p>This is important as very often we cannot do important things before the DOM is ready (all HTML elements have been created and can be manipulated from JavaScript).</p>
  
  <p>PAGE STATUS: <span id="pageStatus">NOT LOADED YET</span></p>
</body>
</html>

```


```css
#pageStatus {
  border:1px solid red;
  padding: 2px;
  color:red;
}
```


```javascript
function init() {
  var status = document.querySelector('#pageStatus');
  status.innerHTML = 'LOADED!';
  
  // start working!
  // ....
}
```

This second variant: using `window.onload = init;` in the JavaScript code...

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example1 of the 'load' event</title>
</head>
<body>
  <p>This page uses <code>window.onload = init;</code> in the JS code  to execute the init function ONLY WHEN THE PAGE HAS BEEN LOADED!</p>
  
  <p>This is important as very often we cannot do important things before the DOM is ready (all HTML elements have been created and can be manipulated from JavaScript).</p>
  
  <p>PAGE STATUS: <span id="pageStatus">NOT LOADED YET</span></p>
</body>
</html>
```


```css
#pageStatus {
  border:1px solid red;
  padding: 2px;
  color:red;
}
```


```javascript
window.onload = init;

function init() {
  var status = document.querySelector('#pageStatus');
  status.innerHTML = 'LOADED!';
  
  // start working!
  // ....
}
```

#### Example 2: detect a resize of the window

In this example, we're listening to page load and page resize events. When the window is loaded for the first time, or resized, we call the `resize()` 
callback function. The `window.innerWidth` and `window.innerHeight` properties are used to display the updated size of the window. We also use `screen.width` 
and `screen.height` to display the screen size.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example1 of the 'resize' event</title>
</head>
<body>
  <p>This page uses <code>window.onresize = resize;</code> in the JS code  to execute the resize function. Try to change the size of your window now!</p>
 
  <p>Curent page size: <span id="pageSize"></span></p>
  <p>Screen size: <span id="screenSize"></span></p>
</body>
</html>
```


```css
#pageSize, #screenSize {
  border:1px solid red;
  padding: 2px;
  color:red;
}
```


```javascript
window.onload = resize;
window.onresize = resize;

function resize(evt) {
  console.log("resize");
  var pageSizeSpan = document.querySelector('#pageSize');
  pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
  
 // screen size
var screenSizeSpan = document.querySelector('#screenSize');
  screenSizeSpan.innerHTML = "Width: " + screen.width + " Height: " + screen.height;
  
}
```

Example 3: do something as the page is being scrolled up or down
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example of the 'scroll' event</title>
</head>
  <body>
<div class="progress">
  <div>Percentage</div>
    </div>
    <p id="text">Scroll me and the progress bar on the right will show 
  the percentage of scroll. Look also at the CSS
  code (body is 2000px height, for example)...</p>
  </body>
</html>
```


```css
.progress {
  border: 1px solid blue;
  width: 100px;
  position: fixed;
  top: 10px; right: 10px;
}

.progress > div {
  height: 12px;
  background: lightBlue;
  width: 0%;
  font-size:8px;
}

#text {
  margin-top:50px;
}
body {
  height: 2000px;
}
```


```javascript
window.onload = init;

var progressBar;

function init() {
  progressBar = document.querySelector(".progress div");

  window.addEventListener("scroll", function() {
      var max = document.body.scrollHeight - window.innerHeight;
      var percent = (window.pageYOffset / max) * 100;
      progressBar.style.width = percent + "%";
  });
}
```

#### Knowledge check 2.4.2 (not graded)


```javascript
function init(evt) {
   console.log("Page loaded! DOM Ready!");
   // access the DOM using the DOM API or the selector API
   var elem = document.querySelector(...);
   elem.innerHTML = ....;
```

Check the correct ways to call the function init only when the page has loaded and the DOM is ready:
<body onload="init();"/> correcto
In a JS code, add window.onload = init; correcto
in a JS code, add window.addEventListener('load', init); correcto

#### Explanation
All answers are correct. All of these syntaxes have the same effect: call init once the page is loaded.


---

#### Module 2: Adding interactivity to HTML documents   2.4 Handling events   Key events: legacy API

# Key events: legacy API

### Dealing with key events

#### Introduction

This has been a bit of a nightmare for years, as different browsers have had different ways of handling key events and key codes (read [this](http://unixpapa.com/js/key.html) if you are fond 
of JavaScript archeology). Fortunately it's much better today, and we are able to rely on methods that should work on any browser.

When you listen to keyboard related events (`keydown`, `keyup` or `keypressed`), the event parameter passed to the listener function will contain 
the code of the key that fired the event. Then it is possible to test which key has been pressed or released, like this:



```javascript
window.addEventListener('keydown', function(event) {
   if (event.keyCode === 37) {
     //left arrow was pressed
   }
});
```

At line 2, the value `37` is the key code that corresponds to the left arrow. It might be difficult to know which codes represent which real keyboard keys, so here are some handy pointers:

Try key codes with this interactive example: http://www.asquare.net/javascript/tests/KeyCode.html
And find a list of keyCodes (taken from: http://css-tricks.com/snippets/javascript/javascript-keycodes/) below:

![JSKeyCodes](https://courses.edx.org/asset-v1:W3Cx+HTML5.1x+4T2015+type@asset+block@JSKeyCodes.jpg)


### The different key events

Event types related to keyboard

| key events    | 					   																|
|---------------|-----------------------------------------------------------------------------------|
|**keydown**	|The event occurs when the user is pressing a key.									|
|**keyup**		|The event occurs when the user releases a key.										|
|**keypress**	|(now deprecated)	The event occurs when the user presses a key (up and release).	|

	
### keyboardEvent properties

These are legacy properties, still used by many JavaScript code around the world. However, we do not recommend that you use them if you are targeting 
modern browsers. `keyCode` has a more powerful/easy to use replacement called `code` (not yet supported by all browsers), that comes with a new `key` 
property (see the following pages of the course).
 
| keyboardEvent | 					   																|
|---------------|-----------------------------------------------------------------------------------|
|**keyCode**	|Returns the Unicode character code of the key that triggered the onkeypress ,onkeydown or onkeyup event.|
|**shiftKey**	|Returns whether the "shift" key was pressed when the key event was triggered.	|
|**ctrlKey**	|Returns whether the "ctrl" key was pressed when the key event was triggered.	|
|**altKey**		|Returns whether the "alt" key was pressed when the key event was triggered.	|

	
#### Example 1: use keyup and keydown on the window object
https://codepen.io/w3devcampus/pen/wJZJZp
 	
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example of the 'keyup' and 'keydown' events on the window object</title>
</head>
  <body>
    <p>Please type some keys and see what happens</p>
    <div id="keys"></div>
  </body>
</html>
```
	

```javascript
window.onkeyup = processKeyUp;
window.onkeydown = processKeyDown;

/* or we could have written:
   window.addEventListener('keyup', processKeyUp);
   window.addEventListener('keydown', processKeyDown);
*/

function processKeyUp(evt) {
  var keys = document.querySelector('#keys');
  keys.innerHTML += "keydown: " + evt.key + " code: " + evt.keyCode + "<br>";
}
```

#### Example 2: see  keypress on the window object

See the Pen keyup and keydown events on window by W3Cx (@w3devcampus) on CodePen.
https://codepen.io/w3devcampus/pen/WpWjey
https://codepen.io/w3devcampus/pen/BWERyY

#### Example 3: detect a combination of keys + modifier keys (shift, ctrl, alt)

https://codepen.io/w3devcampus/pen/BWERyY

Try to type shift-a for example, ctrl-shift-b or alt-f...

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Example of the 'keypress' event on the window object, awith shift, meta and alt</title>
</head>
  <body>
    <p>Please type some keys and see what happens. Try typing key modifiers at the same time: shift, alt, control</p>
    <div id="keys"></div>
  </body>
</html>
```

```javascript
window.onkeydown = processKeyDown;

/* or we could have written:
   window.addEventListener('keypress', processKeyPress);
*/

function processKeyDown(evt) {
  var keys = document.querySelector('#keys');
  
   keys.innerHTML += "keypress: " + evt.key + 
                   " code: " + evt.keyCode + " Modifiers : ";

  var modifiers = "";
  
  if(event.shiftKey)
    modifiers += "SHIFT ";

  if(event.altKey)
    modifiers += "ALT ";

  if(event.ctrlKey)
    modifiers += "CTRL ";

  if(modifiers === "")
    modifiers = "NONE";
  
  keys.innerHTML += modifiers + "<br>";
}

```


---

#### Module 2: Adding interactivity to HTML documents   2.4 Handling events   Dealing with different keyboard layouts

# Dealing with different keyboard layouts

### Internationalize your keyboard controls


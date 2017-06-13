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
can call the functions using the variable name. And we added a semicolon at the end, since we executed a JavaScript instruction, giving 
a value to a variable.

The **function expression* is an ***anonymous function***, a function without a name, that represents a value that can be assigned to a 
variable. Then, the variable can be used to execute the function.

We say that functions are **first class objects** which can be manipulated like any other object/value in JavaScript.

This means that functions can also be used as parameters to other functions. In this case they are called `callbacks`.

### Callbacks














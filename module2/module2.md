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



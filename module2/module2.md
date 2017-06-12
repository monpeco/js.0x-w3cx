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



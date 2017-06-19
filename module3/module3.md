#### Module 3: Playing with some HTML5 APIs   3.1 Introduction - Module 3   Module 3 outline

# Module 3 outline


### What you will learn in Module 3

Note that this module will be more "project oriented", i.e., we will introduce less "fundamental concepts".

JavaScript arrays and strings: in this module, we continue to study fundamental JavaScript concepts, and this time we look a bit deeper into JavaScript arrays and strings.
New HTML5 APIs - geolocation and video/audio APIs: in module 2, we looked at some HTML5 APIs already: the selector and the DOM APIs, respectively for selecting and manipulating HTML elements dynamically. We also had a taste of the HTML5 canvas API for drawing and animating. This time, we will look at the audio and video elements APIs, and the geolocation API.
We will also add background Music and sound effects to the small game we started writing during module 2.

---

#### Module 3: Playing with some HTML5 APIs   3.2 Arrays (part 2): iterators   Arrays

# Arrays

### Live coding video: arrays (indexed, length property, sort, splice, push and pop methods)

>! Missing video/transcript

Source code of the example in the video:
https://codepen.io/w3devcampus/pen/owgeyJ

JavaScript arrays

In JavaScript, arrays represent a collection of "things", which may be strings, integer values, decimal values, boolean values, or any sort of JavaScript object.


```javascript
> var myarr = ['red', 'blue', 'yellow', 'purple'];
undefined
 
> myarr;
["red", "blue", "yellow", "purple"]
 
> myarr[0];
"red"
 
> myarr[3];
"purple"
"purple"
```
Below is an another example with an array containing three integers. The first element is at index 0, and the last at the index equal to the number of elements-1.

```javascript
> var a = [];
> typeof a;
"object"
> var a = [1,2,3];
> a
[1, 2, 3]
> a[0]
1
> a[1]
2
```
#### JavaScript arrays are objects and have some useful properties and methods

Note that in JavaScript, arrays are "objects" (lines 2-3 in the above example), which means that they have properties and methods. 
You can access/call them using the `.` operator. Here are the most common properties and methods.

```javascript
> var a = [1, 3, 2, 5, 7];
undefined
 
> a.length; // number of elements
5
 
> a.sort(); // sorts element in a
[1, 2, 3, 5, 7]
 
> a.splice(2, 1); // remove 1 element starting from index=2 (3rd element)
[3]
 
> a; // the '3' has been removed from the array
[1, 2, 5, 7]
```
By default, the sort() method sorts elements alphabetically if they are strings, or from lowest to highest if they are numeric. If you want to sort objects like {firstName:'michel', lastName:'Buffa', age:51}, you will need to use another method passed as an argument to the sort method, for example to indicate the property you want to use for sorting (i.e., sort by age);

Example with an array of persons (each person is an object):

```javascript
var persons = [
    {givenName: 'Michel', familyName: 'Buffa', age:51},
    {givenName: 'Pig', familyName: 'Bodine', age:20},
    {givenName: 'Pirate', familyName: 'Prentice', age:32}
];
 
function compareByAge(a,b) { // comparison function
  if (a.age < b.age)         // compare by age
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}
 
persons.sort(compareByAge);
```
Explanations:

Line 17 calls persons.sort(function_that_compares_two_elements), passing as an unique parameter a function that compares two people's ages. This function must return -1 if the first person is younger than the second person. It must return +1 if the second person is older than the first, and 0 if they are the same age.
We will see more methods in the other subsections of this page.

Elements can be of different types in a same array:

```javascript
> var a = [1,2,3];
 
> a[2] = 'three';
"three"
 
> a
[1, 2, "three"]
```
Adding elements to an array

We can add new elements using a new index, if you want to add a new element at the end, use the `push` method!

```javascript
> var a = [1,2,"three"];
undefined
 
> a[3] = 'four';
"four"
 
> a;
[1, 2, "three", "four"]
 
> a[a.length] = "five"; // adding at the end
[1, 2, "three", "four", "five"]
 
> a.push("six"); // but usually we prefer using the push method for adding
[1, 2, 3, "four", "five", "six"]  // a new element at the end
```
When using indexes, be careful not to leave "holes" in the array:

```javascript
> a[7] = 'height';
"height"
 
> a;
[1, 2, 3, "four", "five", "six", undefined × 1, "height"]
```
This array is valid, but having a [6] equal to "undefined" is often prone to errors. Be careful when using absolute indexes for adding elements. We recommend using the push method instead.

Removing elements from an array

The recommended method is to use the splice method:

```javascript
array.splice(start)
array.splice(start, deleteCount)
```
* `start`: index at which to start changing the array (with origin 0). 
* `deleteCount` (Optional): an integer indicating the number of old array elements to remove.  If deleteCount is greater than the number of elements left in the array starting at start, then all of the elements through the end of the array will be deleted. If deleteCount is omitted, deleteCount will be equal to (array.length - start), i.e., all of the elements beginning with start index on through the end of the array will be deleted.
* **Return value**: an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

```javascript
> a;
[1, 2, 3, "four", "five", "six", undefined × 1, "height"]
 
> a.splice(6, 1); // remove element at the sixth index, the undefined one!
[undefined × 1]
 
> a;
[1, 2, 3, "four", "five", "six", "height"] // it's no more here :-)
 
> a.splice(0, 3); // remove the three first elements
[1, 2, 3]
 
> a;
["four", "five", "six", "height"]
 
> a.splice(a.length-1); // remove the last element
"height"
 
> a;
["four", "five", "six"]
```

#### Recommended method for removing the last element: the pop method!
```javascript
> a
["four", "five", "six"]
 
> a.pop(); // remember push/pop = add / remove element at last position!
"six"
 
> a
["four", "five"]
```
Trap: the delete method is not good for removing an element from an array!
```javascript
> delete a[1];
true
 
> a;
["four", undefined × 1] // the element became undefined,
                        // but it's still in the array!
```
### Arrays of arrays

It is possible for an array to be an element within an array! This example shows an array made of two arrays of three elements each. It's a 2x3 matrix with two rows and three columns!

```javascript
> var a = [[1,2,3], [4,5,6]]; // a is a matrix: 2 rows, 3 columns.
undefined
 
> a[0]; // first row
[1, 2, 3]
 
> a[1]; // second row
[4, 5, 6]
 
> a[0][0]; // top left element
1
 
> a[0][1]; // second element, first line
2
 
> a[0][2]; // third element, first line
3
 
> a[1][0]; // first element, second line
4
 
> a[1][1]; // second element, second line
5
 
> a[1][2]; // third element, second line
6
```
It is possible to have different arrays with different lengths and different types of element in an array:

```javascript
> var a = [];
undefined
 
> a[0] = [1, 2, 3, 4, 5];
[1, 2, 3, 4, 5]
 
> a[1] = ['michel', 'henri', 'francois']
["michel", "henri", "francois"]
 
> a
[Array(5), Array(3)]
```
---

#### Module 3: Playing with some HTML5 APIs   3.2 Arrays (part 2): iterators   Strings are arrays of characters

# Strings are arrays of characters
### Strings are arrays of characters

Yes, they do look like arrays!

JavaScript strings are "like" arrays of characters, but they have some limitations, and some dedicated properties and methods:

```javascript
> var s = 'Michel';
undefined
 
> s[0];
"M"
 
> s[1];
"i"
 
> s.length;
6
```

Indeed, the string s behaves like an array, it has the length property like an array, and we can access individual characters using 
indexes that go from 0 to length-1, like arrays...

#### But they are not quite the same as arrays!

You cannot add elements to strings using a non-existent index, you cannot use the push/pop methods for adding/removing  characters at 
the end of the string:

```javascript
s.push(' Buffa');
 
ERROR: VM5748:1 Uncaught TypeError: s.push is not a function
at <anonymous>:1:3
(anonymous) @ VM5748:1
 
s[s.length] = 'B'; // add 'B' at the end?
"B"
 
s[s.length] = 'u'; // add 'u' at the end?
"u"
 
s[s.length] = 'f'; // add 'f' at the end?
"f"
 
s; // s remained UNCHANGED!
"Michel"
```
* You cannot use `push/pop` as this raises an error "is not a function" (lines 1-5)
* You can try to put elements out of the range of the string: nothing will happen and the string will remain unchanged (lines 7-17)

You can't even modify a character using an index. Strings are "read only" when using brackets to access individual characters!

```javascript
> var s = 'Michel';
undefined
 
> s[0] = "R"; // trying to change the 'M' into an 'R'
"R"
 
s; // no luck!
"Michel"
```
You also can't remove characters using the array's splice method:
```javascript
> s.splice(0, 3);
 
ERROR: VM716:1 Uncaught TypeError: s.splice is not a function
at <anonymous>:1:3
```
#### So: how do we add characters to a string, how can we modify a string? How can we delete elements in a string ?

Strings come with a whole set of methods, which we'll come to in module 4 when we talk about JavaScript objects (in the section titled 
"JavaScript predefined objects"). Without going into detail just yet, here are some examples:

#### Adding a string to the beginning of a string using the + operator:

```javascript
> var s = 'Michel';
undefined
 
> s = "Hello " + s;
"Hello Michel"
 
> s = 'O' + s; // equivalent to push('0') with arrays
"OHello Michel"
```

#### Adding a string to the end of another one with the + operator:

```javascript
>s = 'Michel';
"Michel"
 
> s += ' Buffa';
"Michel Buffa"
 
> s;
"Michel Buffa"
```
#### Adding a string at the end of another one using the concat method:

```javascript
> var s1 = 'Michel';
undefined
 
> var s2 = 'Buffa';
undefined
 
> var s3 = s1 + " " + s2; // + can be used to concat more than 2 strings
undefined
 
> s3;
"Michel Buffa"
 
> var s4 = s1.concat(s2);
undefined
 
> s4;
"MichelBuffa"
 
> var s5 = s2.concat(s1);
undefined
 
s5;
"BuffaMichel"
```
#### Removing chars from a string using the substring method:

Removing the last char (equivalent to the pop method from arrays):

```javascript
> var s = 'Michel';
undefined
 
> s = s.substring(0, s.length-1);
"Miche"
```
#### Removing a certain number of chars starting from a string, starting at a given index  :


```javascript
var s = 'Michel';
 
function removeChars(s, startIndex, numberOfCharsToRemove) {
   return s.substring(0, startIndex) +   
          s.substring(startIndex + numberOfCharsToRemove);
}
 
// remove 3 consecutive chars from s, starting at index = 1
s = removeChars(s, 1, 3);
 
console.log(s); // will display "Mel" in the console
```

#### Replacing a char at a given index:

```javascript
function replaceAt(s, index, character) {
    return s.substr(0, index) + character + s.substr(index+character.length);
}
 
var s2 = "JavaScript";
s2 = replaceAt(s2, 1, "o");
 
console.log(s2); // will display "JovaScript"
 
// it also works with a string instead of a simple char
s2 = replaceAt(s2, 0, "Coca");
console.log(s2); // Will display "CocaScript"
```

#### Knowledge check 3.2.2 (not graded)

What is the name of the function/method for removing a given number of chars from a string, starting at a given index?
There is no built-in method/function for that, we need to build one. correcto
#### Explanation
Indeed, there is no built-in function for that. We presented in the course a removeChars(s, startIndex, numberOfCharsToRemove) function that uses the substring method.

---

#### Module 3: Playing with some HTML5 APIs   3.2 Arrays (part 2): iterators   Iterating on array elements

# Iterating on array elements

### Live coding video: iterating on arrays 

>! Missing video/trasncript

Get the source code of the example shown in the video:

https://codepen.io/w3devcampus/pen/VWYMNK

### Iterating on array elements

#### 1 - Iterating using the forEach method

The `forEach` method takes a single argument that is a function/callback that can have one, two or three parameters:

* The first parameter is the current element of the array,
* The second parameter (optional) is the index of the current element in the array,
* The third element is the array itself

Typical use with only one parameter (the current element):


```javascript
var a = ['Monday', 'Tuesday', 'Wednesday'];
 
a.forEach(function(day) {
    // day is the current element
    document.body.innerHTML += day +
                "<br>"; // will display Monday, Tuesday, Wednesday
})
```
This is the most practical way to iterate on each individual element of a collection (array, string);

#### We iterate on an array of person, and use two parameters in the callback function in order to get the index of the current element:

```javascript
var persons = [
  {name:'Michel', age:51},
  {name:'Henri', age:20},
  {name:'Francois', age:29}
];

persons.forEach(function(p, index) {
  document.body.innerHTML += p.name + ", age " + p.age + ", at index " + index + " in the array<br>"; 
});
```

#### Third example using three parameters, the last one being the array itself.

This can be useful if we need to know the length of the array, or do special things within the array (add/change/move elements during the iteration):



```javascript
var persons = [
     {name:'Michel', age:51},
     {name:'Henri', age:20},
     {name:'Francois', age:29}
];
 
persons.forEach(function(p, index, theArray) {
     document.body.innerHTML += p.name + ", age " + p.age +
                             ", at index " + index + " in the array of " +
                            theArray.length + " elements<br>";
});
```
In this example, we used the third parameter (the array) to access its length inside the iteration loop.

### 2 - Iterating on an array using regular loop statements

You can use any standard loop statement that we saw during in module 2. The most common way to iterate over an array is to use a for loop from 0 to length-1. 

Using this method allows elements to be iterated two by two, or the loop to be broken in the middle using the break instruction, etc.

Iterating over all elements in an array, using a for loop:

```javascript
var persons = [
  {name:'Michel', age:51},
  {name:'Henri', age:20},
  {name:'Francois', age:29}
];

for(var i = 0; i < persons.length; i++) {
  var p = persons[i]; // current element
  
  document.body.innerHTML += p.name + "<br>"; 
}
```
Another example where we iterate two by two (just changed the increment in the for loop):
```javascript
var persons = [
  {name:'Michel', age:51},
  {name:'Henri', age:20},
  {name:'Francois', age:29},
  {name:'John', age:69}
];

for(var i = 0; i < persons.length; i+=2) {
  var p = persons[i]; // current element
  
  document.body.innerHTML += p.name + "<br>"; 
}
```

--- 

#### Module 3: Playing with some HTML5 APIs   3.2 Arrays (part 2): iterators   Discussion topics and projects

# Discussion topics and projects


Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and an optional project.

Suggested topics

Which syntax do you prefer for iterating arrays?
We decided not to explain all the things you can do with the splice method. It's a very powerful method, but showing all its features could be overwhelming. However, if you're curious, please look on the Web for more details. Do you think we've been right not to tell you all the possibilities of splice?
Optional project: an interactive picture album browser

We will start with an array variable like that:

```javascript
let myPicturesArray = [
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
},
{
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "http://placehold.it/600/8e973b",
    "thumbnailUrl": "http://placehold.it/150/8e973b"
},
{
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "http://placehold.it/600/121fa4",
    "thumbnailUrl": "http://placehold.it/150/121fa4"
},
{
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "http://placehold.it/600/74456b",
    "thumbnailUrl": "http://placehold.it/150/74456b"
},
{
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "http://placehold.it/600/b0931d",
    "thumbnailUrl": "http://placehold.it/150/b0931d"
}
];
```
It's an array of pictures, each picture having a URL, a URL for a tiny version of the picture, called a thumbnail, a title, and the name of the album it belongs to, that can be used as a picture description (HTML alt attribute) but also for displaying it next to the picture.
Here is a small example that iterates on the pictures and create `<img>` elements on the fly:


```javascript
let myPicturesArray = [
{
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "http://placehold.it/600/92c952",
"thumbnailUrl": "http://placehold.it/150/92c952"
},
{
"albumId": 1,
"id": 2,
"title": "reprehenderit est deserunt velit ipsam",
"url": "http://placehold.it/600/771796",
"thumbnailUrl": "http://placehold.it/150/771796"
},
{
"albumId": 2,
"id": 51,
"title": "non sunt voluptatem placeat consequuntur rem incidunt",
"url": "http://placehold.it/600/8e973b",
"thumbnailUrl": "http://placehold.it/150/8e973b"
},
{
"albumId": 2,
"id": 52,
"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
"url": "http://placehold.it/600/121fa4",
"thumbnailUrl": "http://placehold.it/150/121fa4"
},
{
"albumId": 3,
"id": 127,
"title": "magnam quia sed aspernatur",
"url": "http://placehold.it/600/74456b",
"thumbnailUrl": "http://placehold.it/150/74456b"
},
{
"albumId": 3,
"id": 128,
"title": "est facere ut nam repellat numquam quia quia eos",
"url": "http://placehold.it/600/b0931d",
"thumbnailUrl": "http://placehold.it/150/b0931d"
}
];

// Display picures

myPicturesArray.forEach(function(currentImage) {
   let image = document.createElement("img");
   image.src = currentImage.thumbnailUrl;
   image.alt = currentImage.title;
   document.body.append(image);
});
```

What you will have to do:
* Improve the display, by adding margins (CSS), shadows, border, and changing the URLs for real pictures. Remember that you need to have a smaller versions of the pictures, i.e., thumbnails. You can use existing images (images.google.com is your friend) or images you upload somewhere.
* Use JavaScript for adding a click event listener on each image, then when clicked, you will show a bigger version of each picture. For the moment, just change the value of the src attribute of the clicked image (set it to the URL of the full size image from the array).
* Try to make something nicer: reserve a `<div>` on the right of the document so to display the clicked image with a bigger size. In that case, you will need to create an image (only once, after the first click), to set it to the size of the div (use the width and height attributes of the img element), and to append it to the div.
* Try to add more images, and find a way to display them per album. Create buttons entitled "album1", "album2", etc., and when clicked, you will only display images from the selected album.
* [Advanced] Add an option for deleting a picture. It should be removed from the document and from the array too...
* Fell free to add any interesting feature you think about ;-)


--- 

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Audio and video stream intro

# Audio and video stream intro

Play audio and video streams

These examples are adapted from the ones in the W3Cx HTML5 Coding Essentials and Best Practices course, which covers multimedia 
in depth. The HTML5 advanced course also gives further examples covering topics such as making a video player with chapter 
navigation, clickable transcript, audio EQ, etc.

### The <video> element

INTRODUCTION

The `<video>` element of HTML5 is one of the two "Flash killers" (the other being the `<canvas>` element). It was designed to 
replace horrible things like embedded Flash objects that we used to encounter not so long ago.

The new way of doing things is a lot better... (please open this live example at [JS Bin](http://jsbin.com/sisule/1/edit?html,output)).

The source code of this example shows the typical usage of the <video> element:


```javascript
<video width="320" height="240" controls="controls">
   <source src="movie.mp4" type="video/mp4" />
   <source src="movie.ogg" type="video/ogg" />
   Your browser does not support the <video> element.
</video>
```
Please note that:

* The controls attribute indicates that a control panel with play/stop/volume/progress widgets should be displayed;
* Usually the browser  will use the first format it recognizes  (in this case, the browser checks whether mp4 is supported, and if not, it will check for the ogg format, and so on). Some browsers may use a different heuristic and choose a "preferred" format.
* The `<video>` element is a DOM member, so  CSS styling can be applied, as well as manipulation using the DOM API.
You will learn more about the different attributes of the <video> element later on in the course.

RESTRICTION: You cannot embed a YouTube or a Daily Motion video using the <video> element

Help! <video src="my youtube video URL"></video> does not work! 

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

> BEWARE: you cannot directly embed videos from most of the popular social Web sites such as YouTube, Dailymotion, Vimeo, etc. For commercial reasons, and because advertising is automatically  added to the videos, these Web sites do not allow "regular" embedding of their videos.

While they use HTML5 to render their videos, these hosting sites (YouTube, etc.) use rather complex techniques in order to prevent you from using them with the <video> element. Instead, you often need to embed an <iframe> that will render the HTML5 videos in your Web site, and of course, the advertising that comes along with them.

Usually you have an "embed" button close to the videos that prompts you with some HTML code that you can copy and paste for embedding.

#### An example using YouTube:

Here is the HTML code you need to copy and paste in order to embed a video (in this case, a tutorial that tells you how to embed a YouTube video):


```javascript
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZH1XOsv8Oyo" frameborder="0" allowfullscreen></iframe>
```

Below is the YouTube video embedded in this page using the above code: it's HTML5 but it's not a <video> element directly inserted in the HTML of this page - it's an <iframe>.

https://www.youtube.com/watch?v=ZH1XOsv8Oyo


### The <audio> element

#### INTRODUCTION

#### HTML5 audio is composed of several layers:

* [The `<audio>` element](https://www.w3.org/wiki/HTML/Elements/audio)  is useful for embedding an audio player into a Web page. It is dedicated for streamed audio. It is very similar to the `<video>` element, both in its use and in its API.
* [The "Web Audio API"](https://www.w3.org/TR/webaudio/) is designed for musical applications and for adding sound effects to games. This pure JavaScript API supports manipulation of sound samples (loops, etc.), music synthesis and sound generation (oscillators, etc.). It also comes with a set of predefined sound processing modules (reverb, delay, etc.).

> This course will focus on the <audio> element. Check for the advanced HTML5  course (HTML5 Apps and Games), available on W3Cx, which covers the Web Audio API and other advanced parts of HTML5.


The attributes, event set and JavaScript API of the <audio> element are just a "reduced" version of the ones from the <video> element, and here we will only address their differences and peculiarities.

### The <audio> element - basic usage

The most simple basic example

Online example from JS Bin
http://jsbin.com/xorilil/2/edit?html,output


```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Draw a monster in a canvas</title>
   </head>
   <body>
      <audio controls="controls">
         <source src="http://mainline.i3s.unice.fr/mooc/week2p1/horse.ogg"
         type="audio/ogg" />
         <source src="http://mainline.i3s.unice.fr/mooc/week2p1/horse.mp3"
         type="audio/mp3" />
         Your browser does not support the audio element.
         Download the audio/video in
         <a href=”http://mainline.i3s.unice.fr/mooc/week2p1/horse.ogg”>OGG</a>
         or<a href=”http://mainline.i3s.unice.fr/mooc/week2p1/horse.mp3”>MP3</a>
         format.
      </audio>
   </body>
</html>
```
In this example, just as for the <video> element, we used the controls attribute in order to render the play/stop, time, volume and progress widgets.

Notice the other similarities: between the `<audio>...</audio>` tags, we added a text message that is displayed if the Web browser doesn't support the `<audio>` element, and we used several `<source>...</source>` elements that link to different audio formats for the same file. The browser will use the first format it recognizes.

Lines 8-12:  we suggest downloading the audio files if the browser does not support the <audio> element. This is also a best practice!


---

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Audio and video player JavaScript API

# Audio and video player JavaScript API

### Live coding video: the video element JavaScript API

https://youtu.be/9dBmc6R3X9g

> Today, let's have a look at some APIs. An API is a set of functions
> you can use from your JavaScript code. One of them is the audio and
> video player JavaScript API that will give you the possibility to
> control a video player from JavaScript, making your own custom video
> player. Let's look at one small example. So I prepared, here, an HTML
> document with a video player. In order to include a video player in
> your document, just use the video HTML5 tag: video... slash video. You
> indicate with the source tag the URL of the video file that will be
> streamed into your document. And in order to maximize the
> compatibility with old browsers, it's recommended to propose the video
> in different formats. So here, I've got a video file named video.webm,
> video.ogg, and video.mp4, that is available in different formats. And
> when you include a video element with some sources in your HTML
> document, the browser will ask the remote server and get the video
> format it prefers. So you don't have to wonder which one is the best,
> your browser will choose. So if I click on the video player, you see
> that... Ok! By adding a controls attribute it will display a control
> bar with buttons for play, pause… for adjusting the volume… for going
> forward and backward video and so on. And if I remove this, you don't
> have anymore the control, bar so you can make you own control bar for
> the video player. Let's try it! I'm going just to add a "play" button.
> So good... a good way to do this is do use the “onclick” event
> listener and I will call a function named “playVideo()” that will be
> located in the JavaScript part of my application. So the button will
> call “playVideo()” and I prepared this function in the JavaScript
> part: playVideo(). In order to control the video player you must get a
> reference on it. So, we used the “querySelector()” method we saw
> earlier in module 2. So... we're going to do the same thing. And do
> you remember that we can access elements from the DOM... you can get
> references on the HTML elements only when the DOM is ready and when
> the page have be loaded. So we use “window.onload = init” with an init
> callback that will executed only when the DOM is ready, and inside
> this function, we will get a reference to the video player. So, let's
> write it. And I will declare this reference as a global variable. Like
> this. So when I click on the button, I will use the JavaScript API of
> this object -this video player- and I can call “vid.play()”. I click
> on the button and it plays the video. How can you guess the names of
> the all the methods you can use? Go to the course, and in the section
> about the audio and video player JavaScript APIs you got this picture
> here, that is a link to the W3C specifications. And here you can
> interactively try the different methods. And the names on the buttons
> are the names of the different methods you can call when you see
> parenthesis: play(), pause()... And also you've got properties, these
> properties you can… you can use them for getting information
> -what is the current time?- for example. Or you can use them also for setting, changing their values. And for example, going back... if I
> say current time equals 0, or “currentTime +=10”, I'm advancing 10
> seconds in the video. So some properties are read only or read and
> write. You got also events... so you can listen to events while the
> video is being played. And for example, for synchronizing some
> contents on the page, for detecting when the video is ended. The
> "ended" event here, you can see it and so that you can play another
> video and do some play lists with the videos that are changed: when
> one is finished, the other starts and so on. So let's go back our
> example, and we will just implement the "pause" functionality. And we
> will add a "pause" button. So now I can play the video and I can pause
> it. If I want to rewind to the beginning... let's try again! And in
> order to do this, instead of calling a method...we will just use the
> “currentTime” property and set it to 0. Remember from this document,
> you see the “currentTime” here, it's a property of the video player
> object. So let's try it, play! Rewind! We start again from zero, and
> so on. If you want to display the “currentTime” while this video is
> still played. You can add an event listener on the video element
> “ontimeupdate = displayTimeWhileVideoIsPlaying()”. Ok, so like this:
> while the video is been played, this method will be called and we can
> here, for example, display the currentTime… console.log(). So let's me
> open the console, play the video and you see the current time. You can
> make a test: if “vid. currentTime greater than 5 seconds", then we
> pause the video. Let's try it. Then for example, you can ask a
> question, making a quizz related to the video, and so on. Ok, this was
> just to show you some basics of using the JavaScript API of media
> elements such as the video audio player.


Source code of the example from the video:
https://codepen.io/w3devcampus/pen/WOvVPQ?editors=0011

### Audio and video player JavaScript API

#### Control <audio> and <video> elements from JavaScript

The `<video>` element has methods, properties/attributes and events that can be manipulated with JavaScript. Using the DOM API it's possible to manipulate 
an audio or video element as a JavaScript object that has:

* **Methods** for controlling its behavior, such as `play()`, `pause()`, etc.;
* **Properties** (duration, current position, etc.), either in read/write mode (such as volume), or in read-only mode (such as `encoding`, `duration`, etc.);
* **Events** generated during the life cycle of the element that can be processed using JavaScript callbacks. It is also possible to send events to control the video player.

Like any HTML element, the `<video>` element can be manipulated/created using the DOM JavaScript API. Here is an example of programmatically creating a <video> element:
```javascript
var video = document.createElement('video');
video.src = 'video.mp4';
video.controls = true;
document.body.appendChild(video);
```
This will create a complete video player for the file "video.mp4", with control buttons, and will add it to the <body> element of the page.

### JavaScript API of the <audio> and <video> elements

#### Methods, properties and events

The JavaScript API gives you powerful tools to manipulate the <video> element, as the video object provides many properties, methods and events.

The complete list of events can be found at the [W3C specification page](https://www.w3.org/TR/html5/embedded-content-0.html#event-definitions), and numerous 
examples of each event can be found on many Web sites such as this [one](http://www.htmlgoodies.com/html5/tutorials/HTML5-Development-Class-Media-Events-3883356.htm#fbid=rRDjiexm8vR).

The complete list of properties can be found at [the W3C HTML5 Video Events and API page](https://www.w3.org/2010/05/video/mediaevents.html). This page 
is interesting for Web developers because it shows an interactive view of the different values and events changing over time while the video is playing within the page.

Click the picture to see it running online (or try the direct link), then play with the different buttons and look at the table of events and properties that will change in real time. The displayed names show the properties, events, and methods from the API.

Here is a table that shows the most interesting methods, properties and events provided by the <video> element API

We provide this as a quick reminder - keep in mind that the complete list is much longer!

|Methods	|Properties	|Events|
|-----------|-----------|------|
|play()	|currentSrc	|play|
|pause()	|currentTime	|pause|
|load()	|startTime (readonly)	|progress|
|canPlayType()	|videoWidth	|error|
||videoHeight	|timeupdate|
||duration (readonly)	|ended|
||ended (readonly)	|abort|
||error	|empty|
||paused (readonly)	|emptied|
||muted	|waiting|
||seeking	|loadedmetadata|
||volume||	
||height||	
||width||
||seekable (readonly)||
||played (readonly)||

Now let's take a look at a set of examples demonstrating how to use the most important of these properties, methods, and events...


Knowledge check 3.3.2 (not graded)

The W3C specification about the JavaScript API associated to `<audio>` and `<video>` elements, proposes an interactive demonstration of the 
different properties/methods/events; it's a must see for all Web developers interested in multimedia. Try it and guess what properties indicate 
the length of the video in seconds and the name of a valid event that is sent while the video is being played...

duration and timeupdate correcto

Explanation
If you try the intereactive demonstration, and play the example video, you will see that the duration property indicates the total length of the video. You will also see that the timeupdate event is emitted regularly while the video is being played?


---

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Examples using the JavaScript API

# Examples using the JavaScript API

The JavaScript API is useful for implementing playlists, making custom user interfaces and many other interesting things. The "enhanced HTML5 multimedia players" presented later on in the course rely heavily on this API.

#### EXAMPLE 1 - HOW TO USE EXTERNAL BUTTONS TO CONTROL A PLAYER'S BEHAVIOR

This example shows the first steps towards writing a custom video player. It shows basic usage of the JavaScript API for adding custom buttons to play/pause the video or to go back to the beginning by setting the currentTime property to zero.

Try it online, and look at the source code.
https://jsbin.com/dayuko/1/edit?html,css,output

Source code extract:
```html
<video id="vid" controls>
<source src=http://html5doctor.com/demos/video-canvas-magic/video.webm
         type=video/webm>
...
</video>
<p>Example of custom controls:</p>
<button onclick="playVideo();" style="cursor: pointer;">Play</button>
 
<button onclick="pauseVideo();" style="cursor: pointer;">Pause</button>
 
<button onclick="rewindVideo();" style="cursor: pointer;">
       Back to beginning</button>
<script>
    var vid = document.querySelector("#vid");
    function playVideo() {
       vid.play();
    }
    function pauseVideo() {
       vid.pause();
    }
    function rewindVideo() {
       vid.currentTime = 0;
    }
</script>
```

* Lines 7, 9 and 11: we add a click listener to each button, in order to call a JavaScript function when the button is clicked.
* Line 14: using the DOM API we get the JavaScript object that corresponds to the video element we inserted in the HTML document. This line is outside a function, it will be executed when the page loads.
* Lines 17 and 20: we call methods from the API for playing/pausing the video.
* Line 24: we modify the `currentTime` property in order to rewind the video. Note that `vid.load()` also rewinds the video, shows the poster image again, but also pauses the video. By using `currentTime=0` the playback does not stop. 


#### EXAMPLE 2 - HOW TO DETECT THE END OF A VIDEO AND START ANOTHER ONE

This example listens for the ended event, and calls a callback function when the video has finished.

```html
<video src="video.ogv" id="myVideo">
    video not supported
</video>
<script type='text/javascript'>
  var vid = document.querySelector('#myVideo');
  vid.addEventListener('ended', playNextVideo, false);
  function playNextVideo(e) {
     // Whatever you want to do after the event (play another video,
     // for example), change the src attribute, of the video element, etc.
  }
</script>
```

#### EXAMPLE 3, APPLICATION OF THE ABOVE TECHNIQUE - HOW TO MANAGE PLAYLISTS

This example detects the end of a video then loads the next video, changes the src attribute of the video element and plays the video (see the online example).

To try this example: use the progress cursor to go near the end of the first video that is being played and see how it continues with the next video. 
https://jsbin.com/ridujix/1/edit?html,output

```html
<!doctype html>
<html lang="en">
<head>
<title>Sequential Movies</title>
<script>
   var myVideo;
   var currentVideo = 0;
   var sources = [
         "http://html5doctor.com/demos/video-canvas-magic/video.mp4",
 "http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
   ];
   // Set the src of the video to the next URL in the playlist
   // If at the end, we start again from beginning (the modulo
   // source.length does this)
   function loadNextVideo() {
      myVideo.src = sources[currentVideo % sources.length]
      myVideo.load();
      currentVideo++;
   }
   // callback that loads and plays the next video
  function loadAndplayNextVideo() {
      console.log("playing " + sources[currentVideo % sources.length])
      loadNextVideo();
      myVideo.play();
  }
  // Called when the page is loaded
  function init(){
      // get the video element using the DOM api
      myVideo = document.querySelector("#myVideo");
      // Define a callback function called each time a video ends
      myVideo.addEventListener('ended', loadAndplayNextVideo, false);
      // Load the first video when the page is loaded.
      loadNextVideo();
  }
</script>
</head>
<body onload="init()">
     <video id="myVideo" controls></video>
</body>
</html>
```

* Line 8: the JavaScript array that contains the URLs of the videos in the playlist. In this example, we've only got two of them, but if the array is larger the example will still work.
* Line 42: When the page is loaded, an init() function is called.
* Lines 32 - 38: we used the DOM to get the JavaScript object corresponding to the video element, then defined a listener for the ended event. Each time a video ends, the loadAndPlayNextVideo() callback will be called. As the video element has no src attribute by default, we also preload the first video (call to loadNextVideo() at line 38).
* Lines 16 - 20: the loadNextVideo() function uses a variable called currentVideo that corresponds to the index of the current video. By setting myVideo.src = sources [currentVideo % sources.length], we set the src of the video element to sources[0], then to sources[1], and as we increment the currentVideo index each time (line 19). If it becomes greater than 1, the modulo (the "%" symbol is the modulo in JavaScript) will make it "loop" between 0 and the number of videos in the playlist. In other words, when the last video ends, it starts back at the first one.

---

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Using the Webcam

# Using the Webcam

It's very easy to use the `getUserMedia` API for accessing the WebCam. 

Here is a version that should work on any recent browser except Apple Safari (which still does not support this API). Note that for security reasons you must 
host your HTML/CSS/JS page on an HTTPS server for `getUserMedia` to work.

#### First version that uses callbacks (success/error, see the JS code):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Using the WebCam, version with callbacks</title>
</head>
<body >
  <video width=200 height=200 id="video" controls autoplay></video>
</body>
</html>
```

```javascript
window.onload = init;
function init() {
   navigator.getUserMedia ({video: true, audio: false}, success, error);
}

// successCallback
function success(localMediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
  // Do something with the video here, e.g. video.play()
}

// errorCallback
function error(err) {
  console.log("The following error occured: " + err);
}
```
#### Second version that uses a new JavaScript syntax called "promises":

This is another way of saying, "Please, browser, try to give me access to the WebCam, THEN when the Webcam is ready, please tell me so that I can 
display its stream in a `<video>` element". 


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Using the WebCam, version with promises</title>
</head>
<body >
  <video width=200 height=200 id="video" controls autoplay></video>
</body>
</html>
```

```javascript
window.onload = init;

function init() {
   navigator.mediaDevices.getUserMedia({audio: true,video: true})
     .then(function (stream) {
           var video = document.querySelector('#video');
           video.src = URL.createObjectURL(stream);
           video.play();
      })
     .catch(function(err) {
        alert("something went wrong: " + err)
   });
}
```

#### Knowledge check 3.3.3 (not graded)

What is getUserMedia?
A JavaScript API that can be used to redirect the webcam video stream to a video element correcto

#### Explanation
`getUserMedia` is part of the WebRTC specification, but it's related to the `<video>` element too. Indeed, it can be used to redirect the 
webcam video stream to a `<video>` element. If this element has the autoplay attribute, it will display the video stream as 
soon as it is available.


---

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Extended examples

# Extended examples

In this section, we provide some extended examples that use more JavaScript and more complex CSS manipulation. 

Example 1: applying CSS3 filters to a video in real time

Please see this example online. Play the video and then click on the video while it's playing. This will change in real-time the CSS class of the video element. Each class uses the filter property with different values.

Note that CSS filters are not yet 100% supported by the major browsers. You still need to use prefixed versions of the CSS properties, as shown below (this table is taken from caniuse.com).

CSS filter support (green squares with a small yellow part in the top right corner) means that a prefix is needed, like -webkit-filter, or -moz-filter or -o-filter):


Use `<video class="blur">` for example, to obtain a blurry video. This complete example changes the CSS class associated to the video element, on the fly in a mouseclick listener callback. 

Here, we define the CSS classes used in the example:

```css
.blur {
    filter: blur(3px);
}
.brightness {
    filter: brightness(5);
}
.contrast {
    filter: contrast(8);
}
.hue-rotate {
    filter: hue-rotate(90deg);
}
.hue-rotate2 {
    filter: hue-rotate(180deg);
}
.hue-rotate3 {
    filter: hue-rotate(270deg);
}
.saturate {
    filter: saturate(10);
}
.grayscale {
    filter: grayscale(1);
}
.sepia {
    filter: sepia(1);
}
.invert {
    filter: invert(1)
}
```

This extract from the source code explains how to set a mouseclick listener and how to change the value of a CSS class attribute on the fly:

```html
<video id="output" controls autoplay>
   <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm       
           type=video/webm>
   <source src=http://html5doctor.com/demos/video-canvas-magic/video.ogg
           type=video/ogg>
   <source src=http://html5doctor.com/demos/video-canvas-magic/video.mp4
           type=video/mp4>
</video>
<script>
   var output = document.getElementById('output');
   var idx = 0;
   var filters = [
     'grayscale',
     'sepia',
     'blur',
     'brightness',
     'contrast',
     'hue-rotate', 'hue-rotate2', 'hue-rotate3',
     'saturate',
     'invert'];
function changeFilter(e) {
     var el = e.target;
     var effect = filters[idx++ % filters.length];
     el.classname = effect;
     // Do not propagate the event, prevent default behavior.
     // By default, a click on a video element pauses/unpauses the video
     // By stopping the propagation and canceling the default behavior,
     // we stop the pause/unpause behavior when the video is clicked.
     // Now a click just changes the CSS filter we apply on the video.
     e.stopPropagation();
     e.preventDefault();
}
output.addEventListener('click', changeFilter, false);
</script>
<style>
#output {
    width: 307px;
    height: 250px;
    background: rgba(255,255,255,0.5);
    border: 1px solid #ccc;
}
.blur {
    filter: blur(3px);
}
.brightness {
    filter: brightness(5);
}
...
</style>
```

#### Example 2: how to track all possible events and manipulate many properties

This example also shows how to handle failures. See the code and play with this example [online](http://jsbin.com/kizuxuv/1/edit?html,output).

Here is an example of a piece of code for handling errors during video playback:

```javascript
...
vid.addEventListener('error', function(evt) {
    logEvent(evt,'red');
}, false);
...
function logEvent(evt, color) {
    switch (evt.type) {
       ...
       case 'error':
           var error = document.querySelector('video').error;
           switch (error.code) {
             case error.MEDIA_ERR_ABORTED:
                note.innerHTML = "fetching aborted at the user's request";
                break;
             case error.MEDIA_ERR_NETWORK:
                note.innerHTML = "a network error caused the browser to stop fetching the media";
                break;
             case error.MEDIA_ERR_DECODE:
                note.innerHTML = "an error occurred while decoding the media";
                break;
             case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                note.innerHTML = "the media indicated by the src
                                  attribute was not suitable";
                break;
             default:
                note.innerHTML = "an error occurred";
                break;
           }
           break;
       }
 ...
}
```
#### Example 3: how to display a percentage of buffering when using a slow connection

See the example [online](http://jsbin.com/xazivi/1/edit?html,output) here too.

Note that on mobile phones, the video does not start until the user presses the play control or clicks on the video picture. Using the `canplaythrough` event is a trick to call a function that starts the video player as soon as the page is loaded on desktop. This event is not supported by mobile devices, so if you try this example on a mobile, the video will not start automatically.

As the Apple Developer Web site explains:  "The `buffered` property is a `TimeRanges` object: an array of start and stop times, not a single value. Consider what happens if the person watching the media uses the time scrubber to jump forward to a point in the movie that hasn’t loaded yet—the movie stops loading and jumps forward to the new point in time, then starts buffering again from there. So the `buffered` property can contain an array of discontinuous ranges. The example simply seeks the end of the array and reads the last value, so it actually shows the percentage into the movie duration for which there is data. "


```html
<!DOCRYPE html>
<html lang="en">
  <head>
    <title>JavaScript Progress Monitor</title>
    <script>
      function getPercentProg() {
          var myVideo = document.getElementsByTagName('video')[0];
          var endBuf = myVideo.buffered.end(0);
          var soFar = parseInt(((endBuf / myVideo.duration) * 100));
          document.getElementById("loadStatus").innerHTML = soFar + '%';
      }
      // Will be called as soon as the page is ready on desktop computer,
      // Only when a user clicks on play control or image on mobile
      function myAutoPlay() {
          var myVideo = document.getElementsByTagName('video')[0];
          myVideo.play();
      }
      function addMyListeners(){
          var myVideo = document.getElementsByTagName('video')[0];
          myVideo.addEventListener('progress', getPercentProg, false);
          // Calls autoplay only if the device is adapted
          myVideo.addEventListener('canplaythrough', myAutoPlay, false);
      }
  </script>
</head>
<body onload="addMyListeners()">
    <h1>Check progression of buffering before playing a movie. Useful withy
        slow connexion (3G, etc.)</h1>
    <div>
      <video controls>
          <source src=http://html5doctor.com/demos/video-canvas-magic/video.webm
                  type=video/webm>
          <source src=http://html5doctor.com/demos/video-canvas-magic/video.ogg  
                  type=video/ogg>
          <source src=http://html5doctor.com/demos/video-canvas-magic/video.mp4 
                  type=video/mp4>
      </video>
      <p id="loadStatus">Buffering...</p>
    </div>
</body>
</html>
```

---

#### Module 3: Playing with some HTML5 APIs   3.3 HTML5 multimedia and JavaScript API   Discussion topics and projects

# Discussion topics and projects

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and optional projects.

Suggested topics

This might be useful: free videos at https://download.blender.org/peach/bigbuckbunny_movies/
Hosting videos is complicated when you want to use them with CodePen or JsBin, do you have some tips to share with others? Here at W3C we run our own private HTTP server...We are speaking about files that can be used with the <video> element directly, not on YouTube, DailyMotion, etc.
What tool do you use for encoding your audio and video files?
Optional project: a custom video player

Here are a few ideas to play with the material learned in this section. Your classmates and the team who prepared the course will be happy to look at them and give feedback. Please post URLs of your work in this discussion forum. These projects are optional, meaning that they won't be graded.

Try to write a video  player with a few custom buttons for play/stop/etc. When your custom player is done, please add a way to play several videos one after another (what we call a playlist), etc.

Examples that can help you, created by students of earlier versions of this MOOC:

* [A custom player with nice CSS and buttons](http://jsbin.com/dacevo/edit?html,css,output)
* [Another simple one with custom buttons for play/stop/volume up/volume down...](http://jsbin.com/neluwes/edit?html,css,output)
* [Custom players with a small playlist composed of three songs by Queen](https://jsbin.com/vefiniq/2/edit?html,output)
* [AWESOME custom player created by GeorgianaB, with playlist, progress bar, CSS3 animations, etc. Check this out!](https://codepen.io/w3devcampus/pen/reQbow)



























































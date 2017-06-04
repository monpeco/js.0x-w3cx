# Video introduction - Module 1

#### Module 1: Introduction to JavaScript > 1.1 Introduction - Module 1 > Video introduction - Module 1

> Hello everyone, welcome to the wonderful world of JavaScript! In this
> module, after giving a brief history of JavaScript and Web browsers,
> we will explain how HTML, CSS and JavaScript are related to one
> another. We will see JavaScript in action through numerous interactive
> examples. We have made sure that all examples can be run directly in
> the course’s Web pages. Hey, we’re teaching Web technologies, after
> all! We will do that throughout the course, as you will be asked to
> change some code, tweak this or that example, even if the code details
> are not fully explained at first. Because, this is how we recommend
> beginners to learn JavaScript: first look at examples, then tweak some
> code and see the results of the changes. You will certainly encounter
> error messages, but no worries, as I will teach you how to debug
> JavaScript code using your browser’s devtool console. In this first
> module, you will also learn about JavaScript variables, operators and
> expressions, and have a first lesson about functions, objects, arrays
> and strings. These are the basic concepts of JavaScript and are shared
> by many other programming languages. We’ll then develop together, and
> step by step, an interactive graphic tool that will use many different
> features from JavaScript, HTML and CSS. Let’s start having fun with
> JavaScript, now :-)


--

# Module 1 outline

#### Module 1: Introduction to JavaScript > 1.1 Introduction - Module 1 > Module 1 outline

### What you will learn in Module 1

If you thought that a Web browser could only display HTML documents, you were mistaken! ;)
Under the hood, an HTML document is nearly always associated with two other standard languages of the Web: CSS and JavaScript. Before looking at the guts of JavaScript, we will introduce you to the basics and play with many examples. We will also have a first look at the browser devtools, and discover how JavaScript is useful.

*  First we will briefly discuss the roles of HTML, CSS and JavaScript, and how they work together.  
*  We will show examples of what can be done with JavaScript: a showcase of very small examples through to impressively complex ones.  
*  Then we will look at a dozen different - very small - examples of typical uses of JavaScript. This time, we will explain the examples :-)  
*  Finally we will learn how to use the browser devtools, a powerful, built-in set of tools that represent the Swiss army knife of any Web developer. Without the devtools, you will not be able to debug your code, find errors, print traces of what a JavaScript program is doing etc.  
 

**A word of caution**: you will not learn JavaScript in full detail in this course! This is an introductory course designed to help you understand the basic concepts of the language.

--

# HTML is for structure

#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > HTML is for structure

## HTML: Hyper Text Markup language

#### The "Hyper Text" part: links!

A fundamental key to the World Wide Web is the concept of "hypertext".  Hypertext is built on the idea of linking information together, not unlike using footnotes, but far easier and more flexible. The idea is to "mark up" your document with links and define how to break it down into different segments (chapters, sections, paragraphs, tables, figures, etc.)

That's why, in 1989, Tim Berners-Lee began to create a definition of HTML: Hypertext Markup Language, to provide a simple, uniform way to incorporate hyperlinks into a text document.


---


#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > HTML is for structure

### HTML is for structure


#### HTML: Hyper Text Markup language

The "Hyper Text" part: links!

A fundamental key to the World Wide Web is the concept of "hypertext".  Hypertext is built on the idea of linking information together, not unlike using footnotes, but far easier and more flexible. The idea is to "mark up" your document with links and define how to break it down into different segments (chapters, sections, paragraphs, tables, figures, etc.)

That's why, in 1989, Tim Berners-Lee began to create a definition of HTML: Hypertext Markup Language, to provide a simple, uniform way to incorporate hyperlinks into a text document.

He envisioned a technology that would facilitate thoroughly interconnected documents. He wanted authors to be able to connect an idea in one document to the source of the idea in another, or connect a statement with the data that backs up that statement. Traditionally this kind of thing was done with footnotes and bibliographies, which can be cumbersome. This information should be easily transferable from one place to another, so that in reading one document, it is easy to access everything related (linked) to it. Tim Berners-Lee imagined a "Web" of interconnected documents.

He used the metaphor of a Web to emphasize the importance of connections between documents. It was not just a long list of details, but rather a sea of information stretching out in all directions. This sea of information was navigated by a new tool called a "browser".

The "Markup" part : elements, tags and attributes!

So the "M" in HTML stands for "Markup", but what does Markup really mean?  Essentially it means to annotate a document with extra information: things like where different sections and paragraphs begin and end, which part is the title, which things should be emphasized and so on.

There are many ways to markup a document, but HTML borrows a technique from an ancestor language, SGML (Standard Generalized Markup Language), which uses angle brackets ("<" and ">") to separate the annotations from the regular text.  In HTML these annotations are called "tags".

For example, consider the following chunk of HTML code (note: you can edit the source code and see the resulting Web page updating in real time):


```html
<body>
      <h1>A Tale of Two Cities</h1>
      <p>
         It was the best of times, it was the worst of times, . . . .
      </p>
      . . .
      <p>
         . . . it is a far, far better rest
         that I go to than I have ever known.
      </p>
</body>
```

If you eliminated everything in between the angle brackets from the text, for most purposes it would still read the same:

> A Tale of Two Cities
> It was the best of times, it was the worst of times . . . .
>   . . .
> . . . it is a far, far better rest
>     that I go to than I have ever known.
> Once you know that everything in angle brackets is "meta-information", it gives you a lot of flexibility. You can put a lot of different things in between those brackets without any of it showing up (directly) in your finished document. And though you don't usually see directly what's in those angle brackets, they can often have a big effect on how your Web page looks, as well as how it responds and interacts with you.

Here is another, more generic example:

Notes:

*  Remember that the first line of your HTML5 page should start by <!DOCTYPE html>. CodePen does not force you to add a DOCTYPE on CodePen,  but be assured that you will need to specify the DOCTYPE in all your Web documents.
*  You can modify the source code in CodePen, and see the results in real time.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Your first HTML page</title>
  <meta charset="utf-8"/>
</head>
  <body>
    <h1>My home page</h1> 
    <h2>Who am I?</h2>
  <p>Hi! Welcome to my Home Page! My name is Michel Buffa, I'm a professor at the University of Nice, in France, and I'm also the author of two MOOCS about HTML5 on W3Cx.</p>
    <p>I also play electric guitar and love coding WebAudio applications...</p>
    <img src="https://pbs.twimg.com/profile_images/110455194/n666194627_2302_400x400.jpg"
         width=200
         alt="Michel Buffa plays rock and roll">
    <h2>My Hobbies</h2>
    Music, Movies, Video Games, Travelling, Family, etc.
  </body>
</html>
```

Try it out!

It's time to write your first HTML code :-)

You can use a source code editor like Sublime Text, Atom, Brackets or any lightweight text editor. You can also use more "professional" tools such as Visual Studio, NetBeans, Eclipse, WebStorm, etc.

To try out the simple examples from this course, I'd suggest using an online IDE such as jsbin.com, codepen.io, plunker, etc.

During the course, we will show you how to test out simple code snippets in online IDEs, but we will also teach you how to organize your code with folders and files.

The next video shows how you can use JsBin, CodePen, and SublimeText in order to test the HTML code provided earlier in this section.


### Live coding video: using the course's tools
https://youtu.be/a272u8lwzRo

### HTML Elements

If you are sitting at a coffee shop next to a table of Web developers, you will probably hear three words quite a bit: "Tags", "Attributes" and "Elements".

"Elements" are the pieces themselves, i.e. a paragraph is an element, a header is an element, even the body is an element. Most elements can contain other elements, as the body element would contain header elements, paragraph elements, in fact pretty much all of the visible elements of the Document Object Model (that developers refer to as the "DOM").

As an example, let's look at a simplified version of the last HTML code we showed you:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Your first HTML page</title>
   <meta charset="utf-8"/>
  </head>
  <body>
   <h1>My home page</h1>
   <p>Hi! Welcome to my Home Page! My name is Michel Buffa, I'm a professor at the University of Nice, in France, and I'm also the author of two MOOCS about HTML5 on W3Cx.</p>
   </body>
</html>
```


Click the red circle next to HTML to unfold this HTML document structure (we can also say "see its DOM structure"):

https://codepen.io/w3devcampus/pen/BRNpYQ

Consider the figure above. It contains a single html element. It turns out this includes within it the entire content of your html file. If you click on the "html" red node, you'll find that it contains two components, a head and a body. Clicking on each of those will reveal their respective contents. This structure is what we computer scientists call a "tree". Any given element (except for the outermost "html" element) is wholly contained inside another element, referred to as the "parent" element. Not surprisingly, the elements contained within a given element are its "child" elements. And, yes, children of a common parent are often referred to as "siblings".

Thus in the example above, the top element is the html element, which contains just two elements, the head and body.  The head element contains a title element and the body contains an h1 element and a p element.  In a more typical example, the body would contain many more children, but for our purpose this is enough. p is for "paragraph" (the text between <p> and </p> will be separated by some space before the next element is displayed in the final HTML page rendering), h1 means "heading level 1", and will be rendered by default in bold with a bigger char size than any other text element, etc.

That may be a great picture, but how do we represent such a structure in a text file?  Well, that's where "tags" come in.

#### Tags

"Tags" are what we use to organize a text file (which is just a long string of characters) such that it represents a tree of elements that make up the html document. Tags are not the elements themselves, rather they're the bits of text you use to tell the computer where an element begins and ends. When you "mark up" a document, you generally don't want those extra notes that are not really part of the text to be presented to the reader.

HTML borrows a technique from another language, SGML, to provide an easy way for a computer to determine which parts are "MarkUp" and which parts are the content. By using "<" and ">" as a kind of parentheses, HTML can indicate the beginning and end of a tag, i.e. the presence of "<" tells the browser "this next bit is markup, pay attention".


Whatever that tag (or "open tag") does, it applies to the content following the tag. Unless you want that to be the entire rest of the document, you need to indicate when to stop using that tag and do something else, so "<" and ">" are used again. Since elements are typically nested within other elements, the browser needs to be able to distinguish between the end of the current tag and the beginning of a new tag (representing a nested element). This is done by adding a "/" right after the "<" to indicated that it's a "close tag". To indicate the beginning and end of a paragraph (indicated by the single letter "p") you end up with something like this:


```html
<p>This is my first paragraph!</p>
```

The browser sees the letters '"p>" and decides "A new paragraph is starting, I'd better start a new line and maybe indent it". Then when it sees "</p>" it knows that the paragraph it was working on is finished, so it should break the line there before going on to whatever is next.

For example, the "<em>" tag is used for element that needs Emphasis.  The  "<" and ">" indicate that this is a tag, and the "little bits of text" in between tell us what kind of tag it is.  To completely describe the element, it needs an open and close tag, and everything in between the tags is the contents of the element:

![tags](https://courses.edx.org/asset-v1:W3Cx+HTML5.0x+1T2016+type@asset+block@tags.png)

Most tags have open and close versions, but there are a few strange ones.  For more info, we strongly recommend that you follow the W3Cx HTML5&CSS Fundamentals course, but we generally refer to the strange ones as "self closing" tags.   Usually these tags represent an element that is completely described by its attributes, and thus there is no need for other content.  So if you see something like this:

    <img src="https://goo.gl/pVxY0e" alt="Floating Flower"/>

... then you should know that the slash at the end of the open tag is sort of a shorthand for a close tag, so you won't see any other indication that this element is now complete. There are also a few tags that don't even use the "/" at the end, they just don't have any close tag at all.  This works because all of the information this tag needs is declared in an "attribute".

The <img> tag is one of them, the "/" at the end is optional and can be removed entirely, this will still be valid HTML5.

    <img src="https://goo.gl/pVxY0e" alt="Floating Flower">

These elements, without a "/" at the end, are called "void elements". They are : area, base, br, col, embed, hr, img, input, link, menuitem, meta, param, source, track, wbr.

#### Attributes

Most of what you can learn about HTML attributes is presented in the three W3Cx MOOCs about HTML5 (fundamentals, coding essentials, and advanced techniques), but we can introduce the idea briefly in this JavaScript course. Basically, a given element on your Web page can be distinguished by any number of unique or common attributes. For example, we've already seen how an image can be inserted in your Web page, and in that example we used the width attribute of the <img> tag in order to constrain the width of the image:

    <img src="https://pbs.twimg.com/profile_images/110455194/n666194627_2302_400x400.jpg"
         width=200 alt="Michel Buffa plays rock&roll">
     
As you might guess, the <img> tag also has a height attribute, as well as others. Different HTML tags share some common attributes that we'll meet in the next section, which are particularly useful when coupled with CSS (id and class) for applying graphic styles (color, shadow, etc.), but  can also have specific attributes (for example: the src attribute can be found in the <video>, <audio>, <img> tags but not on a <p> or on an <h1> tag!)

Try changing the value of the width attribute in the example below, or add a height attribute, and see the result:


```html
<img src="https://pbs.twimg.com/profile_images/110455194/n666194627_2302_400x400.jpg"
     width=200
     alt="Michel Buffa plays rock and roll">
     
```

### Live coding video: creating a simple Web page using common tags and attributes

https://youtu.be/BmzEHG8A2Fg


---


#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > CSS is for style

### CSS is for style

### Live coding video: using CSS to style HTML elements

https://youtu.be/UrVjWOYEHHU

> Hi! In this short video, I will show you quickly the principle of CSS.
> I recommend you however to follow the CSS Basics course from W3Cx if
> you want to learn this technology more deeply. So HTML is for
> structure. CSS is another language, by W3C, that it's useful for
> specifying the look and feel of these elements. How do they fit
> together… How many spaces between them… What color to use, and so on …
> So I'm just going to copy and paste some examples here, and you saw
> that the look and feel of the document changed. And it's, now, using
> show shadows, borders, background colors, different character fonts
> and so on. So the CSS file, here, is just using what we call "rules ».
> A rule is a selector, so this means for all "h1" elements in the page,
> I want to apply these properties. And each property has a name
> ‘color’, and a value ‘red’. So, you indicate, for each different
> elements you selected (the "h1", the "h2", the "p" the paragraph, for
> the image) … you indicate what you want to change. For example, for
> the image in the document, you indicate a shadow.

#### Definition

CSS, or Cascading Style Sheets, is a style sheet language used to describe the way an HTML or XML document should look to a user. CSS is where you specify the color, size, spacing, font and other visual aspects of the content that you create in your markup language document.

Usually you will see CSS used alongside HTML to describe the way a Web page looks and feels. You can have a Web page without CSS, but it would be very difficult to make it look the way you want with just HTML. This is why almost every Web page is a combination of HTML and CSS.


#### CSS • /si-ɛs-ɛs/ • noun 

Stands for "Cascading Style Sheets". A style sheet language for describing how to display an HTML document.

Let's look at an example!

Let's take the (ridiculous) Michel Buffa home page again:

Notice the use of some HTML tags: h1, img, p, body etc.

Now, we can add some "CSS rules" to the HTML, and see that the appearance of the resulting HTML page rendering is rather different (click on the HMTL/CSS buttons to see alternatively the HTML or the CSS code, remember you can always make changes to the code: change the color in the CSS part, etc.):

```css
h1 {
  color:red;
  background-color:lightGreen;
  border:12px solid violet;
  padding: 5px;
  border-radius: 15px;
  text-align: center;
}

h2 {
  color:brown;
}

p, h1, h2 {
  font-family: cursive 
}
img {
    box-shadow: 10px 10px 15px grey;
}

p, img {
  margin-left:50px;
}

```










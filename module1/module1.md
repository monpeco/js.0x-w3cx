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

If you click on the CSS button on the top left of the previous codepen example, you will see the CSS rules that have been applied to the HTML document. Let's look at the first one:

```css
h1 {
    color:red;
    background-color:lightGreen;
    border:12px solid violet;
    padding: 5px;   
    border-radius: 15px;
    text-align: center;
}

```

This rule turns all the h1s in the document into red text, centered horizontally, on a light green background, with a violet border of 12 pixels (a solid border, not a dashed one), and this border has rounded corners made of arcs of a circle whose radius is 15 pixels.

The part before the opening brace (line 1) is the "CSS selector", it indicates the elements that will have their properties changed according to what is inside the braces.

The part inside the braces is a set of properties and values that will be useful for setting the look and feel of the selected elements.

Line 2 for example, says that all h1s will be colored in red.

#### CSS rules are applied in sequence

After the previous rule is applied, then the second rule is taken into account, then the next, etc. In this way, you can see that all h2s will be brown (second rule).

The third rule uses what is called "a multiple selector":

```css
p, h1, h2 {
   font-family: cursive
}
```
This one says that all p, h1 and h2 will use a cursive font character. The "," means "and also".

This is also how we indicate in the last rule that images and paragraphs should be moved to the right 50 pixels (property margin-right: 50px)

The id and class attributes

Basically, any given element on your Web page can be identified uniquely with an 'id' attribute, or grouped with a class of other elements by setting the 'class' attribute.

```css
<p id="paragraph-1" class="regular-paragraphs">
    Call me Ishmael . . .
</p>
```

The paragraph above has a unique identifier: the id attribute whose value is "paragraph-1" and is part of a class of "regular-paragraphs". The letters inside the quotes have no meaning to the computer, they just need to be consistent. They are actually strings. 

Again, the fact that the computer does not care what we put in those strings (except for some restrictions) means we can use them to convey meaning to a human developer. I could just as easily have said id='x' and class='y', but anyone looking at that would have no hint what the significance of x and y are. Best practice is to name these things to increase clarity, consistency and brevity.

Let's look at a modified version of the Michel Buffa's home page example:


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

#hobbyTitle {
  font-family: 'caveat';
  font-size:40px;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
}

.funny {
  color:purple;
  font-family: 'caveat';
  font-size:40px;
}

```

The last two rules first target the element whose id is 'hobbyTitle', in our case it's the second h2 element:

    <h2 id="hobbyTitle">My Hobbies</h2>
    
And here is the CSS rule:

```css
#hobbyTitle {
  font-family: 'caveat';
  font-size:40px;
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);
}
```


Line 1 uses the "#" character in the selector, meaning that we're going to select an element by its id attribute. In this case, the selector equal to #hobbyTitle, will select the element that has an attribute id="hobbyTitle".

In that case we use a funny char font called 'caveat' we took from the Google font service (see fonts.google.com), and in order to be able to use it in a font-family CSS property, we included its definition using a <link> tag in the HTML part of the document:

```hmtl
<head>
  <title>Your first HTML page</title>
  <meta charset="utf-8"/>
  <link href="https://fonts.googleapis.com/css?family=Caveat"
        rel="stylesheet">
</head>
```

The last rule targets all elements that have an attribute class="funny". Notice they can be different elements, we can have a p and an h3 element that have the class="funny" attribute:

```css
.funny {
  color:purple;
  font-family: 'caveat';
font-size:40px;
}
```
This rule will change the color, font family and size of two out of three paragraphs in the HTML element:

```css
...
<p class="funny">I also play electric guitar and love coding WebAudio applications...</p>
...
<p class="funny">Music, Movies, Video Games, Traveling, Family, etc.</p>
```

There are many, many, many different CSS properties in existence, and many different ways to select elements. We recommend that you follow the W3Cx CSS Basics and HTML5&CSS Fundamentals courses to learn more about CSS and about HTML5 basics.

#### Where can we put the CSS rules: In the HTML file? In another file? 

You can do both! 

You can embed the CSS rules between a `<style>...</style>` tag, located inside the `<head>...</head>` of the HTML documents, like in this example:

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Your first HTML page</title>
  <meta charset="utf-8">
  <style>
    h1 {
       color:red;
        background-color:lightGreen;
        border:12px solid violet;
        padding: 5px;
        border-radius: 15px;
        text-align: center;
}
  </style>
</head>
  <body>
    <h1>My home page</h1> 
    ...
  </body>
</html>

```

This is OK if you do not have too many CSS rules. In general it's better to put the CSS rules in one or more separate .css files, like this:

https://plnkr.co/edit/vedmaDmnfiJzoiLPrInG?p=preview

Note that when you use an online IDE, you usually type/paste the CSS rules in a "CSS tab" in the online editor, and it will hide all the plumbery for you (except the more complete ones such as plunker or c9.io that will enable you to manage files in the cloud).


### Live coding video: mixing HTML and CSS

https://youtu.be/fU0Exz045qw

> In this video, I will show you how you can include CSS in your HTML
> file, because we used online tools that hide, in a way, the location
> of the different languages. So, if you take this example we described
> in the previous video, and if I export it using CodePen… and if I look
> at the zip file that has been dowloaded, you can see CSS file are
> located in the subdirectory and in a .css file. This is a common way
> for organizing source code when you make a project with HTML and CSS.
> And if we open the "index.html" file, you can see that, what is really
> going on if we look at the source code. Actually, in order to include
> CSS file in an HTML file, we use the "link" tag with the attribute
> "rel = "stylesheet" and "href" = the name of the file. So here, it
> means the "style.css" file located in the "css" subdirectory. So if I
> open this project with Sublime Text … I go to the directory I've just
> downloaded, and if I open the directory, I can see my hierarchy, here.
> The "index.html" file that includes the .css file. And if I open the
> "style.css". I can see the CSS content here. And it's interesting to
> use a real source code editor because you've got auto-completion on
> the name of the properties: « background-color". You can use also some
> wizard for indicating or choosing the colors. So if I take this color,
> it will give me directly the value and so on. So you can edit your
> CSS, edit your HTML and when you save the result, you can open
> directly in your browser the file and see the result. Here, I change
> the background-color of the heading 1. You can also used directly in
> your HTML, the CSS rules. In that case, instead of using the "link"
> element, you use the "style" element. <style>, </style>, and like that
> you can directly include, in the HTML file, the style. So I've got
> "h1" CSS rule, that will indicate how the "h1" will be rendered and
> I'm no more including an external file. If I save this and "Open in
> the Browser", I've go the same result here for the "h1". And if I look
> at the source code, I will see directly in the HTML, the CSS rule. So,
> to sum up, you can have your CSS in external file or inside the HTML
> file using the "style" element.

---

#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > JavaScript is "the interactive glue"

# JavaScript is "the interactive glue"

### Live coding video: JavaScript is the interactive glue between HTML and CSS

https://youtu.be/EaIQ7Q9Xwbk

### JavaScript is the interactive glue between HTML and CSS

JavaScript is the third of the "magic trio": HTML5/CSS/JavaScript. It is the only programming language a browser can run (without installing any plugins or extensions), and it's a real standard of the Web (even if not standardized by the W3C).

### Why do we call it "the interactive glue between HTML and CSS"? 

Actually, this description does not do justice to JavaScript, which can do far more than just act as glue. JavaScript can be run outside of the browser (on a nodeJS interpreter on a remote server, or in scripts run by the operating system), but for this intro course, we will focus on "JavaScript" in the browser (an advanced course about "server side JavaScript" is on its way at W3Cx).

So, in the browser, JavaScript lies between HTML and CSS and will be used together with these two languages. Let's take a look at two small examples:

**Example 1: Push the button to modify the heading of the page.**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript and HTML</title>
  <meta charset="utf-8"/>
  <script>
    function changeTitle() {
      var title = document.querySelector("#mainTitle");
      title.innerHTML += "<br>This new <u>title</u> has been changed from JavaScript!";
    }
  </script>
</head>
  <body>
    <h1 id="mainTitle">My home page</h1> 

    <p>This is an example of interactivity between JavaScript and the HTML content of a document.</p>
    <button onclick="changeTitle();">Click me to change the title of the page</button>
  </body>
</html>
```

**Example 2: Push another button to modify the CSS style (color, background-color, border) of a paragraph in the page.**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript and HTML</title>
  <meta charset="utf-8"/>
  <script>
    function changeTitleCSSStyle() {
      var title = document.querySelector("#mainTitle");
      title.style.color = 'black';
      title.style.backgroundColor = "yellow";
      title.style.border = "5px dashed red";
    }
  </script>
</head>
  <body>
    <h1 id="mainTitle">My home page</h1> 

    <p>This is an example of interactivity between JavaScript and the HTML content of a document.</p>
    <button onclick="changeTitleCSSStyle();">Click me to change the CSS colors of the title of the page</button>
  </body>
</html>
```

We will take a detailed look at how these examples work in the subsequent parts of the course. These examples are just here to show you how JavaScript can interact with the HTML content and the CSS styles of a Web document.

Notice that in these examples, the JavaScript code is located in the HTML of the document.


> Hello, your Web browser can only understand three different languages
> when you ask for a Web page to be rendered in the browser. So, let's
> take this document for example. We type the URL here, and the document
> arrives from a remote machine. And this document is a HTML source code
> that has been interpreted and rendered to give you a nice looking
> document. In this HTML, you can have CSS rules for specifying the look
> and feel of the document as we saw in the previous example. But, you
> can also have Javascript code and Javascript when its run inside the
> browser can act as a glue between HTML and CSS. We will use Javascript
> to provide interactivity to the documents. In this example, the fist
> one on this page, I can click to change the content of the document.
> So we modify what we call the document object model. It's exactly the
> set of elements that compose the page. When I click, I change the
> content of the heading. That was previously equal to ‘My home page’,
> and then when I clicked on the button, (this is an HTML button), this
> is how in Javascript we can indicate that we are going to do something
> when you click on it. In that case, it means call the function named
> "changeTitle" and the function is here defined between <script> and
> </script> elements. In this example, the Javascript lies inside the
> HTML file and the function is a piece of code that can be run on
> different conditions. A click on the button executes these two lines
> of code here. So, 1st use: interact with the document object model,
> interact with the HTML elements of the page, add new ones, modify some
> existing ones, remove some elements. It can be also use for
> interactive for the CSS styles of the page. So, in this example, I
> click on the button. And instead of modifying the content of the page,
> I just change the look and feel. I change the CSS style of the
> heading. If we look at the code quickly without going into details:
> when I click on the button "button onclick", I call the
> "changeTitleCSSStyle" function. In this function will use the "style"
> attribute of some elements that correspond to the heading 1 and it
> will indicate that we want the text to be black, the background color
> to be yellow and the border to be 5 px wide, dashed and colored in
> red. This was just an example. What we can do with Javascript goes
> much further than this simple example. We can work with remote data,
> upload and download data from a remote server. We can use it for
> making multimedia players, for writing video games, for making music,
> for building tables on the fly to display some dynamic data that you
> came after, for example, we enter some text in the search form, etc.
> During week 1, we will see other examples with different sort of
> applications of JavaScript. And, we will first give some explanations
> about variables, functions, some basics events handling: how to detect
> a click? how to debug the code? What tools we’re going to uses for
> writing Javascript code, and so on.


---

#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > JavaScript history
 
# JavaScript history
 
### History of JavaScript
 
 
JavaScript was born in 1995 as part of the work of Brendan Eich's team at Netscape (the ancestor of Mozilla). At that time, Netscape, in association with Sun MicroSystems, provided popular server and client-oriented solutions (Netscape Navigator, ancestor of Firefox) which depended on Java. (Sun Microsystems,  the company that created the Java programming language, no longer exists, having been bought by Oracle Corporation in 2009.)

But Netscape realized that Java wasn't a suitable language for in-browser use. Netscape thought of JavaScript at the beginning, as a lightweight Java.

JavaScript was initially inspired by Java, but in fact only some naming conventions remained the same. We highly recommend not even trying to look for similarities - this is actually a bad way to start learning JavaScript! We'd rather just say that the only real commonality between these two languages is their names. If you are coming to this course from Java, leave the Java thinking behind!

JavaScript quickly became a success following its first appearance in Netscape Navigator 2 in March 1996, and it was quickly integrated into other popular browsers. Microsoft also created its own version named JScript (and shipped it with Internet Explorer 3 in 1996).

Towards the end of 1996, JavaScript was standardized by ECMA as the EcmaScript standard. So no matter whether you see it called JavaScript or EcmaScript, don't worry, it's the same thing. EcmaScript has continued to be released right up to the present day.

THE PRESENT: what is the current version? What about ES6/ES2015/ES2016 I saw on the Web, are these the new names of JavaScript?
![THE PRESENT](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/98e8208d171bebf192a859a93932d84d/asset-v1:W3Cx+JS.0x+1T2017+type@asset+block/ecmascript-history.png)

Since 1996, multiple versions of JavaScript have appeared. The stable version with 99% of features supported by all major browsers deployed on computers and smartphones is EcmaScript version 5 from 2010, but the latest official version is version 6, also called ES2015 or ES6. A 7th version is on its way (called ES2016, ES2016+, ES7, JavaScript 7...).

ES2015 is a pseudonym for the latest version of the JavaScript programming language to be approved by ECMA International, the standards group responsible for vetting and approving different versions of the language. In June 2015, ECMA International approved the 6th edition of the language. The name, ES2015, is used because the latest version of JavaScript is identified as the 2015 version of ECMAScript (the alternative name for JavaScript). Read this blog post about all these naming incongruities!

Up until relatively recently, ES2015 was referred to as ES6 and before that, Harmony. Moving forward, ES suffixed with the year of the latest approved standard is the naming convention. The next version should be standardized soon, and it's called... ES2016 or ES2016+! Browser vendors do not wait until ECMA standardizes a version, they start implementing it during the standardization process, which can take months or years (they also contribute to the standardization process all along its life cycle).

Beware: even on recent Web browsers, ES2015 and ES2016 have supported feature sets are not completely implemented!

Well, ES2016, the 7th version of JavaScript is not yet officially standardized, and its support, even by latest browser versions (with the exception of Firefox) is rather weak.

Which version will we learn?

First of all, this is an intro course! Not all features of JavaScript need to be covered, in particular the ones that you cannot run in your browser without using advanced tools (there are tools, such as Babel,  that can turn ES2016 source code into ES5 code that can be run in nearly any browser, but they are tricky to use and not for beginners).

We will cover all the important features of ES5 and ES2015. From time to time we might say "in ES5 you would do this, but ES2015 also supports this syntax, which is simpler, more powerful, etc.", and we will, of course, provide examples.

Is JavaScript an important language to learn? What about Java, PHP, C#, Python, Ruby and all the others?

JavaScript is the only programming language you can run in your browser. Without JavaScript there would be no games, no fancy dynamic HTML forms, no interactive maps, no Gmail, no YouTube, no Twitch TV, no Netflix....

JavaScript is integrated into nearly every popular Web browser and is probably the most frequently used language in the world. More than 90% of Web documents now use JavaScript too.

Every computer, smartphone, and tablet uses JavaScript many times a day within the browser and even as native code! Indeed, some applications are compiled from their JavaScript/HTML/CSS version into "classic" applications that can be run without a browser. This compilation step can give an extra performance boost, the NetFlix application, or Office 365 are such applications.

In the beginning, JavaScript was invented to work not only on the client side (in Web browsers) but also on the server side (on the Netscape HTTP Web server back in 1995).

In recent years this trend has returned, thanks to the appearance of the Node.js server/JavaScript interpreter. It's common to see JavaScript applications running on a remote Web server. This particular use of JavaScript will be covered by another course that will be proposed by W3Cx, but mastering JavaScript basics is highly recommended before trying to learn JavaScript server side programming.

#### JavaScript is an interpreted language

JavaScript is an interpreted (or just-in-time compiled) language, which means that the code is converted into a machine language at, or just before, runtime. The most popular JavaScript engines are:

*  SpiderMonkey (included in Mozilla Firefox)
*  JavaScriptCore (included in Apple Safari)
*  Chrome V8 (included in Google Chrome, in the Node.js server)
*  Chakra (included in Microsoft Internet Explorer and now in the Microsoft Edge browser)

---

#### Module 1: Introduction to JavaScript > 1.2 JavaScript, HTML and CSS > Discussion topics and project

# Discussion topics and project

### Discussion topics and project

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and an optional project.

#### Suggested topics

Did you know about JavaScript history? Do you have stories to share?
What online tools do you know about, that could be useful for other students?
Do you prefer trying small examples using an online IDE or using a source code editor and working with files located on your hard disk?
Do you know a good service for hosting Web sites made with HTML/CSS/JS files?
Optional project

Try to make a simple home page and add some interactivity to it, adapting the examples provided in the course (change the HTML content by clicking on a button, change the CSS style of some parts of the document).

---


#### Module 1: Introduction to JavaScript > 1.3 JavaScript overview > The best way to learn JavaScript

# The best way to learn JavaScript

### Live coding video: learn by the examples


### What is the best method to learn JavaScript?

#### FIRST: learn by looking at and tweaking the code in the examples

Well, there is no definitive answer to this question, but I'd recommend firstly looking at small examples, tweaking them and trying to guess what they do. You will rapidly discover that you can learn a lot just by modifying a few lines of JavaScript code, even if you do not understand the whole thing. 

During module 1, we will give you some basics:

* How to write a simple HTML/CSS/JS page,
* Suggest some regular source code editors to use,
* How to use online environments that run in the browser, and offer an "instant preview" of your creations. These tools are generally not suited for full scale projects, but are really valuable for testing and learning.
* We will present many examples (some short and some bigger ones) that will show what can be done with JavaScript. We strongly encourage you to tweak them, look at the code, download them on your hard disk, etc. Even if you do not understand everything, have a go at modifying them; further down this page we outline such an exercise.
* Over the coming weeks we will be revisiting the examples, and discussing them in greater detail and with fuller explanations.

#### SECOND: take some time to carefully read the sections titled "What you've learnt / let's detail ...."

During the course, we will provide extra "reference pages" that will detail some important parts of the language. For example, in a later section this week we will explain the concepts of "variables", "values", "operators", "output", etc.

Here is an example - we provide some clues, but it's your job to tweak it!

Here is an example that uses an external JavaScript library useful for plotting math functions. Look at the JavaScript code (click on the JS button) and try to guess where the function is specified, where the range for the x and y values is set, etc. Notice that you can use your mouse wheel to zoom in/out the function plot.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Plotting functions in JavaScript using the 
    function plot library</title>
  <meta charset="utf-8"/>
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
</head>
<body>
  <div id="myFunction"></div>
</body>
</html>
```

```css
div {
  float: left;
}

#myFunction {
  padding: 25px;
  width: 250px;
  height: 250px;
}

```


```javaScript
var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'sin(x)', 
    color: 'red'
 }       
        ],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

functionPlot(parameters);
```

By looking at this example (HTML and JS code), you will notice a few things:

Two lines in the HTML code that correspond to the inclusion in the document of some external JavaScript code:

    <script src="https://d3js.org/d3.v3.min.js"></script>
    <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>

We will examine this soon in a later section of the course, but, in brief, it means that we will use the d3js plotting library that is apparently located at https://d3js.org (try to visit the site), and another from github (a famous repository for open source contributions), and located in the github account of a person named "mauriciopoppe", the repository is named "function plot". A rapid search will give this URL as the home page of the "function plot JavaScript library".

Then, looking at the JavaScript code of the example (click the JS button on the CodePen example), we see:

```javascript
functionPlot({
       target: '#myFunction',
       data: [{
       fn: 'sin(x)',
       color: 'red'
    }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
});
```

Ok, the syntax looks strange if you are not used to JavaScript, but I bet that you guessed that the function plotted is "sin(x)", that the color of the curve is "red", that the range of the x values is [0, 2*PI], and the range of the y values is [-1, 1].

Your job:

1. try to plot sin(x^2),
2. try to change the domain for the x and y values,
3. try to change the color of the curve, etc.

To do this:

* Edit directly the JS code in the embedded example, after a few seconds, you should see the updated result in the "Results" tab,
* ...or just click on the "Edit on CodePen" title on the top right of the embedded example, then change  the code. Normally you should see the results of your modifications as soon as you stop typing (we call this "live coding"). (Here is an example of what you can obtain as a result).

### What can you guess from this example?

#### A function call

You can think of this code in this way:

    functionPlot(...);

> Where the "..." corresponds to some sort of parameter. When you see a name followed by two parentheses (maybe with something in between) followed by a ";", this is "a function call". 

A function is a piece of code defined somewhere else, that can accept parameters (the "thing" between the parentheses), and that will do something. In our case the function's name is "functionPlot" and we can assume (or we read the documentation of the library) that the goal of this function is to plot a mathematical function, as its name tells us.

### Function parameters

The "thing" between parentheses is what we call "the parameters of the function": the data we pass to the function so that it can plot different math functions, with different colors, with different ranges for the x and y values, with or without a grid, etc.

Let's have a look at the parameters we used in our example (the ones you tweaked). They are in bold in the source code we saw earlier:

```javascript
{
    target: '#myFunction',
    data: [{
             fn: 'sin(x)',
             color: 'red'
          }],
    grid: true,
    yAxis: {
         domain: [-1, 1]
    },
    xAxis: {
         domain: [0, 2*Math.PI]
    }
}
```

### JavaScript object

In JavaScript you can have simple values like: 2, 5, "hello", "3.14", and you may also encounter more "structured" values that we call "objects". In week 3 we will address JavaScript objects, but for the moment we will just present them through examples, without too much detail.

A JavaScript object can be defined by two braces with a set of properties/values inside, separated by a comma. Here is a simple object:

```javaScript
{
   givenName: "Michel",
   familyName: "Buffa"
}
```

> We use the ":" separator between the property name and its value. We use a comma between two properties, and we omit the comma after the last property (or before the ending brace).

In our examples, the properties of the object that is passed as a parameter to the functionPlot(...) call are in bold.

They are respectively:

* target: the ***CSS selector that corresponds to the HTML element that will contain the plot***. Look at the HTML code (<div id="myFunction"></div>), the id value corresponds to target: "#myFunction" in the object.
* data: this is where we indicate the value of the function(s) to be plotted. We talk about this in greater detail below.
* grid: this can be true or false (we call these "boolean values") and indicates whether or not we want a grid to be drawn in the background.
* xAxis: the value specifies the domain (range) for the x values...
* yAxis: the value specifies the domain (range) for the y values...

Notice that after each property (color, grid, etc.) there is a ",". Notice that between the name of the properties and the value there is a ":", etc...

### Embedded objects

If we look at the values of the xAxis and yAxis properties, they are also objects.

```javaScript
xAxis: {
    domain: [0, 2*Math.PI]
}
```

The data object is even more complicated:

```javaScript
data: [{
   fn: 'sin(x)',
   color: 'red'
}],
```

Instead of containing another object like xAxis or yAxis, it contains another sort of object, but inside brackets! In JavaScript, brackets are used to create arrays of "things" (multiple, enumerable things). In this example, the array contains one single object that has two properties:

* fn: the value of the function to be plotted, in this case sin(x),
* color: the color of the curve


***In arrays, the different elements are separated by commas***. Let's try to plot an additional function in our example. We will add f(x) = cos(x) to our example, with a different color:

```javaScript
data: [
    {
       fn: 'sin(x)',  // First function
       color: 'red'
    },
    {
       fn: 'cos(x)',  // second function
       color: 'blue'
    }
]
```

### Conclusion

Just by looking at one example, and without going into the boring details, you saw:

* How to plot a function using a third party library and how to include it in your code,
* How to change some parameters without knowing JavaScript in depth,
* You had a first encounter with concepts such as: "a function call", "function parameters", simple objects, embedded objects and arrays (we will discuss them as we move through the course, beginning in week 1 - as you will see very soon!).

Not bad ;-)







> So, what it the best method for learning JavaScript? When you are a
> complete beginner, I will recommend to look at examples, tweak them,
> change small things, try to understand how the syntax looks like. Even
> without deep explanations, without reading a book, or studying in
> details the different concepts of language, you can learn a lot. So,
> in this section, I propose that you look at a small example without
> understanding the details, and try to tweak it. So here is the example
> we provide. It's just an example that draws, that plots, a
> mathematical function. So you can use the mouse wheel to zoom in, zoom
> out, and you can look at the HTML code. There is only very few CSS and
> very few lines of JavaScript. So how can we do the such a complex
> result? Complex thing drawing the grid with axes, with labels, with a
> curve, and interact with the mouse. With only 10 lines of code: it's
> because we are using what we call an external JavaScript library.
> Actually, we are using 2 of them here. Because, this one: the
> "function-plot" JavaScript library, is using internally another one
> you must include also in the document. So, what I propose is that we
> will start looking at this example. The best way is to click on "Edit
> on CodePen" label here, it will open the code in the CodePen.io online
> editor. And... just look at the HTML part here. Okay, we can just look
> at the HTML part and zoom in a little bit. What do we see? We can see
> that it uses 2 libraries here between <script> and </script> elements.
> This is how we can insert in the document an external JavaScript file.
> In that case, it's a remote JavaScript file because we are downloading
> it using http. So it uses this "d3js" JavaScript library that is
> located at "d3js.org". You can open this in another tab and you will
> see the documentation and the Web site, the homepage of the Web site,
> for the "d3js" library. By the way "d3js"is one of the most popular
> JavaScript library for visualizing data. So let's go back to our
> example, so you can just tweak the different elements. If I want to
> plot a cosinus instead of a sinus, I don’t need to understand the
> whole syntax here, but I guess that by just typing "cos" here, it will
> do something. And indeed I have just drawn a cosinus. If I change this
> for "green", it changes the color. If I change the grid, that is by
> default "true", if I say "false", I don't have a grid anymore. Okay
> let's put it back. And I've got some "xAxis" domain : "-1, +1". If I
> change that for "-10, +10", I can see the result. So it's more
> interesting, if you change this for the x values... instead of going
> from PI to 2 PI. I went from 0 to 10 PI. So I can see the result here,
> and so on... So now that you tweak the example, you can try to
> understand what is going on. Okay, this thing is a name followed by a
> parenthesis. an open parenthesis with a closing parenthesis. It's a
> function call. When you've got something like that, in JavaScript,
> function parenthesis with something in the middle, it's called a
> "function call". We're going to call a function, that, in this case,
> we haven’t written, so it's coming from one on the external libraries.
> In that case, it's the "function-plot" library. What is inside? There
> are the parameters. And I can use an external name. I can declare
> that, here, it's equivalent. You see that it works the same here, but
> I’ve just separated the two things. If I put directly this thing
> inside here, like it was before, it still works. Okay, so what is this
> syntax? In JavaScript, when you’ve got braces like that, opening
> braces and closing braces, it’s called an object. And inside an
> object, you've got properties and values. The properties have names:
> target, data, function, color, grid. And the values are after a column
> characters. The target is my function. The data is this thing. The
> grid is true, and so on... So you separate the different properties of
> the object using a comma and sometimes, you can have some properties
> that in turn, have a value that is an object. So the xAxis property is
> equal to an object that has a property domain, that has for values:
> "-1, 1". And when you've got brackets, opening and closing brackets,
> it's like that... That will define arrays of things in JavaScript. And
> an array of things is a list of enumerable elements. So in that case,
> the domain has two elements: the minimum value and the maximum value.
> And here you can see that the data that are plotted, the cosinus
> function, is also an array. So, if I use the comma and I introduce a
> second element here. For example, the sinus function, and if I change
> the color, let's make it pink... Look at the result: I've got 2
> different functions that have been plotted in my graph. So I can,
> instead of using this, I can maybe plot x2 (x square 2), like this,
> okay. It should work. Ok, we can see a little bit of it here. So maybe
> we will change the domain, so instead of stopping at 1, we go to 10.
> Here we go! And if we look at the values, we see the x square function
> that is a bit better, and if we just plot it for x=0 to x=2... ...In
> that case, i've got another scale for looking at the functions. So, in
> this first example, you saw how to use an external library, what is
> the syntax to call a function, and how we can define objects in
> JavaScript by using a set of properties and values, separated by a
> comma. And we also had a first encounter with what we call arrays,
> that are elements separated by commas inside brackets.



---

#### Module 1: Introduction to JavaScript > 1.3 JavaScript overview > What can be done with JavaScript

# What can be done with JavaScript

### Live coding video: what can be done with JavaScript
https://youtu.be/b27f2ZV-1ek

### What can be done with JavaScript

#### FIRST: interact with the HTML and CSS content of a document, respond to events

We have already seen three examples in previous parts of this week's course material.

This first example used the selector API for selecting a particular element in the document (the main title) and the DOM API for modifying its content.

An API is an ***application programming interface***. In the case of JavaScript, the DOM API is implemented natively by the browser, and you can call several functions/methods or access properties of the DOM:  an object that represents the document (the Web page). 

It uses the selector API to target a particular part of the DOM (in our case, the main title of the page), the HTML element with an id attribute equal to "mainTitle". The selector API uses the same syntax as CSS to select elements in the document. In our case, "#mainTitle" is a selector value that means "the element whose id is equal to mainTitle".

    var title = document.querySelector("#mainTitle");

It uses the DOM API to change the HTML content of the selected element:

    title.innerHTML = "This new title has been changed from JavaScript!";

It listens to click events in order to call the changeTitle() function when we click on the button:

    <button onclick="changeTitle();">Click me to change the title of the page</button>

And it executes the whole action (changing the title text) in a function (a block of code that is executed only when we call it by adding a parenthesis after its name, followed by a semi colon):

```javaScript
function changeTitle() {
    var title = document.querySelector("#mainTitle");
    title.innerHTML = "This new title has been changed from JavaScript!";
}
```

The second example is nearly the same except that we changed the name of the function, and instead of using the DOM API to update the text content of the main title, we use its style property to change its look and feel. Using the style property is a way of altering the CSS property values of this HTML element.

```javaScript
function changeTitleCSSStyle() {
    var title = document.querySelector("#mainTitle");
    title.style.color = 'black';
    title.style.backgroundColor = "yellow";
    title.style.border = "5px dashed red";
}
```
title is in reality what we call "an object" and style is a property of the title object. The style is an object as well and has attributes that correspond to the different CSS properties we set. For example, style.color returns the color that element has set on it. By calling title.style.color = "yellow"; you can apply the style change dynamically.

> Some of you may be wondering what happens when the CSS property being set has a hyphen. The syntax has to be different here, because, for example, if you write title.style.background-color, JavaScript will try to subtract color from the title.style.background notation, which is not what you want to happen. To stop this problem from occurring, all the CSS properties are written out in CamelCase: the CSS name background-color becomes backgroundColor, text-size becomes textSize, border-color becomes borderColor etc.

Don't worry, we will return to this later in this course, these first examples are just here as an introduction.

The third example (outlined in the previous section), which showed how to plot math functions, illustrated that with a few lines of code you can reuse code from others (a third party JavaScript library).

#### SECOND: use numerous APIs in addition to the DOM and selector APIs: multimedia, drawing, animating, geolocation, webcam, etc.

Your browser comes with a lot of different "libraries" that are called "standards APIs" for "application programming interfaces". Such APIs are "W3C standards" and are present in all Web browsers that follow the Web Standards. You will have APIs for manipulating multimedia (audio and video), geolocation (getting the longitude and latitude), orientation (on mobile devices), accessing the webcam or the microphone, etc. In a later section we will provide a set of examples that use some of the most useful APIs provided by your Web browser.



### THIRD: work with remote data / speak with a remote HTTP Web server

You can also download or upload data from your browser to a remote Web server. When this is done from JavaScript the popular term to describe such operations is "AjaX" (Asynchronous JAvascript and Xml), even though XML is not used in any examples you'll see in this course (XML is a language for describing structured data that was very popular a few years ago).

Here is an example that will display the current and past members of famous rock bands:

#### Knowledge check 1.3.2 (not graded)

In JavaScript, in order to change the content of an HTML document or the CSS style of HTML elements, we use:
* The selector and the DOM API 

#### Explanation
In JavaScript, in order to dynamically modify an HTML document (content or style), we use the selector API to target a particular part of the DOM, then the DOM API to modify the HTML content or the style of HTML elements.

For example:

    var title = document.querySelector("#mainTitle");
    title.innerHTML = "This new title has been changed from JavaScript!";

---





> Hello! So what can be done with JavaScript? Let me show you some
> examples that are the most common ones. First, you can change
> dynamically the content of a Web page. So here I've got a Web page, I
> click on the button and I change the content of the page. Another
> thing we can do is to change dynamically the CSS style of some part of
> the document. I click on the button and I change the style of the
> title. You can also use, from your JavaScript code, different objects,
> methods and functions that are defined in your browser, in what we
> called standard HTML or standard JavaScript APIs. HTML5 comes with
> many of these APIs for the geolocation, for animation, for making
> music, and so on. In this example, we use the standard W3C geolocation
> API that comes with HTML5. You can get from your browser, your current
> latitude and longitude. And here, we also use the Google Map APIs; we
> pass it the longitude and latitude and it displays the map centered on
> the current position and also displays the surface address. So, here
> we go. So, I'm located near Antibes in the south of France. You can
> also work with remote data. So in this code, I'm just sending what we
> call an Ajax request to a remote server to get a list of users… and
> once I get this list of users, I just use the HTML table JavaScript
> API for building dynamically tables. And I use this API to display the
> data that just came from a remote server. There is another example,
> that uses another database, another online database, for getting the
> members of a rock band. So, I type "The Beatles". I got from the
> remote server the list of the members of The Beatles. So, these were
> the most typical uses of JavaScript Web sites.


--- 

#### Module 1: Introduction to JavaScript > 1.3 JavaScript overview > Where to put JavaScript code

# Where to put JavaScript code

### Live coding video: where to put JavaScript code?



### Where to put JavaScript code?

JavaScript code can be located in different places

1.  In your HTML code between `<script>` and `</script>` tag
2.  In local files, usually ending with the .js prefix (i.e: in a script.js file), and included using, for example, a syntax such as: `<script src="style.js"></script>` tag
3.  In external files located on the Web, using their URLs, also using the <script src="http://www.aserver.com/..../js/script.js"></script> tag
Here are some examples:

### 1 - The JavaScript code is included in an HTML file using the <script>...</script> tag

***First variant:*** in the `<body>..</body>` of the HTML document

Typically:

```javascript
	<body>
	...
	 <script>
	   var x = 2;
	   // show a message in the body of the html document
	   document.body.innerHTML += "<b>JavaScript code executed. The value of the variable x is: " + x + "</b>";
	   // also print a message in the devtool console
	   console.log("JavaScript code executed");
	 </script>
	...
	</body>
```

> Old JavaScript examples may use a type attribute: 
> <script type="text/javascript">. 
> The type attribute is now obsolete and should be ignored.
	
	
	
***Second variant:*** in the `<head>...</head>` of the document

In this example, the `<script>...</script>` element is placed in the `<head>..</head>` section of an HTML page.

This time, we placed a JavaScript function that is invoked (called) when a button is clicked:	

```javascript
	<head>
	  <script>
		 function addSomeText() {
			// append a message in the body of the html document
			document.body.innerHTML += "<br>Function executed!";
		 }
	  </script>
	</head>
	<body>
	<button onclick="addSomeText();">Click me to call a JavaScript function that will add
	   some content to this document
	</button>
	</body>
```

### 2 - Put the JavaScript code in local .js files

Putting JavaScript code in external scripts files is easy, and offers many advantages:

1.  It separates HTML and code (and also CSS code, if you use external CSS files)
2.  It makes HTML and JavaScript easier to read and maintain
3.  JavaScript files can be reused more easily in other projects
4.  Cached JavaScript files can speed up page loads


A typical example:

```javascript
	<head>
	   ...
	   <link rel="stylesheet" href="css/style.css">
	   <script src="js/script.js"></script>
	</head>
```

#### To use an external JavaScript file:

1.  In the HTML, put the name of the script file in the src (source) attribute of a <script> tag, like in the typical example above,
2.  JavaScript files must end with the .js extension,
3.  Do no use any <script>...</script> tag in a .js file!
4.  Using an external JavaScript file with <script src="..."></script> is 100% equivalent to using <script>...</script> with the file content between the opening and closing tags. 
5.  It's possible to use more than one JavaScript file, just use multiple <script src="..."></script>

#### Example that uses more than one JavaScript file:

```javascript
	<head>
	   ...
	   <link rel="stylesheet" href="css/style.css">
	   <script src="js/script1.js"></script>
	   <script src="js/script2.js"></script>
	   <script src="js/anotherOne.js"></script>
	   ...
	</head>
```
#### A typical HTML/CSS/JS project folder structure, when working with external local files

It is good practice to locate CSS files in a css subfolder, and JavaScript files in a js subfolder.

Content of the index.html file:

```javascript
	...
	<head>
	   ...
	   <link rel="stylesheet" href="css/style.css">
	   <script src="js/script.js"></script>
	</head>
	<body>
	<h1>Example 3: JavaScript and CSS in local files!</h1>
	<button onclick="addSomeText();">Click me to call a JavaScript function that will add some content to this document</button>
	</body>
	</html>
```

Content of the js/script.js file (JavaScript file):

```javascript
function addSomeText() {
   document.body.innerHTML += "<p>Function executed!</p>";
}
```

Content of the style.css file:

```css
p {
   color:green;
}
```

How to run this example:

1.  Download the zip file of this project: Example_3.zip
2.  Unzip/unarchive it somewhere
3.  Double click the index.html file, this will open your Web browser and load the index.html file.
4.  Click on the button in the page

### 3 - Use external references to JavaScript files/libraries located on the Web

External JavaScript libraries (they are just big JS files) can be also referenced with a full URL, like in this example:

```javascript
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.22/paper.js"></script>
```

Here, we just included in our HTML document the excellent paperJS library that can be used to make fancy animations in the HTML canvas 
element - we will use it later in the course. 

Once the library is included, the JavaScript code you will write can call functions located in this library. This "reuse existing" work 
made by others is really common when working on JavaScript projects.

Here is a running example that uses the paperJS library, included using an external URL:

```html
	<!DOCTYPE html>
	<html>
	  <head>
		<title>Example 4: use an external JS file</title>
		<meta charset="utf-8"/>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.22/paper.js"></script>
	  </head> 
	  <body>	
			<canvas id="canvas" resize></canvas></body>

	</html>
```

```css
	body {
		bleh:adf;
		meh:d;
	}
	html {
	}
```

```javascript
	paperScript = function() {
		var mousePoint = view.center;
		var amount = 25;
		var colors = ['red', 'white', 'blue', 'white'];

		for (var i = 0; i < amount; i++) {
			var rect = new Rectangle([0, 0], [25, 25]);
			rect.center = mousePoint;
			var path = new Path.Rectangle(rect, 6);
			path.fillColor = colors[i % 4];
			var scale = (1 - i / amount) * 20;
			path.scale(scale);
			
		}

		function onMouseMove(event) {
			mousePoint = event.point;
		}

		var children = project.activeLayer.children;

		function onFrame(event) {
			for (var i = 0, l = children.length; i < l; i++) {
				var item = children[i];
				var delta = (mousePoint - item.position) / (i + 5);
				item.rotate(Math.sin((event.count + i) / 10) * 7);
				if (delta.length > 0.1)
					item.position += delta;
			}
		}
	}

	var a = document.createElement('script')
	a.setAttribute('type', 'text/paperscript');
	a.setAttribute('canvas', 'canvas');
	var src = paperScript.toString();
	a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
	document.body.appendChild(a);
```



> Welcome! In this video, we will just look at the different locations
> where we can put JavaScript code. So, the first place where you can
> put JavaScript code is inside an HTML document, using the <script> and
> </script> tags. So, we've prepared an example, it's called the
> "Example 1" in the page, that shows how we can display the value of a
> variable. A variable is a location in the memory of the computer where
> we are going to store some values. And the variable has a name and
> it's declared using the "var" keyword. There are others possibilities
> we will see later. So here we've got the variable called "x" that has
> the value of 2. And, we use some strange instruction
> "document.body.innerHTML" for adding to the body of the document some
> HTML code. So "document.body" corresponds in JavaScript to the body
> element of the document, and the "innerHTML" property corresponds to
> its HTML content. So, by doing this, we are adding a bold element
> JavaScript code executing the value of the variable x=2 and we display
> the value of the x variable in bold. So this is the result of the
> execution of this code. And this code is not in a function, so it's
> executed as soon as the page is rendered. When the browser receives
> this document, it will first display the "h1" then display this
> paragraph, then executes this code. It will define the variable x,
> assign the value "2" to it, and then add this string, with the value
> of "x" inside, to the body of the document. And finally, we display in
> the dev tool console: "console.log("JavaScript code executed")". We
> can open it by clicking on the console button in CodePen, or we can
> also open the devtools using the "F12" key or "ctrl+alt+i" or
> "cmd+alt+i" on a Mac. And you see that the "console.log" message has
> been displayed in the devtool console of your browser. Here, notice
> that we use the "script" element directly into the body of the
> document. Another possibility is to a put this code in the head of the
> document. It's also common practice because it separates clearly the
> JavaScript code from the HTML body of the document. In that case, the
> result is the same, except that the JavaScript code is displayed
> before the rest of the page. Here we defined the variable x, we added
> it to the body of the document , and later on we display the body,
> where the browser renders the body of the document. Okay, what is
> better? It depends on your application. For the moment, just stay with
> knowing that you can put scripts in the body or in the head of a
> document. Another possibility is to use an external JavaScript file.
> In that case, the same way we showed you how to use an external file
> for storing the CSS code, we can use the "script" tag with the "src"
> attribute to include in the HTML document an external JavaScript file.
> Notice than we can include more than one JavaScript file if we like,
> like this. In that example, we are including 3 different JavaScript
> files sequentially. So I prepared for you an example you can download
> - it's called "Example_3.zip". So I click on it, download it, unpack it, and inside this element, I've got an HTML file. And I open it with
> my Sublime Text editor. And what i've got here, is that you can see in
> the HTML header in that case but you can also put this in the body if
> you like, we included a "script.js" file located under the "js"
> directory. So I can open also this file. I can see that I just display
> the message called "Function executed" and a function "addSomeText"
> directly in the script. When is this executed? It's executed when we
> click on a button. So let's have the button "onclick" call the
> function "addSomeText". Let's execute this, here is the result: "Click
> me to call a JavaScript function that will add some content to this
> document". I click and you see that the function have been executed.
> And finally, the last thing you can do, is to include an external
> JavaScript source code. So you've got an example here, where we use
> the "paper.js" library and the "paper.js" library, if I open the
> "paper.js" Web site, is a library for making graphic animations in
> JavaScript, so you can have plenty of funny things you can do. Things
> like that, or things like this… Just to be able to use what this
> library proposes, you need to include the library. If you read the
> documentation, they will tell that you what you need to include...
> Okay -let's me open it in CodePen- ...you need to include this
> JavaScript file. And once you included this JavaScript file... a bit
> the same way we used the external library for plotting functions...
> then you can use some functionalities that come from the "paper.js"
> library. So you need to read the documentation to learn how to use it,
> but here is an example: a set of squares, animated squares, that
> follow the mouse.


---

#### Module 1: Introduction to JavaScript > 1.3 JavaScript overview > How to debug JavaScript

# How to debug JavaScript

### Live coding video: how to open the browser devtool console


### How to debug JavaScript

You will make errors!

When you are developing a Web Application that contains JavaScript code, you will make errors. 

Repeat after me: "I WILL MAKE ERRORS!" ; "I WILL MAKE ERRORS!"

So there will be error messages, and you will need to print messages for debugging your code. We will see more advanced debugging techniques at different points in this course, but for the moment, let's see the basics of JavaScript debugging: seeing error messages in the devtool console, or in the "console tab" of your source code editor.

We will not look at the JavaScript syntax here, but more at "JavaScript in the browser", how it works, how to start writing code, etc.

First of all, you need to find a way to debug your code and see errors. If your work does not produce any results, you need to know why!

Your Swiss army knife: your browser devtools, especially the devtool console!

For this you will use the dev. tools of your browser. Press F12 (or ctrl-shift-i) in Windows or cmd-alt-i in MacOS to open the dev. tools, then go to the console tab: this is where errors will be displayed, or messages of your own (use the console.log(string) JavaScript function in the JavaScript code embedded in your html page). In the console, you will be able to type any JavaScript command.

Let's look at this example on JS Bin:

```javascript

<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset=utf-8 />
  <title>Web Audio API</title>
  <script>
   console.log("Some JavaScript code has been executed");
  </script>
  </head>
  <body>
    <h1>JavaScript debugging using the dev tool console</h1>
  </body>
</html>

```

The simplest way to add JavaScript code in an HTML page is to use the `<script>...</script>` element.

The code in this example is executed sequentially when the page is loaded: the JavaScript code is executed before the browser could see the rest of the page (as the `<script></script>` is located before the `<body>`).

The H1 element, for example, does not exist in the Document Object Model, and has not yet been displayed when the JavaScript code is executed. If we move the `<script></script>` at the end of the document, then the H1 would have been built before the JavaScript code is executed.

The only line of code we have is `console.log("Some JavaScript code has been executed");`

This means "display in the JavaScript console the message...". If we open the console tab provided by jsbin.com in a dedicated tab (that redirects all console.log() messages), and re-execute the page (just type a space at the end of a line to re-render the page and display the message in the console), we see the message in the console tab, as well as in the dev. tools console. This is illustrated by the image below:


It is also possible to use the "real dev. tool console", and for this, I recommend running the application in a single window, not in the JsBin editor. Press the black arrow on the top right of the output window - this will render the page as a standalone Web page, then press F12. You should see:

Without such tools, debugging JavaScript code is impossible. So you need to look at some basic tutorials on how to use the dev. tools of your browsers, since they differ from one another in the way they work - although the principles remain the same.



---

#### Module 1: Introduction to JavaScript > 1.3 JavaScript overview > Discussion topics and projects

# Discussion topics and projects

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

See below for suggested topics of discussion and optional projects.

Suggested topics

* Which source code editor(s) do you use?
* If you use a source code editor that supports plugins/extension modules, which one do you recommend? Please share your experience with us in the forum!


Optional projects

* Share your versions of the examples from the course with improvements and changes!
* We are pretty sure that you can do something better with the "rock band member example". Share your best work(s) ;)
* Try to experiment further our "best way to learn JavaScript" and try to tweak an example of your own that uses the  paperJS library. Start from a simple example from the paperJS Web site, modify it and share it in the forum. You can look at the example from the course if you want to include paperJS in a shareable CodePen example (we use a version of paperJS located on a Content Delivery Network, a "CDN", no need to download it, and it's very easy to use it in online IDEs such as CodePen, JsBin, etc.).



---

### Module 1: Introduction to JavaScript > 1.4 Your first HTML/CSS/JS page > Introduction

# Introduction

### Let's create a small HTML/CSS/JS project together

It's time for you (and me) to create a small HTML/CSS/JS project, step by step, following some best practices. We will do this using different tools: source code editors + files but also two online IDEs (JsBin.com and CodePen.io). We will see how to write/debug the code and also how to migrate a project prototyped with online tools to a project you can run and edit on your hard drive using regular source code editors.

Many things we use in this example may be new to you. Don't worry. We will cover them either later on this week or over the following weeks. It's time to throw you in the deep end of the JavaScript world, getting you to write code, and look at examples etc. And from time to time, we will take a break and have a "real", "academic", look at the concepts of the language you have been using. We think this is the best way for you to learn!

#### Topic

We will write a small, interactive HTML page that will use some HTML input fields for indicating the name of a math function we'd like to plot, the ranges for the x and y values, the color of the curve etc.

We will first write this application online, using the JsBin.com editor, then we will do the same thing using the CodePen online editor, then, using a regular source code editor and .html, .css and .js files.

Here is what the resulting Web page will look like:

https://codepen.io/w3devcampus/pen/bqGboZ


SAFARI users: here is a version that comes with a polyfill for the <input type="color"> element 

This HTML element is not yet implemented in Safari (only in the Technical preview version).

So, if you want to see a color picker, try this version on CodePen!

We just added three lines in <head> of the HTML part, to include spectrum.js, the polyfill, and jQuery, that is used by this polyfill.


---


### Module 1: Introduction to JavaScript > 1.4 Your first HTML/CSS/JS page > Create the app with CodePen

# Create the app with CodePen

#### Live coding video: using CodePen

> Hi! We're going to work from an example we already saw in the course:
> the math function plotter. So, in this version, you can see that we
> added some input fields for changing the color of the curve, for
> changing the range of the x values, changing interactively the
> functions we are going to plot, and so on. Let's start from the very
> basic example we saw earlier on the course. We saw that, the function
> is located in a "div". And we just added a "section" tag from HTML5,
> just to identify the part of the document where the function is
> plotted. Later on, we'll add another "section" about the input fields
> and the different controls. You've got also a <body onload="plot();>",
> that means that when the page is loaded, we execute a JavaScript
> function named "plot()", that is located here. And it uses the
> "functionPlot()" function from the external library we use. This one.
> And it takes a set of parameters that are located at the beginning of
> the JavaScript part. That will indicate, within the target property,
> the "id" of the div where we are going to plot the function. In the
> data property is the function itself: "sin(x)" and its color: red. So
> what can we do to improve this? At first, we can add some CSS code to
> make this nicer. I'm going to change the view with CodePen. So let's
> resize that, and let's work on the CSS part: "Maximize CSS Editor". So
> what I can do, is that I can indicate that the div that contains this
> function wil have a rounded border, some shadows and so on. So now
> it's rounded, you can have add some shadows, height, margin and so on.
> So let's me just copy and paste some code I’ve prepared. So here we
> are. So now, what I've got, is a nicer presentation of the function
> itself. Now, I'm going to add a section that will contain the
> different controllers that are input fields from HTML5. So let's do
> it. I add a section called "plotSettings" that will contains all these
> controllers. Let's start for example with a controller for the color.
> So here we go. So, what we added here is a label color value and the
> color input field from HTML5. So, if I click here, it asks for a
> color. And we can also add an event listener: "onchange="plot(); ».
> That means: "when the color has been selected, call the plot()
> function". And you remember that this function is the one that plots
> the mathematical function, here. The plot function is here. So what we
> are going to do in this change color function ? It changes the
> property of the parameters here. So let's add some code for that...
> So, how can we get the value of the color from JavaScript before
> plotting the function? We are going to use the selector API:
> "document.querySelector(...)" for the input field whose id is "color".
> The value, here, is the color itself. So what we do is that we are
> going do use the color for changing this, here. So
> "parameters.data"... it's an array. So 0 is the first index, the first
> element that corresponds to the part that I highlight now.
> .color=color If I change the color, this line is executed and the
> color changes. We can use the same principles with other input fields.
> So let me just copy and paste some code I prepared, that will add all
> these different controllers. So, now I've got all the different
> controllers, and if you look at them, they all have an "onchange" or
> "oninput" event listener. Now, we’ve got 2 sections, 2 HTML sections:
> one with an "id="plotSettings"" that corresponds to the different
> input fields. And one with an "id="plot"" that corresponds to the
> function itself (the drawing here). So, if I want to have a nice look
> and feel, what I can do is to share the same borders and shadow
> properties from CSS, put the first section with the different input
> fields on the left and the plot on the right. So let me just cut and
> paste some CSS rules here, that will factorize the common properties
> for both sections in a section selector. OK, so what I've got now, is
> that I've got a nice balanced view of the whole application.

CodePen example with the starting code used in the video

If you want to code while watching the video, please open this CodePen. It contains the source code of the example we started coding from. 

And here is the same version with the polyfill for the <input type="color"> input field, not yet supported by Safari.

---


### Module 1: Introduction to JavaScript > 1.4 Your first HTML/CSS/JS page > Coding using SublimeText

# Coding using SublimeText

#### Live coding video: using SublimeText


> Now, I'm going to show you how we can do the same application using
> files and a regular source code editor, and working on your local hard
> disk. So, I'm going first to create a directory for storing the files
> on my desktop. "Math plotter app" and I will work inside. In this
> folder, I will create a subfolder named "js" for the js files and a
> subfolder named "css" for the CSS files, and the HTML file will lie in
> the current directory. So with Sublime Text, I can open this folder,
> the one I just created. And I can start saving the current file as
> "index.html". I will copy the HTML, CSS and JavaScript source code
> from the previous example. So, I just took the previous application.
> And I will copy it in the index.html file. I create a "style.css" and
> a "script.js" file for holding the JavasCript and CSS files. I copy
> the source code from the js part of the previous example. I create a
> new file with the CSS code. "Save as" … I include the JavaScript code
> :<script src="js/script.js"> Remember that the script tag has always a
> closing tag at this end. It is not an auto-closing tag. And I use a
> "link" tag for importing the CSS file. So I can check that my files
> are located at the right place and now I can "Open in Browser".
> Another way to do what we've done manually would have been to use the
> "Export" button from CodePen. So it will download a zip file, that
> will contain the whole architecture, the whole folders and subfolder
> I’ve already prepared for you. And it will also make the HTML file for
> you, that will include the JavaScript but in the end, instead of at
> the beginning of the source file, like what I did manually. So, using
> generated code can be useful, but most of the time for a big project
> or a serious project, you will be certainly use a source code editor
> like Sublime Text.




---

### Module 1: Introduction to JavaScript > 1.4 Your first HTML/CSS/JS page > Discussion and project

# Discussion and project

Discussions and project

Here is the discussion forum for this part of the course. Please either post your comments/observations/questions or share your creations.

Optional project

Share your version of the application, do not hesitate to go further, change things, etc.

---


#### Module 1: Introduction to JavaScript > 1.5 Variables, values, functions, operators and expressions > JS variables and values

# JS variables and values

### Live coding video: JavaScript variables


### JavaScript variables and values

In most of the examples that we have seen together we've used the concept of "variable", and we have used 
them to "store values". It's time to take a break and talk about them :-)

### Variables

Introduction

In order to remember a value, programming languages share the concept of "variables". When you write programs, 
you will need to store values in the computer's memory. By saving these values in "variables", by giving them 
a "name" (we call it an identifier), you can reuse them later for display, for computations, etc.

#### Create (declaring) a variable

With JavaScript versions < 5 (prior to 2015), there was a single way to create (we say "***declare***") a variable: 
using the `var` keyword, but with the subsequent versions (called ES2015/ES2016 or JavaScript 6/7) we can also use 
the keyword `let` (this has some subtle differences, which we'll explain later in the course when we will talk 
about "functions").

JavaScript is ***weakly typed***. Each variable is declared with the keyword var or let. So you are not required 
to specify the type of variable you are creating. After the keyword `var` and a space, just give the name of the variable.

#### Example:

```javascript
var myVar;
let x;
```


The first letter of a variable can only be `$`, `_`, `a` to `z`, or `A` to `Z`. The other characters in a name must be 
any of these, or numeric digits. The name is case sensitive. So variables `myVar` and `MyVar` are different variables.

There are some reserved names that you can't use as a variable name: `boolean`, `if`, `delete`, `var`, `function`, etc. 
as they are reserved words of the JavaScript language.

#### Give a value to a variable (assign a value to a variable)

A value can be assigned to a declared variable, or even directly in the variable declaration. For this, we use the 
equal character, also called "the assignment operator". 

#### Example:

(notice at line 4 one way to introduce comments in your code: start a line with "//"!)

```javascript
var myValue;
myValue = 78;

// With the ES2015 syntax. BTW, lines staring with // are comments!
let myNumber = 1.34;
```

At line 2, we are not saying that `myValue` and `78` are the same, we're saying "hey, I want to store the value 78, 
and I'm putting it in a variable whose name is "myValue". It's like giving an id to a location somewhere in the 
memory of the computer.

Using the id `myValue`, we store 78 into a memory location identified by the name `myValue`: a variable, or if you 
prefer, a value that can vary over time if we assign a new value to the variable `myValue` (for example by executing 
`myValue = 5;`).

You can also declare many variables at once by separating them with a comma. Always end each instruction line with 
a semi colon.

### Example:

```javascript
var myNumber1, myNumber2 = 34, myNumber3;
 
// Or with the ES2015 syntax, you can also use "let"
let x = 1, y = 3, z = 12;
```

Try the devtool console - you can type code in there too!

***Reminder***: you can always open the devtool console using F12 on windows, or ctrl-shift i, or cmd-alt-i on other 
computers.

If we copy and paste the variable declarations from the previous example, and type `myNumber2` in the devtool console, 
it will display `34` (while `myNumber1` will have an undefined value):

```javascript
> var myNumber1, myNumber2 = 34, myNumber3;
undefined
 
> // Or with the ES6 syntax you can also use "let"
undefined
 
> let x=1, y=3, z=12;
undefined
 
> x;
1
 
> z;
12
> myNumber2;
34
 
> myNumber1;
undefined
```

### Name conventions for variables

The JavaScript community has some conventions about naming variables:

The camelCase notation is preferred: `mySpaceShip`, `sumOfAllGrades`, etc.

For a variable, the first letter is lowercase and each first letter of each word is capitalized. 
Example: var myVariableName

#### Example:

```javascript
var myModel;
// ES2015 syntax
let michelBuffaAge = 51;
```

Most JavaScript examples you will find are written in the camelCase format. For harmony in the code source, it is a 
good idea to keep this convention. Sometimes, you will see the snake_case naming convention, which separates each 
word of a variable with an underscore.

Here's an interesting article: CamelCase vs underscores: [Scientific showdown](https://whathecode.wordpress.com/2011/02/10/camelcase-vs-underscores-scientific-showdown/)

### Constants

Constants are variables that cannot be modified after a value has been set.

The naming convention is to use uppercase letters with underscores.

With JavaScript 5, constants were declared as normal variables, using the var keyword, and there were no verifications 
by the JavaScript interpreter forbidding you to modify them after you assigned a value to them.

With ES2015/2016 it is recommended that you use the keyword const instead of var to declare them. This means 
that an error will be raised if you try to change their value in the future.

### Example:

```javascript
var TIME_LIMIT;
 
// ES2015 Syntax
const MAX_GRADE = 20;
```

### Summary

Here are a set of examples (using the let keyword, but they would also work with var):

```javascript
let a;
let thisIsAVariable;
let and_this_too; // but does not respect the usual naming convention
let mix12three;
// invalid!
let 2three4five; // can't start with a digit!
 
let a = 1
let v1, v2, v3 = 'hello', v4 = 4, v5;
 
// Beware with lowercase / uppercase
let case_matters = 'lower';
let CASE_MATTERS = 'upper';
```

#### Knowledge check 1.5.2 (not graded)

An undefined variable is:

A variable that has been declared but not initialized

#### Explanation
An undefined variable x is a variable that has been declared with var x; or with let x; but that has no value yet. 
An error is triggered only when the variable is used in an expression such as var z = x + y;. A console.log(x) would 
give the value "undefined".


---

#### Module 1: Introduction to JavaScript > 1.5 Variables, values, functions, operators and expressions > Scope of variables

# Scope of variables

### Live coding video: scope of JavaScript variables


> Hi! Let’s talk about "variable scopes". The scope of a variable
> corresponds to the locations in your code where you can use this
> variable. When you define... when you declare a variable outside of
> any functions, it’s usable anywhere in your code. It’s considered as a
> "global variable": it belongs to the "global scope". So, the x
> variable here, can be used inside a function. The console.log inside
> f1… if I execute f1… will display the value “1” because the variable
> here is "global". If I’ve got another function… f2, that declares
> another variable y, and if I try to display this value from outside of
> the function, then it does not work… I’ve got an error: y is not
> defined. So, you’ve got "local variables", and "global variables". In
> the case of local variables, when a variable has the same name as a
> global variable, then the most local one wins. If I try to display
> inside F2 the value of x, it will be the closest variable
> -the local one- that will be displayed. If I execute f2, then it will display "x = 2", it’s the value of the local one that is taken into
> account, not the value of the global one. We call this "masking". The
> same... if I pass a parameter to a function, and if this parameter has
> the same name as a global variable, then it acts as a local variable,
> and it’s the value of the local parameter that is taken into account.
> This x here, is not the global one: it’s the one I passed as a
> parameter that has the value 10. Ok. So now, there are some little
> variations when I use "let" instead of "var". Ok, let’s see some
> examples. So, with JavaScript 6, I can use "let" instead of "var". The
> global scope does not change. If I declare a global variable, it can
> be used anywhere. But, if I declare a local variable, it’s no more
> local to the whole function in which it is defined, but it’s local to
> the block of instructions that is defined by an opening brace and a
> closing brace. So, if I try to use this variable here, that is defined
> in the block, outside of the block but inside of the function, the
> “a”…, the value of the variable “a” here, will not be the value of the
> local variable here, because this one does not exist, it’s not usable
> here. It will be the global variable "a" that will be used. So this is
> why the printed value here, when I execute “f“ is "1" and not "4". If
> the variable was named “b” and if I tried to display it, then… I’ve
> got an error: "b is not defined". Remember that if I used "var" in
> that case it works, because "var" will define a variable local to the
> whole function, not just to the block of instructions.


### Scope of JavaScript variables

### 1 - JavaScript 5 / ES5 scopes, with the var keyword

***JavaScript 5 / ES5 has the var keyword for declaring variables.***

JavaScript 5 / ES5 has two scopes: 
1. a global scope for declaring global variables, and 
2. a function scope for declaring variables that are local to a function.

Furthermore, like in most programming languages, inside a function, a ***local variable masks a global variable that has the same name***.

See examples below.

#### 1.1 - Global scope / global variable

Global variables are variables declared outside of functions. They can be used anywhere in the code.

Here is an example:

```javascript
var x = 1;

// global scope
function f1() {
  console.log(x); // displays '1' in devtool console
}

f1();
```

#### 1.2 - Local scope / local variable (also called function scope)

Variables declared with the keyword `var` in a function, are said to be "local to the function". They "mask" any global variable that may 
have the same name.

When a variable is declared in a function, we also call it simply "a local variable", as opposed to "a global variable". In JavaScript 5 
(and this is not common in programming languages), local variables are local to the function. They can be used anywhere inside the function.

Most programming languages have local variables that are limited to the block of instructions between '{' and '}' that contains the variable 
declaration. We call these variables "block variables". This is the case with variables declared with the `let` keyword  introduced by 
JavaScript 6 / ES6. See examples at the end of this section.

Example of a local variable declared in a function, that is NOT local to the block, but to the whole function:

```javascript
var a = 1; // global variable

function f() {
  if (true) {
    // this is a block, defined by "{" and "}"
    var a = 4; // this "a" is NOT local to the block
  }

  alert(a); // alerts '4', not the global value of '1'
            // a variable declared with "var" in a 
            // function is local to the function!
            // and can be used anywhere in the function
            // so here, the local a masks the global a!
}
```

Here is another example that shows the differences between global and local variables, and highlights the "masking" of global variables by 
local variables when they share the same name.

```javascript
var x = 1; // global variable, could be "masked" by local variables

function f2(x) {
  console.log(x); // displays the given argument  
                  // not the global value of x (value = 1)
                  // the x parameter acts as a variable
                  // local to the function, that "masks"
                  // the global variable x
}

f2(3); // will display 3

// local scope again
function f3() {
  var x = 4;      // local variable, scope = the function
  console.log(x); // displays '4'. The local variable x
                  // "masks" the global variable x
}

f3(); // will display '4' 
```

#### 1.3 Never declare a variable without the keyword var!

JavaScript is sometimes an overly permissive language. We can make stupid errors that turn out to be very hard to detect. One such error occurs when we forgot to use the var keyword while declaring a local variable.

**In JavaScript 5 / ES5, a variable declared in a function without the var keyword, makes it a global variable**.

> GOOD PRACTICE: in JavaScript 5 / ES5, always use the keyword var when declaring a global or a local variable. 

> Better: use the keyword let if you target browsers that support JavaScript 6 or above.

Here is an example that shows what happens when you forget to use var or let while declaring a local variable:

```javascript
// local scope again, but mistake! We forgot var
// when declaring the local variable x
// -> same as declaring a global function var x = 3; 
function f3() {
  x = 3;      // mistake, we forgot "var"
              // x is no more a local variable, 
              // x is now global!
  var y = 5;  // real local variable
  console.log(x); // displays '3'. 
}

function f4() {
  console.log(x); // will display 3 even if there is no
                  // global declaration var x outside of 
                  // functions. The error in the declaration of x
                  // in f3 has made x global
}

function f5() {
  console.log(y); // error, no global variable y
}

f3(); // displays 3
f4(); // displays 3, x declared without var in f3
      // is considered global, and usable in f4

f5(); // error, y is a variable local to the f3 function
```


### 2 - JavaScript 6 / ES6 scopes, with the let keyword

JavaScript 6 / ES6 has the `let` keyword for declaring variables, and the `const` keyword for declaring constants.

JavaScript 6 / ES6 has two scopes: 
1. a global scope for declaring global variables, and 
2. a block scope for declaring variables between `{` and `}`. This is similar to what we find in many other programming languages such as Java, C# etc.

Furthermore, like in most programming languages, inside a block, a local variable masks other variables located in higher scopes 
(global or in another block that contains the current block).

Example of a local variable declared with the let keyword. Its scope is the block:

```javascript
var a = 1; // global variable

function f() {
  if (true) {
    // this is a block, defined by { and }
    let a = 4; // this "a" IS LOCAL TO THE BLOCK
  }

  alert(a); // alerts '1', a is the global variable
            // a variable declared with "let" in a 
            // block is local to the block!
            // and is not defined anywhere else
            // The a defined in the if block is not
            // visible here, so the a we have here
            // is the "global" a!
}
```


### 3 - Recommended way to declare variables: var or let?

Well, all modern browsers support the let and const keywords, however, if you target old browsers such as:

* Internet explorer 10 and below (no support)
* Firefox 43 and below (no support)
* Safari 9 and below (no support)
* Opera Mini 8 and below (no support)
* Android browser 4 and below (no support)
* Opera 36 and below (partial support)
* Chrome 51 and below (partial support)

... it's better to use the var keyword, or you can use some advanced tools called ***"transpilers"*** that will translate your JavaScript 6 / ES6 code into pure 
JavaScript 5 code (like **Traceur** or **Babel**). 


---

### Module 1: Introduction to JavaScript > 1.5 Variables, values, functions, operators and expressions > JS data types

# JS data types

### Live coding video: JavaScript data types

























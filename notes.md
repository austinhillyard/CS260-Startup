# **NOTES**

### *[README.md](/README.md)*

## Git
When working with git, your bread and butter is:
```
git pull
git add .
git commit
git push
```
## Web Servers
* Learned to assign an elastic ip address to server. Permanent ip is 18.205.101.148
* To remote in the server:
  ```
  ssh -i [key pair file] ubuntu@[ip address]
  ```
* To change permission on the file
  ```
  chmod 600 [file]
  ```
  * 600 is rw, 400 is r.

## DNS Servers
* Broken up into a root domain.
  ```
              -----root----
  [subdomain.]secondary.top
  ```
* DNS servers associate the text name with an IP address
* Two types of DNS
  * addres (A), maps IP onto domain name
  * canonical name (CNAME), maps one domain name onto another one.

### My Domain: gametracker.click

### My Elastic IP Address: 18.205.101.148

## Caddy
* Handles rotation of web certificates. Supports HTTPS
* Acts as a gateway and will redirect subdomain requests properly
* Serves up all static HTML, CSS< and JavaScript files
* HTML files:
    * Directory of files that Caddy servers up when request are made to the root or your web server.
 
## Push files to AWS server: ```./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon```

## HTTPS
* Secure version of HTTP, data is encrypted and protected by TLS.
* Let's Encrypt is a non profit IETF ACME protocol to encrypt requests
* Update the caddy file to replace port :80 with your domain name, and where ever it says "yourdomain"
* This will make it defaul to port 443 which will use caddy as a gateway and use HTTPS

# HTML (Hyper text markup language)

### Elements and tags
* Based of HTML document
```html
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
  * html represents top level page structure
  * Head represents the metadata of the page
  * body represents content structure
  * main element represents the main content structure, as opposed to headers and such.

### Attributes
* Every element and tag can have attributes.
```html
<p id="hello" class="greeting">Hello world</p>
```

### Hyperlinks
* Represented by a anchor tag ```<a href="https://gametracker.click">GameTracker</a>```

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```

### Block vs. Inline
* A block tag sets the bounds of content, like \<p>
* An inline does <b>not</b> <span>disrupt</span> flow, like \<b> or \<span>


### Common HTML Tags
<table>
<thead>
<tr>
<th>element</th>
<th>meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>html</code></td>
<td>The page container</td>
</tr>
<tr>
<td><code>head</code></td>
<td>Header information</td>
</tr>
<tr>
<td><code>title</code></td>
<td>Title of the page</td>
</tr>
<tr>
<td><code>meta</code></td>
<td>Metadata for the page such as character set or viewport settings</td>
</tr>
<tr>
<td><code>script</code></td>
<td>JavaScript reference. Either a external reference, or inline</td>
</tr>
<tr>
<td><code>include</code></td>
<td>External content reference</td>
</tr>
<tr>
<td><code>body</code></td>
<td>The entire content body of the page</td>
</tr>
<tr>
<td><code>header</code></td>
<td>Header of the main content</td>
</tr>
<tr>
<td><code>footer</code></td>
<td>Footer of the main content</td>
</tr>
<tr>
<td><code>nav</code></td>
<td>Navigational inputs</td>
</tr>
<tr>
<td><code>main</code></td>
<td>Main content of the page</td>
</tr>
<tr>
<td><code>section</code></td>
<td>A section of the main content</td>
</tr>
<tr>
<td><code>aside</code></td>
<td>Aside content from the main content</td>
</tr>
<tr>
<td><code>div</code></td>
<td>A block division of content</td>
</tr>
<tr>
<td><code>span</code></td>
<td>An inline span of content</td>
</tr>
<tr>
<td><code>h&lt;1-9&gt;</code></td>
<td>Text heading. From h1, the highest level, down to h9, the lowest level</td>
</tr>
<tr>
<td><code>p</code></td>
<td>A paragraph of text</td>
</tr>
<tr>
<td><code>b</code></td>
<td>Bring attention</td>
</tr>
<tr>
<td><code>table</code></td>
<td>Table</td>
</tr>
<tr>
<td><code>tr</code></td>
<td>Table row</td>
</tr>
<tr>
<td><code>th</code></td>
<td>Table header</td>
</tr>
<tr>
<td><code>td</code></td>
<td>Table data</td>
</tr>
<tr>
<td><code>ol,ul</code></td>
<td>Ordered or unordered list</td>
</tr>
<tr>
<td><code>li</code></td>
<td>List item</td>
</tr>
<tr>
<td><code>a</code></td>
<td>Anchor the text to a hyperlink</td>
</tr>
<tr>
<td><code>img</code></td>
<td>Graphical image reference. Specify src tag.</td>
</tr>
<tr>
<td><code>dialog</code></td>
<td>Interactive component such as a confirmation</td>
</tr>
<tr>
<td><code>form</code></td>
<td>A collection of user input</td>
</tr>
<tr>
<td><code>input</code></td>
<td>User input field</td>
</tr>
<tr>
<td><code>audio</code></td>
<td>Audio content</td>
</tr>
<tr>
<td><code>video</code></td>
<td>Video content</td>
</tr>
<tr>
<td><code>svg</code></td>
<td>Scalable vector graphic content</td>
</tr>
<tr>
<td><code>iframe</code></td>
<td>Inline frame of another HTML page</td>
</tr>
</tbody>
</table>

### HTML Input

<table>
<thead>
<tr>
<th>Element</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>form</code></td>
<td>Input container and submission</td>
<td><code>&lt;form action="form.html" method="post"&gt;</code></td>
</tr>
<tr>
<td><code>fieldset</code></td>
<td>Labeled input grouping</td>
<td><code>&lt;fieldset&gt; ... &lt;/fieldset&gt;</code></td>
</tr>
<tr>
<td><code>input</code></td>
<td>Multiple types of user input</td>
<td><code>&lt;input type="" /&gt;</code></td>
</tr>
<tr>
<td><code>select</code></td>
<td>Selection dropdown</td>
<td><code>&lt;select&gt;&lt;option&gt;1&lt;/option&gt;&lt;/select&gt;</code></td>
</tr>
<tr>
<td><code>optgroup</code></td>
<td>Grouped selection dropdown</td>
<td><code>&lt;optgroup&gt;&lt;option&gt;1&lt;/option&gt;&lt;/optgroup&gt;</code></td>
</tr>
<tr>
<td><code>option</code></td>
<td>Selection option</td>
<td><code>&lt;option selected&gt;option2&lt;/option&gt;</code></td>
</tr>
<tr>
<td><code>textarea</code></td>
<td>Multiline text input</td>
<td><code>&lt;textarea&gt;&lt;/textarea&gt;</code></td>
</tr>
<tr>
<td><code>label</code></td>
<td>Individual input label</td>
<td><code>&lt;label for="range"&gt;Range: &lt;/label&gt;</code></td>
</tr>
<tr>
<td><code>output</code></td>
<td>Output of input</td>
<td><code>&lt;output for="range"&gt;0&lt;/output&gt;</code></td>
</tr>
<tr>
<td><code>meter</code></td>
<td>Display value with a known range</td>
<td><code>&lt;meter min="0" max="100" value="50"&gt;&lt;/meter&gt;</code></td>
</tr>
</tbody>
</table>

### Input tag types
<table>
<thead>
<tr>
<th>Type</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>Single line textual value</td>
</tr>
<tr>
<td>password</td>
<td>Obscured password</td>
</tr>
<tr>
<td>email</td>
<td>Email address</td>
</tr>
<tr>
<td>tel</td>
<td>Telephone number</td>
</tr>
<tr>
<td>url</td>
<td>URL address</td>
</tr>
<tr>
<td>number</td>
<td>Numerical value</td>
</tr>
<tr>
<td>checkbox</td>
<td>Inclusive selection</td>
</tr>
<tr>
<td>radio</td>
<td>Exclusive selection</td>
</tr>
<tr>
<td>range</td>
<td>Range limited number</td>
</tr>
<tr>
<td>date</td>
<td>Year, month, day</td>
</tr>
<tr>
<td>datetime-local</td>
<td>Date and time</td>
</tr>
<tr>
<td>month</td>
<td>Year, month</td>
</tr>
<tr>
<td>week</td>
<td>Week of year</td>
</tr>
<tr>
<td>color</td>
<td>Color</td>
</tr>
<tr>
<td>file</td>
<td>Local file</td>
</tr>
<tr>
<td>submit</td>
<td>button to trigger form submission</td>
</tr>
</tbody>
</table>

Many input types have built in validation, but you can also specify additional restrictions.

### HTML Media
* img, audio, and video are all external media that need a source specified, and should always include an alt tag describing the media.
  * audio and video can have control tag to allow user to control playback, can also include loop and autoplay tags.
* svg and canvas both contain code to render a visual image. This image can be animated.


# CSS (Cascading Style Sheets)

Helps the developer build complex designs and responsive dynamic content. ALlows changing the layout of the page based on device and orientation

## Components
* ***Rulesets (Rules)*** : 
  * ***Selector*** : Selects elements to apply rule to.
    * ***Declaration*** :
      * ***Property*** : Property of element
      * ***Value*** : Value to give property

```css
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```

### Associate HTML and CSS
  * style attribute of HTML element
    ```html
    <p style="color:green">CSS</p>
    ```
  * style HTML element to define CSS rules
    ```html
    <head>
      <style>
        p {
          color: green;
        }
      </style>
    </head>
    <body>
      <p>CSS</p>
    </body>
    ```
  * HTML Link element to create a hyperlink reference to an external file containing CSS rules.
    ```html
    <link rel="stylesheet" href="styles.css" />
    ```

### Cascading
Elements will inherit the style of their parents, but lower level styling will override inherited styles.

### Box Model
Everythign is a box in CSS. It's boxes within boxes.
* The inner most box actually holds the content. Text or image.
* The next box contains the padding. Usually the background color.
* Next box is the border, which has color, thicknexx, and line style.
* Margin is the last box. External element of white space.

## Selectors

### Element Selectors
* select an element and make all elements in that document follow that rule.
  ```css
  body {
    font-family: sans-serif;
  }

  h1 {
    border-bottom: thin black solid;
  }

  section {
    background: #eeeeee;
    padding: 0.25em;
    margin-bottom: 0.5em;
  }
  ```

### Combinators
  * Selector that applies to given combination.
  <table>
<thead>
<tr>
<th>Combinator</th>
<th>Meaning</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Descendant</td>
<td>A list of descendants</td>
<td><code>body section</code></td>
<td>Any section that is a descendant of a body</td>
</tr>
<tr>
<td>Child</td>
<td>A list of direct children</td>
<td><code>section &gt; p</code></td>
<td>Any p that is a direct child of a section</td>
</tr>
<tr>
<td>General sibling</td>
<td>A list of siblings</td>
<td><code>p ~ div</code></td>
<td>Any p that has a div sibling</td>
</tr>
<tr>
<td>Adjacent sibling</td>
<td>A list of adjacent sibling</td>
<td><code>p + div</code></td>
<td>Any p that has an adjacent div sibling</td>
</tr>
</tbody>
</table>

### Class Selector
Apply to only elements with the given specification
```css
.summary {
  font-weight: bold;
}
```
Can also apply to a specific element with that class
```css
p.summary {
  font-weight: bold;
}
```

### ID Selectors
Reference the ID of an element. Ideally HTML IDs are unique so the specification can be specific.
```css
#physics {
  border-left: solid 1em purple;
}
```

### Attribute Selector
Select elements based on their attributes.
  * Where href="./cow.png"

Can include wild cards to match some text
  * Where href*="https://"

```css
p[class='summary'] {
  color: red;
}
```

### Pseudo Selectors
Select based on positional relationship, mouse interactions, etc.
```css
section:hover {
  border-left: solid 1em purple;
}
```

## Declarations

### Properties
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
<th>Example</th>
<th>Discussion</th>
</tr>
</thead>
<tbody>
<tr>
<td>background-color</td>
<td>color</td>
<td><code>red</code></td>
<td>Fill the background color</td>
</tr>
<tr>
<td>border</td>
<td>color width style</td>
<td><code>#fad solid medium</code></td>
<td>Sets the border using shorthand where any or all of the values may be provided</td>
</tr>
<tr>
<td>border-radius</td>
<td>unit</td>
<td><code>50%</code></td>
<td>The size of the border radius</td>
</tr>
<tr>
<td>box-shadow</td>
<td>x-offset y-offset blu-radius color</td>
<td><code>2px 2px 2px gray</code></td>
<td>Creates a shadow</td>
</tr>
<tr>
<td>columns</td>
<td>number</td>
<td><code>3</code></td>
<td>Number of textual columns</td>
</tr>
<tr>
<td>column-rule</td>
<td>color width style</td>
<td><code>solid thin black</code></td>
<td>Sets the border used between columns using border shorthand</td>
</tr>
<tr>
<td>color</td>
<td>color</td>
<td><code>rgb(128, 0, 0)</code></td>
<td>Sets the text color</td>
</tr>
<tr>
<td>cursor</td>
<td>type</td>
<td><code>grab</code></td>
<td>Sets the cursor to display when hovering over the element</td>
</tr>
<tr>
<td>display</td>
<td>type</td>
<td><code>none</code></td>
<td>Defines how to display the element and its children</td>
</tr>
<tr>
<td>filter</td>
<td>filter-function</td>
<td><code>grayscale(30%)</code></td>
<td>Applies a visual filter</td>
</tr>
<tr>
<td>float</td>
<td>direction</td>
<td><code>right</code></td>
<td>Places the element to the left or right in the flow</td>
</tr>
<tr>
<td>flex</td>
<td></td>
<td></td>
<td>Flex layout. Used for responsive design</td>
</tr>
<tr>
<td>font</td>
<td>family size style</td>
<td><code>Arial 1.2em bold</code></td>
<td>Defines the text font using shorthand</td>
</tr>
<tr>
<td>grid</td>
<td></td>
<td></td>
<td>Grid layout. Used for responsive design</td>
</tr>
<tr>
<td>height</td>
<td>unit</td>
<td><code>.25em</code></td>
<td>Sets the height of the box</td>
</tr>
<tr>
<td>margin</td>
<td>unit</td>
<td><code>5px 5px 0 0</code></td>
<td>Sets the margin spacing</td>
</tr>
<tr>
<td>max-[width/height]</td>
<td>unit</td>
<td><code>20%</code></td>
<td>Restricts the width or height to no more than the unit</td>
</tr>
<tr>
<td>min-[width/height]</td>
<td>unit</td>
<td><code>10vh</code></td>
<td>Restricts the width or height to no less than the unit</td>
</tr>
<tr>
<td>opacity</td>
<td>number</td>
<td><code>.9</code></td>
<td>Sets how opaque the element is</td>
</tr>
<tr>
<td>overflow</td>
<td>[visible/hidden/scroll/auto]</td>
<td><code>scroll</code></td>
<td>Defines what happens when the content does not fix in its box</td>
</tr>
<tr>
<td>position</td>
<td>[static/relative/absolute/sticky]</td>
<td><code>absolute</code></td>
<td>Defines how the element is positioned in the document</td>
</tr>
<tr>
<td>padding</td>
<td>unit</td>
<td><code>1em 2em</code></td>
<td>Sets the padding spacing</td>
</tr>
<tr>
<td>left</td>
<td>unit</td>
<td><code>10rem</code></td>
<td>The horizontal value of a positioned element</td>
</tr>
<tr>
<td>text-align</td>
<td>[start/end/center/justify]</td>
<td><code>end</code></td>
<td>Defines how the text is aligned in the element</td>
</tr>
<tr>
<td>top</td>
<td>unit</td>
<td><code>50px</code></td>
<td>The vertical value of a positioned element</td>
</tr>
<tr>
<td>transform</td>
<td>transform-function</td>
<td><code>rotate(0.5turn)</code></td>
<td>Applies a transformation to the element</td>
</tr>
<tr>
<td>width</td>
<td>unit</td>
<td><code>25vmin</code></td>
<td>Sets the width of the box</td>
</tr>
<tr>
<td>z-index</td>
<td>number</td>
<td><code>100</code></td>
<td>Controls the positioning of the element on the z axis</td>
</tr>
</tbody>
</table>

### Units

Absolute Units and Relative units:

<table>
<thead>
<tr>
<th>Unit</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>The number of pixels</td>
</tr>
<tr>
<td>pt</td>
<td>The number of points (1/72 of an inch)</td>
</tr>
<tr>
<td>in</td>
<td>The number of inches</td>
</tr>
<tr>
<td>cm</td>
<td>The number of centimeters</td>
</tr>
<tr>
<td>%</td>
<td>A percentage of the parent element</td>
</tr>
<tr>
<td>em</td>
<td>A multiplier of the width of the letter <code>m</code> in the parent's font</td>
</tr>
<tr>
<td>rem</td>
<td>A multiplier of the width of the letter <code>m</code> in the root's font</td>
</tr>
<tr>
<td>ex</td>
<td>A multiplier of the height of the element's font</td>
</tr>
<tr>
<td>vw</td>
<td>A percentage of the viewport's width</td>
</tr>
<tr>
<td>vh</td>
<td>A percentage of the viewport's height</td>
</tr>
<tr>
<td>vmin</td>
<td>A percentage of the viewport's smaller dimension</td>
</tr>
<tr>
<td>vmax</td>
<td>A percentage of the viewport's larger dimension</td>
</tr>
</tbody>
</table>

### Color
<table>
<thead>
<tr>
<th>Method</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyword</td>
<td><code>red</code></td>
<td>A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)</td>
</tr>
<tr>
<td>RGB hex</td>
<td><code>#00FFAA22</code> or <code>#0FA2</code></td>
<td>Red, green, and blue as a hexadecimal number, with an optional alpha opacity</td>
</tr>
<tr>
<td>RGB function</td>
<td><code>rgb(128, 255, 128, 0.5)</code></td>
<td>Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage</td>
</tr>
<tr>
<td>HSL</td>
<td><code>hsl(180, 30%, 90%, 0.5)</code></td>
<td>Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.</td>
</tr>
</tbody>
</table>


## Fonts

``` font-family ```
Defines what font family should be used.
  * Represents an ordered list of fonts, as not every OS has the same fonts available.

### Font Families
There are four major families of fonts:
* Serif
  * Small stroke attached to the ends of a character's major strokes.
* sans-serif
  * Sans serif fonts do not have an extra stroke
* fixed
  * All characters are the same size
* symbol
  * Represent non language characters such as arrows and emojis.

### Importing Fonts
To have a browser load a font from your server you use the ```@font-face``` rule and provide the font name and source location
  ```css
  @font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

To host them from a provider, you use the ```@import``` rule.

Google has a host of open source of fonts without any royalties
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

## CSS Animation
The animation properties help define Animations

**keyframes** specify what the element should look like at different times in the animation.

```css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```

Animation name refers to the keyframes, and the duration specifies how long it should take.

```css
@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

This starts from 0% verticle height of parent, goes to 21% 95% of the way through the animation, and shrinks back down to 20% as a bounce back effect.

## Responsive Display

### Display
The ability of a application to accommodate and take advantage of the screen's size and orientation.

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation. 

```css
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

![Alt text](image.png)

### Viewport meta tag
Tells the screen to not scale the page based on the screen's size
```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

### Float
Float CSS property moves an element to the left or right of its container element and allows inline elements to wrap around it.
```css
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```

### Media Queries
```@media```

Selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

It will tell us which side of the screen (viewport) is the longest.

Basically is a boolean if statement that applies the rule if the media query comes back true

```css
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
```
```css
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```

## Grid

Display a group of child elements in a responsive grid. 
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
Grid Template columns specify to autofill children according to the minimum width and max 1fr

```fr``` is a fractional unit, dynamically computd by splitting up the parent element's width into equal parts for each of the children.

## Flexbox
```flex``` is a display layout that partitions your applicatino into areas that responsively move around as the window resizes.

Tells the browser that the children are to be displayed in a flex flow. 
```css
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```
* The flow is a column layout, with no margins and takes up 100% of the view.
---

```css
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```
* Defines all the areas in the flex and their size.
* Main is also another flex display for it's children.

---
```css
flex: 0 80px;
```
* The first number means it cannot grow in size, and has a starting size of 80 pixels

---

```css
flex: 1;
```
* This element will get 1 fractional unit of growth, and since it is the only child with growth value, it will get all of the space.
---
```css
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```

* Styles the children of main so that the first section gets 1 unit of growth, and the second section gets 3 units of growth

### Media Query with Flex
If we are in portrait, drop the header and footer, and arrange things in columns instead of rows
```css
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```

## CSS Debugging
Chrome browser has the insepct mode, and you can see the CSS boxes and see how the padding and aligns are functioning, and turn them on and off at will.

## CSS Frameworks
Open source packages of commonly used CSS frameworks that can be used and are industry standards
* Tailwind is a new rising contender that focuses on putting sytles in HTML elements to reduce CSS file sizes.

### Bootstrap
Bootstrap is the industry lead for CSS frameworks. One downside is how standard it is, so it's difficult to be unique.

### Integrating Bootstrap
Simply reference the Bootstrap CSS files form the content delivery network (CDN) in a HTML link element.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```

If you are using Bootstrap components that require JavaScript, you need to reference the Script module as well
```html
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```
You can also run this command to include it in your source code to not rely on a server
```
npm install bootstrap@5.2.3
```
  * Make sure to include the most updated version.



# Javascript

Javascript uses an interpreter at runtime instead of compiling. Very portable but can have many errors.

```console.log();``` Outputs string to console.

## Javascript Console

### Log
* Basic operation is to output a log message.
* Allows string formatting
* Can even specify css declarations to style log output
  ```js
  console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
  // OUTPUT: JavaScript Demo //in large green text
  ```

### Timers
See how long a piece of code takes to run
```js
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
```

### Count
See how many times a block of code is called
```js
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```

## Adding Javascript to HTML
* Include directly with the ```<script>``` element
* Or link a javascript file with the src tag on a ```<script>``` element
  ```html
    <head>
      <script src="javascript.js"></script>
    </head>
    <body>
      <button onclick="sayHello()">Say Hello</button>
      <button onclick="sayGoodbye()">Say Goodbye</button>
      <script>
        function sayGoodbye() {
          alert('Goodbye');
        }
      </script>
    </body>
  ```
The onclick attributes automatically create listeners that run the target code when active.

## Types and Constructs

### Variables
Variables are declared using `let` or `const`. `let` can be changed later, and `const` obviously cannot.

## Primitive Types

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

## Object Types

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

## Common Operators
* Numbers
  * \+ (add)
  * \- (substract)
  * \* (Multiply)
  * / (Divide)
  * === (Equality)
* Strings
  * \+ (Concatenation)
  * === (Equality)

## Type Conversions
Javascript is weakly typed. Variables always have a type but can change when it is assigned a new value, or types that can be automatically covernted based upon the context that they are used in.

This can cause confusion with some automatic conversions, so JavaScript has strict equality (`===`) and inequality (`!==`) operators. These skip the type conversion when comparing.

## Conditionals
 Appropriately named `if`, `else`, `else if` key words (Screw you python)

 ```js
 if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
 ```

 Also supports the ternary operator
 ```js
 a === 1 ? console.log(1) : console.log('not 1');
 ```

 Also supports boolean operators
```js
if (true && (!false || true)) {
  //...
}
```

## Loops
* For loop

  ```js
  for (let i = 0; i < 2; i++) {
  console.log(i);
  }
  // OUTPUT: 0 1
  ```

* do while

  ```js
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 2);
  // OUTPUT: 0 1
  ```

* while loop

  ```js
  for (let i = 0; i < 2; i++) {
  console.log(i);
  }
  // OUTPUT: 0 1
  ```

* for in

  ```js
  const obj = { a: 1, b: 'fish' };
  for (const name in obj) {
    console.log(name);
  }
  // OUTPUT: a
  // OUTPUT: b
  ```

* for of (Iterates over iterables, so Map and Set friendly)
  ```js
  const obj = { a: 1, b: 'fish' };
  for (const name in obj) {
    console.log(name);
  }
  // OUTPUT: a
  // OUTPUT: b
  ```

* Also supports the `break` and `continue` keywords.

## Strings
Primitive type. can use \` " or ' to mark strings. " and ' are equivalent, \` means a string literal, a string literal contains javascript that is evaluate to format the string.
  ```js
  'quoted text'; // " also works

  const l = 'literal';
  console.log(`string ${l + (1 + 1)} text`);
  // OUTPUT: string literal2 text
  ```

Javascript does support Unicode UTF-16 for easier internationalization, though there is a lot of steps to make that a complete process, (Units of measure, keyboard layouts, time, customs)

### Functions
Several useful functions with strings:
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |

```js
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

## Functions
In Javascript Functions are first class objects. They be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like a variable.

Requires the `function` keyword. No type declarations. Does not require a return keyword, can be "void"

```js
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```
No return:
```js
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```

### Function Parameters
When a function is called, not all parameters be specified. If this is the case, then the extra parameter's value is `undefined`

Parameters can also have a default value that is specified.
```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

### Anonymous Functions
Javascript functions can be anonymous and assigned to a variable or passed in as a parameter
```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

Some more examples of functions being passed in as operators and assigned to variables
```js
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```

### Inner Functions
Functions can also be defined inside other functions. This allows modularlization without exposing your functions
```js
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
```

## JavaScript Arrow Function
An inline function declaration that allows compactness.

A function that always returns 3 and takes no parameters.
```js
() => 3;
```
Two equivalent sort functions.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

### Return Values
Arrow Functions have special values for return keywords. The return keyword is optional if no curly braces are provided and contains only a single expression. If curly braces are present, it is required, and other functions (hehe) like a standard function.
```js
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

### This Pointer
Arrow functions inherit the `this` pointer from the scope of where it is created. This is known as a `closure`. Essentially the function will remember its scope when it was created even after it has passed out of scope.

Consider the following example:

```js
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```
  * A closure is created with the arrow function, and the original values of a and b
```js
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```
  * New values of a and b are assigned
```js
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```
  * The original values of a and b are retained when the function is run again

This is useful when executing JavaScript within the scope of an HTML page and remember what they were when the function was created instead of when they are executed.

### Debouncer
A debounce function is a function that is only executed within a given time window. Helps limit expensive requests occuring thousands of times per second.

## JavaScript Array
Array represents a sequence of objects and other primitives. Works on a zero based index.

### Arrary Functions
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

## JSON
JavaScript Object Notation (JSON). A string notation that easily converts to and from objects.

A JSON document contains one of the following: 
| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

However it is usualy an Object

<hr>

An object contains zero or more key value paris. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas, and curly braces delimit an object. Square brackets and commas delimit arrays, and strings are always delimited with double quotes "".

```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
  * JSON is always encoded with UTF-8

  ### Converting to JavaScript
  You can convert JSON to and from JavaScript using `JSON.parse` and `JSON.stringify` functions.
  ```js
  const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

## Regular Expressions

Regular expressions are supported by default and can be used by either the object or a string literal
```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

The string class also supports some regular expression functions.
* match
* replace
* search
* split

Regexes also have a Boolean test function

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

## Rest and Spread 

### Rest

Think of Rest has a parameter that can take an unspecified number of parameters. It has to be the last parameter. use the `...` to specify a rest parameter

```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```

In a sense it is contracting the parameters into an array of dynamic type so you don't have to specify an array.

### Spread

Does the opposite of an array. It expands an array (or any iterable) into the parameters of a function

```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

## Exceptions

Exceptions in Java use the ```try catch throw``` syntax. Exceptions can be triggered using the throw key word. Works like most exception handlers. Skips the rest of the code and goes to the catch block.

You can also use the ```finally``` keyword to specify code that is always ran.

```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```

* Try to only throw exceptions for truly exceptional cases. This will make your code easier to debug.

### Fallbacks

Implementing fall back code in a catch block in case the try block fails. For example, not being able to connect to a return, and so you fallback on the local cache data.

```js
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```

## Destructuring
* *Not Destructing

The process of pulling individual items out of an existing one, or removing structure. Done with arrays or objects

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```
* Does not create an array, simply specifies items to remove

Can also use rest syntax

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

Also works on objects, but you must specify the exact values you was to destructure, it does not assume location

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

You can also specify new names as you destructure.
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

You can also provide default values if they are not provided
```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

## JavaScript Classes and Objects

### Objects

Objects in Java script represent a collection of `name:value` pairs where `name` must be a string or symbol, but value can anything, even another object.

Objects have common functionality such as constructors, the `this` pointer, static properties and functions, and inheritance.

Objects are created with the `new` operator, and you can specify properties by referencing property name, and you can reference them later with the brackets or . notation

```js
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

You can also use the object-literal notation.
```js
const obj = {
  a: 3,
  b: 'fish',
};
```

### Object Functions

Objects have a couple static functions.

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

### Constructor

Any function that returns an object is a constructor, and is invoked with the `new` operator. You can specify any values and methods you want in a constructor.

```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

### This Pointer
Relies on the scope to determine which object it is pointing to.

### Classes

Classes are used to define objects. They are used as a reusable component rather than a one-off object. Look similar to an object but have an explicit constructor.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private with `#`.

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

### Inheritance

Classes can be extended using the `extended` keyword (Go figure). Parameters that need to be passed to the parent class are done using the super function.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

## Scope

1. **Global** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces

### Var
`var` ignores block scope, and frankly should not be used. Use Const or Let instead.

### This (Scope)

Refers to the scope of the current line that is executing.
1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in a object it refers to the object.

JavaScript Strict mode makes it so `this` in a function cannot refer to `globalThis`

### Closure

A closure is a function and its surrounding state. Whatever variables are accessible when a function is created are available inside that function

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```

Arrow Functions however inherit the `this` pointer of their creation context.
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```
If we put an arrow function inside of a object function, then it will point to the object instead of global.
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```

## JavaScript Modules

Originally JS did not support modules, and server side Node.js introduced modules first. JS now supports modules, and they are referred to as ES modules, and Node.js is referred to CommonJS modules.

Because of Scope, you must explicitly import and export modules from their files.

alert.js
```js
export function alertDisplay(msg) {
  alert(msg);
}
```

main.js
```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

### Modules in browser

Modules can only be called from other modules. So you cannot by default access modules in a non-module global scope.

From HTML you can import modules, using the `type` attribute with the value `module` in the script tag.
```html
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```

If you want to use a module in a global scope, you have to either attach an event handler, or attach to the global window object.

```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

### Modules in Web Frameworks

Discussed more later, but the bundler in a framework will inject your code for you and hand the module and global scope for you.


## JavaScript Document Object Model

The object representation of the HTML elements that the browser uses to render the display. This allows you to dynamically manipulate the HTML with JavaScript.

You can access the elements of the HTML.
```js
Referenced through the global variable `document`.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can also use a CSS selector to query elements
```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

### Modifying the DOM

You can insert, modify, or delete the elements in the DOM. First Create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

You can also delete elements.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

### Injecting HTML

You can also inject entire blocks of HTML into an element. However this is a common attack of hackers to inject JS and make request for sensitive info.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

"If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`." (https://github.com/webprogramming260/.github/blob/main/profile/javascript/dom/dom.md)

### Event Listeners

All DOM elements support attaching a function that gets called when an event occurs on an element.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

Some of the categories of Events
| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML

```js
<button onclick='alert("clicked")'>click me</button>
```

## Local Storage

Local storage API can be used to store and retrieve data between sessions, page renderings, and cache data in case the server does not respond.

### Using Local Storage

Four main functions:

| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

Must be of type `string`, `number`, or `boolean`. If you want to store an object or an array, need to convert it to a JSON string first. `JSON.stringify()` and then `JSON.parse`

Under the Application tab in dev tools, and then under Local Storage, you can see local storage values.
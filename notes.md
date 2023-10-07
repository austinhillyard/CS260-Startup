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
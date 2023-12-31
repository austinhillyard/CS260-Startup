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

ssh into my server:
```sh
ssh -i [key pair file] ubuntu@[ip address]
```

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

# Linux commands to know

| Commands | Effect                                                                      |
|----------|-----------------------------------------------------------------------------|
| pwd      | Print working directory                                                     |
| cd       | Change directory                                                            |
| ls       | List items in current directory                                             |
| vim      | Open Vim text editor                                                        |
| nano     | Open nano text editor                                                       |
| mkdir    | Make new directory                                                          |
| mv       | Move an item or directory (-r)                                              |
| rm       | Remove item or directory (-r)                                               |
| man      | Open manually of a command                                                  |
| ssh      | Securely remote into another machine                                        |
| ps       | List all currently working services                                         |
| wget     | Download from network with the option of downloading in the background (-b) |
| sudo     | Super User DO, prefix to run a command as an admin                          |
| chmod    | Change access mode of a file                                                |

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

HTML Elements can have multiple classes separated by spaces, and you can refer to them individually

```html
<div className="home comp">Home Component</div>
<div className="scores comp">Scores Component</div>
```
```css
.comp {
  display: flex;
  align-items: center;
  justify-content: center;
  border: thick dashed black;
  border-radius: 15px;
  margin: 1em;
  padding: 2em;
  font-size: 26px;
}

.home {
  border-color: #4f4;
  background-color: #dfd;
}

.users {
  border-color: #f44;
  background-color: #fdd;
}
```
This way you can have a general class and any specific class for a general style and a specific style that can still apply to more than one element unlike ID selectors.

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

### Style
If you want to change the style of an element, you can use the style element and access many CSS style rules that way

```js
document.getElementById("byu").style.color = "blue";
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

## JavaScript Promises

JavaScript is a single threaded application. You only ever have one piece of code executing at a time. But you can run code in parallel with JavaScript Promises.

Three states of a Promise

1. pending - Currently running asynchonously.
1. fulfilled - Completed Successfully.
1. rejected - Failed to complete.

You create a promise by calling the promise object constructor and passing in an executor function that runs the operation.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

### Resolving and Rejecting

You can call resolve and reject to set the status of the promise

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

### Then, catch, finally

Similar to error catching.
* `then` is used if the promise is fulfilled
* `catch` is used if the promise is rejected
* `finally` is always called

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
The options are chained to the promise object.

### Observer Pattern
THe observer program is another way of asynchronous processing in Javascript. The observer is a pipeline

## JavaScript Async/Await

A more concise asynchronous execution than the `then` `catch` version.

`then` `catch` version.
```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```
`await` try catch version.
```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
The await keyword block is blocked until the promise is fulfilled.

Also use the try catch block for a more complex asynchronous process with multiple promises and a failure state:

```js
async function pickupPizza() {
  const order = createOrder();

  // Promise
  try {
    await placeOrder(order);
    serveOrder(order);
  } 
  catch (order) {
    orderFailure(order);
  }
    
}
```
* The function is asynchronous, and calls a promis placeOrder and awaits its completion before calling serveOrder. If the promise fails, instead execute orderFailure

### Async

Await can only be used with a function defined with the `async` keyword or at the top level of the JavaScript. Async transforms the function so it will return a promise, aka, an asynchronous function.

```js
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```

If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```

We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```

You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

### Await
The `await` keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```
In the first example, it returns the still ongoing promise, but the second example waits until it is done and then executes.

### Comparison

Here we use the original then syntax, which is a bit confusing.
```js
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```

Here it is clear that the two functions are promises and we wait until they are done before executing the code below.

```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```

## Debugging JavaScript

Console Debugging is one way to debug and also log status of your code. Simple place console.log statements wherever you feel they are needed to ensure your code is working.

### Browser debugging
In the source tab on the broswer dev tools, you can look at the JavaScript file and set break points and debug that way too.

# Midterm Review
1. \# is an id selector, and . is a class selector
1. Padding is the distance from the edge of the background to the text. Margin is external whitespace from the background to other elements
1. Arrow function is an inline function syntax
1. Map function maps an array to a new array
1. `#` in JavaScript makes a class member private
1. `<span>` has inline display by default
1. ls -la List everything in a vertical list
1. Port 80 is used for HTTP
1. Port 443 is used for HTTPS
1. Port 22 is used for SSH

# Web Services

## Introduction
The HTML, CSS, and JavaScript and Image files are the front end of your website.

All data requests in web programming use HTTPS to exchange data

### Fetch

We can fetch data from other web services from the frontend using the `fetch` function. Functions provided by a web service are called endpoints or APIs.

The backend can also run fetch requests to other services.

## URL

Uniform Resource Locator (URL) represents the location of a web resource.

### URL Structure
The only two required parts of a URL are the <scheme> and <domain name>
```html
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

Usernames and passwords used to be passed in as a URL, but that is depracated for obvious reasons

### URL, URN, and URI

Uniform Resource Name (URN) is a unique resource name that does not specify location. 

A Uniform Resource Identifier (URI) is a general term that refers to both URLs and URNs

## Ports

Connecting to the internet requires both an IP address and a port.

Port numbers allow a single device to support multiple protocols and services by directing traffic.

There are standard port protocols that have been reserved. 
* 0 to 1023 are standard protocols.
* 1024 to 49151 represent ports that have been assigned to requesting entities
* 49152 to 65535 are considered dynamic.

Common port protocols:
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

### My Ports
Web service Caddy is listening on ports 80 and 443. 
* When it gets a port 80 it redirects to 443 to be secure.
* When 443 is requested it examines the path in the URL and returns the appropriate file
* If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port

## HTTP
HTTP is how the web talks.

When a client and a server talk they exchange HTTP requests and responses. 

### Request
HTTP Requests have the general syntax:

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
Example:
```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
* Has a verb that specifies what kind of request, what the path is, any parameters, and the anchor.
* Then you have optional headers to key value pairs if you need.
* Then you specify the type of resources you will accept. The resource type is always a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

### Response

Reponses follow this syntax:
```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

Example:
```http
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

They are very similar in syntax, except for the first line represents the version and status of the response.

### HTTP Verbs

Common Verbs in HTTP requests.

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

### HTTP Status Codes

The HTTP Codes follow this format:

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.


Common Codes:

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

### Headers

HTTP Headers specify metadata about a request or response. This includes things like how to handle security, caching, data format, and cookies.

Some common headers:

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

### Body

The format of the body is dictated by the `Content-Type` header.
* text/html
* image/png
* application/json
* text/javascript

### Cookies

HTTP does not remember what it has done or what it will do. It is stateless. To track states, you can use cookies, which are generated by the server and passed to the client.

```http
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```
The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests

```http
HTTP/2 200
Cookie: myAppCookie=tasty
```

Learn more about [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

### Cookie Attributes:

**Domain**
  * `Domain` specifies which server can receive a cookie. If you specify a domain, all of its sub domains will be able to receive cookies.
  - If you don't specify a cookie, cookies are only available on the server, and not its sub domains.

**Path**
  * `Path` indicates a URL path that must exist in the requested URL in order to send the Cookie header.
**httpOnly**
  - Tells the browser to not let JavaScript read the cookie.
**sameSite:**
  - Will only return the cookie to the domain that generated it.

### HTTP Versions
| Year | Version | Features                                        |
| ---- | ------- | ----------------------------------------------- |
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |


## SOP and CORS
Same Origin Policy (SOP) and Cross Origin Resource Sharing (CORS)

These are policies that limit where data can be requested from

### SOP
SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. This helps prevent hackers from spoofing the details on legitimate websites.

### CORS
SOP on its own blocks any outside requests, but some requests we do want to allow.

CORS allows the client to specify the origin of a request, and let the server respond with what origins are allowed. The server could say all origins, or some specific origin, or refuse to answer and the default is it must be the same origin (SOP).

Request:
```http
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```
Response:
```http
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```
* Here the browser will see that the domains do not match, and so it blocks the request.

A hacker could still proxy requests through their own server, and bypass the browser protections, and so you need to be careful how you implement this.

### Third Party Services
Make sure that any service you want allows your calling origin in its headers, otherwise you will not be able to use them.

## Fetch

The fetch function takes a URL and returns a promise. It is the default way to access APIs in JavaScript via HTTP requests.

```js
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
  ```
The Repsone should be a JSON string:

```js
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```

To do a POST request you populate the options parameter with the HTTP method and parameters:

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

## Service Design

Web services provide the interactive functionality of a web application. 
* Authenticate users
* Track session state
* Provide, Store, Analyze Data
* Connect peers
* Aggregrate user info.

### Model and Sequence Diagrams
Keep the service design close to the application's primary objects and interactions. Keep the user in mind as you design. Focus on the user side, not the programming side.

Once you have defined the primary objects of  you can create [sequence diagrams](https://sequencediagram.org/) to show how they will interact with each other.

### Leveraging HTTP
Web services are usually provided over HTTP, so their structure and functionality will often mirror HTTP functions.
* GET receive comments
* POST make a comment
* PUT update a comment
* DELETE delete a comment

MIME content types can also help you send specific data.

### Endpoints / API

A web service is usually divided up into multiple service endpoints.

Each endpoint should provide a single functional purpose.

Design of Endpoints:

* **Grammatical** - With HTTP everything is a resource (noun). HTTP verbs can act on those resources. You can get, post, update, and delete these resources.

* **Readable** - The resource you are referencing should be clearly readable in the URL path.

* **Discoverable** - You should expose resources that contain other resources, so the user only needs to remember the top level Endpoint and discover the specifics of what they need from there.

* **Compatible** - You should build your endpoints so that you can easily add new functionality without breaking existing clients.

  * Version 1:
    ```json
    {
      "name": "John Taylor"
    }
    ```
  * Version 2:
    ```json
    {
      "name": "John Taylor",
      "givenName": "John",
      "familyName": "Taylor"
    }
    ```
  The old field of name is kept, and newer fields are made alongside. If we have access to all of our client code, we could deprecate old functionality.

* **Simple** - Keep endpoints focused on the primary resources of your application. The more complicated they become the more likely you will have duplicate functionality and parallel access to the same resources.

* **Documented** - [Open API Specification](https://spec.openapis.org/oas/latest.html) Can help you stay documented when designing endpoints. It is good practice to document API first so that you have a clear vision of the functionality ahead of time.


### Remote Procedure Calls (RPC)
RPC exposes service endpoints as simple function calls. Usually leverages the POST HTTP verb. The name of the function is usually the entire path of the URL or a parameter in the POST body

```http
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
```

```http
POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}
```
An advantage of RPC is that it maps directly to function calls that might exist within the server. This is also a disadvantage because it exposes the inner workings of the service.

### REST (Representational State Transfer)
REST always acts on a resource, which when acted on by a PUT verb, are cached and override the previous cache. GET always returns the same resource until PUT changes it.

```http
PUT /order/2197 HTTP/2

{"date": "20220505"}
```
Proper HTTP verb is used and the URL indentifies the resource.

### GraphQL

GraphQL focuses on the manipulation of data instead of function calls. The idea behind it is to specify the data that is needed and filter out unneeded in one big query to minimize the number of REST or RPC calls.

```graphql
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
```

Essentialy GraphQL takes out a lot of the different endpoint logic you originally needed and reduces it to one endpoint.

The big downside is this gives the client a lot of power to consume resources on the server. There are ways to specify scheme to help with this though.

# Node.js

Node.js or Node, was the first application of JavaScript to be able to run outside of the browser, so basically JavaScript can be the one language to power your entire technology stack.

Browsers use the V8 engine created by google to run javascript. Node.js uses the same V8 engine and runs it in a console. So it is the same.

### Installing NVM and Node.jss

Node is installed and run in the console, and you can get NVM from the repository.

### Running Node in the console

You can run a line of JavaScript in the console

```sh
node -e console.log(1+1)
```

To run entire JavaScript files, you can use the file name as a parameter
```sh
node index.js
```

You can also just execute `node` to run it in an interpretive mode.

## Node Package manager
To load packages you must do two steps. First install the package locally on your machine useing the Node package manager NPM, and then include a `require` statement in your code that references the pacakge name.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the [NPM website](https://www.npmjs.com/). However, before you start using NPM to install packages you need to initialize your code to use NPM. This is done by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.

```sh
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

### Package.json

In the directory you will see a `package.json` file. It contains three things:
1. Metadata about your project such as name and default entry JS file
1. Command scripts that you can execute to do things like run, test, or distribute your code.
1. Pacakges that this project depends on.

You can run the scripts with `npm run [script]`

```json
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Installing Packages
You can easily install packages in the command line

```sh
➜  npm install give-me-a-joke
```

You can also uninstall a package:
```sh
npm uninstall <package name here>
```

⚠ Note that when you start installing package dependencies, NPM will create an additional file named package-lock.json and a directory named node_modules in your project directory. The node_modules directory contains the actual JavaScript files for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node_modules in your .gitignore file.

When you clone source code from GitHub to a new location, the first thing you should do is run npm install in the project directory.

## Here are the basic steps
This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node_modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your application's JavaScript
1. Use the code the package provides in your JavaScript
1. Run your code with `node index.js`

## Create a Web service

With JavaScript we can write code that listens on a network port, receives HTTP requests, processes them, and then responds.

Create Project
```sh
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```

Next open VS Code and create a file named `index.js`. Paste the following code into the file and save.

```sh
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

This code uses the Node.js built in http package to create our HTTP server using the http.createServer function along with a callback function that takes a request (req) and response (res) object.

If you go to `localhost:8080` then you can see that the server is listening and will respond.

You can startup the server not only in the command line, but in VS code with the F5 key.

From now on you will need to run your code from the Node.JS server, you can't use the VS code liver server extension anymore.

## Express
Express is a node package that provides support for:
* Routings requests for service endpoints
* Manipulating HTTP requests with JSON body content
* Generating HTTP responses
* Using `middleware` to add functionality

Everything about is creating and using HTTP routing and middleware functions. You can install the express module, and then construct it using the express constructor.

```sh
➜ npm install express
```
```js
const express = require('express');
const app = express();

app.listen(8080);
```

### Defining Routes

HTTP endpoints are implemented in express by defining routes that call a function based upon an HTTP path. The Express `app` object supports all of the HTTP verbs as functions on the object.

```js
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```

The get function takes two parameters, a URL path matching pattern, and a callback function that is invoiked when the pattern matches.

The callback function has three parameters that represent the HTTP request object, the HTTP response object, and the next routing function that express expects to be called if this routing function wants another function to be called.

The Express `app` compares the routing function patterns in the order that they are added to the Express `app` object, and the second function should automatically be added in the next parameter of the first.

Endpoints allow path parameters by prefixing a parameter name with a (`:`). Express will store its value and you can reference it with `req.params.[param name]`

```js
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```

You can use other HTTP verbs in endpoints, and even include wildcards or regexes in the path pattern.

```js
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```

### Middleware

Mediator/Middleware design pattern has two pieces: a mediator and middleware (surprise surprise). Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution.

In this case Express is the mediator, and middleware functions are the components. Express includes some default middleware to deal with things like routing, authentication, CORS, sessions, cookies, logging, etc.

Middleware functions are always called for every HTTP request unless the preceding middleware function does not call next.

Middleware functions look like routing functions because routing functions are also middleware functions.

```js
function middlewareName(req, res, next)
```
You should usually call next so the next middleware function can execute.

### Creating Middleware

You can create any function you want, just remember they are executed in the order they are added.

```js
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```

### Builtin Middleware

Express has built-in Functionality. Here is an example of using the `static` middleware function, which responds with static files.

```js
app.use(express.static('public'));
```
You could use this function to serve up any files in the `public` directory to serve up default files like `index.html`

### Third Party Middleware

You can also use thrid party middleware functions by using NPM to install the package and including the package in your JavaScript with the `require` function.
```sh
➜ npm install cookie-parser
```
```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```
It is common for middleware functions to add fields and functions to the req and res objects so other middleware can access their functionality.

### Error handling middleware
You can add middleware for handling errors that occur. It looks similar to other middleware functions but it takes an additional `err` function.

```js
function errorMiddlewareName(err, req, res, next)
```

If you wanted to add a simple error handler, it might look like this
```js
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```

We can test that our error middleware is getting used by adding a new endpoint that generates an error.

```js
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});
```

Now if we use `curl` to call our error endpoint we can see that the response comes from the error middleware.

```sh
➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}
```

### Putting it all together

Here is an example of a full webservice

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Debugging Node.js

You can't use a browser debugger for a backend server, but you can use VS code's debugging tools.
  * *Make sure you save your file before running the debugger!*
Press F5 and choose your debugger to debug.
* F10 to step to the next line
* F11 to step into a function call.

### Debugging a Node.js web service

You can set break points on listeners and endpoint calls and when you make a request with your browser your breakpoint should hit, and you can inspect the HTTP requests

### Nodemon

Nodemon is a wrapper around node that watches for file changes. WHen it detects a change it will automatically restart node, which will help make changes on the fly while debugging integrate better.

To make VS code launch Nodemon automatically, you need a couple steps.
* `CTRL-SHIFT-P`
* Type the command `Debug: Add configuration`
* Type `Node.js`
* Select `Node.js Nodemon setup`
* In the launch configuration file that it creates, change the program from `app.js` to whatever the main JavaScript file is for your application, then save the config file.

Now when you debug, it will automatically launch with Nodemon.

## Service Daemons - PM2

The term `daemon` comes from the idea of something that is always there working in the background.

A service daemon is a program that will keep running after a shutdown.

The AWS AMI has been setup with PM2 already, but you can check it if you run into problems.

Here are some useful commands:

| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon --update-env**                         | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs                                                             |
| **pm2 env 0**                                              | Display environment variables for process. Use `pm2 ls` to get the process ID    |

### Registering a new web service
If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.
1. Add the rule to the caddyfile to tell it how to direct requests for the domain.
1. Create a directory and add the files for the web service
1. Configure PM2 to host the webservice

### Modifying Caddyfile
SSH into your server.

Copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server.

```
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```

This tells Caddy that when it gets a request for the new subdomain it will act as a proxy for those request and pass them on to the web service that is listening on the same machine, on port 5000.

The other settings tell Caddy to return headers that disable cahcing, hide the fact that Caddy is the server (for security), and allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS)

### Create the Web service
If you try and access the domain now, it will error because no service is listening on that port.

You can create a service listener that dynamically takes a port like this:
```js
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```
And then start the service.
```sh
node index.js 5000
```

### Configure PM2 to host the web service
Once you terminate your SSH though, the service will stop, this is where PM2 daemon comes in.

Run the following command to start the service:
```sh
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```

## UI Testing

Test Driven Development (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness.

UI is tough to test automatically, as it requires a browser to execute. There are many ways your program can experience unexpected input. Fortunately there are some tools people have made to help testing be done easier.

### Automating the browser - Playwright
There are many automated testing options. Playwright integrates well with VS Code and runs as a Node.js process, it is also one the least flaky testing frameworks.

First we need to install the Playwright package through npm, and get the Playwright vs code extension.

```sh
npm init playwright@latest
```

Once there, you can run tests in the extention, and create tests in the test folder.

You can follow the format and create your own tests.

### Testing various devices - BrowserStack

BrowserStack is a means of testing your website on various devices. It has free trials, and has Iphone, Android, Windows, and Mac test devices.

## Endpoint Testing

We will use Jest to test our endpoints.

In order to allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently than we have in the past. Normally, we would have just started listening on the Express app object after we defined our endpoints. Instead we export the Express app object from our server.js file and then import the app object in the index.js file that is used to run our service.

index.js
```js
const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

To launch the service using jest we create another file with the suffix of `.test.js`. Any file with this suffix will be seen by jest and examined for tests to run.

To install jest we run this command with the argument `-D` which tells NPM to install jest as a development package

```sh
npm install jest -D
```

Now we replace the `scripts` section fo the `package.json` file with a new command that will run our tests with Jest.

```json
"scripts": {
  "test": "jest"
},
```

Now we can run the test command and see the results of our tests

```sh
npm run test
```

### Testing Endpoints

To test endpoints we need another package so we can make HTTP requests without having to actually send them over the network. This is done with `supertest`

```sh
npm install supertest -D
```

To make an HTTP request you pass the express `app` object to the `supertest` `request` function and then chain on the HTTP verb function that you want to call, along with the endpoint path.

A test might look like this in your test.js file:

```js
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```
With TDD you can write your tests first to define functionality and then your code is done when your tests pass.

# Storage Services

Web applications need to store files. A database can house those files but it is usually overkill

**You should not store your files directly on your server**
1. Your server has limited space, and if it runs out it will crash
1. Your server should be considered temporary, that can be copied and replaced at any time.
1. You need backup copies, and your server will lose any data if your server disappears, which you should always assume will happen.

## AWS S3
Popular Database service
* Unlimited capacity
* Only pay for storage you use
* Optimized for global access
* Keeps multiple redundant copies of every file
* You can versino files
* Supports metadata tags
* You can easily control publicity of files

If you choose to use a Database, you can use them with AWS SDK.

***Do not list your credentials publicly in your github! They will immediately be stolen***

## Data Services

Web applications commonly need to store persistent data.

Commonly this was done with SQL, but since 2010, other data services that do other things better ecame popular. They have their own advantages and weaknesses and use a different underlying structure. These are called NoSQL.

Here are some popular data services:

| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

## MongoDB

In this project we will use MongoDB. Mongo uses JSON objects as its core data model. 

Unlike Relational Databases with rigid table definition where each column must be strictly typed, Mongo has no strict schema. You can have common fields that are missing, and specialized fields when you need.

Here is an example of queries with Mongo:

```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Operators
- `$gt` Greater than
- `$gte` Greater than or equal
- `$lt` Less than or equal
- `$lte` Less than or equal
  - 
- `$eq` Equals
  -`{ <field>: { $eq: <value> } }`
- `$in` Any value in array
  - { field: { $in: [<value1>, <value2>, ... <valueN> ] } }

### Using Mongo:
You can use a `MongoClient` object to make a client connection to the database server.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

With a client connection you can then get a database object and then a collection object. The collection object allows you to insert and query for documents.

When you insert a document, if the database or collection does not yet exist, it will create them, and it will generate a unique id for the document as well.

```js
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```

To query for a document you can use the find function. The find function is asynchronous, so you should use the `await` keyword with the promise

```js
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

If you do not use any parameters with the `find` function, it will return all documents in the collection, and it will include the unique ID it generated with the query.

```js
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```

You can provide a query and an options to the `find` function to fine tune your search:

```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

Find more details on Mongo tutorials [here](https://www.mongodb.com/docs/)

## MongoDB Atlas

Most management of data service is managed by 3rd parties nowadays.

MongoDB Atlas is a database service that will store your code and allow you to quickly connect.

### Keeping keys out of your code

You should keep your keys and login info in a JSON file that is not tracked by your git.

# Authorization Services

To keep your program secure, and allows specific users specific credentials, you need authentication. There are many standard protocols that allow you to do authentication automatically.
* OAuth
* SAML
* OIDC

Signle Sign On (SSO) allows credentials for multiple applications (gmail).

## Account Creation and Login
We need a way for a user to identify themselves, and allow future authentication

### Create authentication endpoint
This HTTP takes an email and a password, and returns a cookie containing the authentication token and user id.
* If the email already exists, we can return a 409 (conflict status code)

```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```http
A response should look something like this:
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login authentication endpoint

```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

A response should look something like this:
```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

### GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (Unauthorized Status code)

```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```
```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

### Webservice 

Here is what the webservice structure will look like with these endpoints

```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```
### Create account endpoint
A specific endpoint will look more like this. We need to check if the user already exists in this case and return an error if so:

```js
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

Our Mongo Database will store our information

### Unique Identifiers
UUID is a package that generates random ids, very good for authentication tokens
```js
const uuid = require('uuid');

token: uuid.v4();
```

## Securing Passwords

We cannot simply store our passwords as plain text. That is a huge security concern. We can cryptographically hash the password so we don't actually store the text of the password.

[bcrypt](https://en.wikipedia.org/wiki/Bcrypt) is a package that securely hashes passwords.

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing authentication tokens
We use cookies to pass the token, and we use `cookie-parser` to work with cookies.

We can set some HTTP options to make sure are token is handled securely
* `httpOnly` Tells the browser to not let the JavaScript read the cookie
* `secure` requires HTTPS to be used when sending the cookie to the server
* `sameSite` will only return the cookie to the domain that generated it

```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

### Login Endpoint

The login endpoint needs to get the hashed password from the database, compare to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie. 

```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

### GetMe Endpoint

This endpoint allows the token to be compared with the database.

```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

### Full example

```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

# WebSocket
HTTP is a server/client relationship. Peer to Peer communication had to go through a server and it created some issues with applications pinging servers for updates.

Websocket connects two peers together so they can communicate together seamlessly. If you are facilitating more than two users you still need a server to forwards the info.

## Creating a WebSocket
```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

The server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

After a connection is detected, it calls the server's `on connection` callback. The server can then send messages with the `send` function, a register a callback using the `on message` function to receive messages

## Debugging WebSocket
You can debug the communications with the browser network tab and debugging your endpoints.
On the network tab you can click on the communication and then the messages tab to see specific messages being sent back and forth.

## WebSocket Chat
ws is non secure WebSocket. wss is Secure.

```js
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

This server setup allows the peers to connect to eachother, as there is `noServer`
The upgrade notification will allow the users to upgrade to WebSocket instead of HTTP

# Web Frameworks

Web frameworks make writing web apps easier by providing tools for completing common application tasks. Some frameworks take things beyond standard web technologies and create new hybrid file formoats that combine things like HTML and JavaScript into a single file. Things like React JSX, Vue SFC, Svelte etc.
* Svelte and Vue combine HTML, CSS, and JavaScript into one File
* React only combines JavaScript and HTML. CSS is declared outside the hybrid file

### Angular Component
An angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that usually grouped together in a directory rather than using the single file representation
```js
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```
```html
<p>hello {{name}}</p>
```
```css
p {
  color: green;
}
```

# React Tutorial

## Hello World
First we must load the react modules
```html
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
  </body>
</html>
```
Next we make a `script` tag that can modify our HTML DOM

```js
      <script type="text/babel">
        const root = ReactDOM.createRoot(
            document.getElementById('mydiv')
        );
        const element = <h1>Hello, world</h1>;
        root.render(element);    
    </script>
```
We can even add more complicated HTML
```js
        const element = (
          <div>
          <h1>Hello, world</h1>
          <h2>Goodbye, world</h2>
          </div>
        )
```
## Rendering
Elements are the smallest building block of a react page.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have many isolated root DOM nodes.

React compares the element and its children to the previous one, and only changes the parts of the DOM that need to be updated.

```js
<script type="text/babel">
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Time of Day</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);
</script>
```

This will render the HTML with the id root, and only root. No other HTML will be affected.

## Components
Components let you split UI into independent reusable pieces, and think about each piece in isolation.

Components are like JavaScript Functions. They accept arbitrary inputs (called "props") and return React elemetns describing what should appear in the DOM

The simplest way to define a component:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
* This function is a valid React component because ti accepts a single "props" (short for properties) object argument with data and returns a React element. These are called function components

You can also use an [ES6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) class to define a component
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
* These two components are equivalent according to React's POV

Just like HTML, Components in React also have properties that modify their rendering.

```js
  <script type="text/babel">  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Sara" />;
  root.render(element);
</script>
```

### Composing Components

You can also create a component that uses other components to create more complex stuff.

```js
  <script type="text/babel">  
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  </script>
```
* Here you can see the Welcome component is used several times.

## Events

Handling events in React is very similar to Javascript except React Events are named using camelCase, rather than lowercase and you pass a function as the event handler, rather than a string

HTML:
```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

React:
```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

You must also call "preventDefault()" on the event to keep the default behavior from happening.
```js
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

At times you will want to maintain state between events. A good way to do this is to create an object.
* `this` is used to access object data. The `state` object has the `isToggleOn` variable that determines if the button should display "ON" or "OFF".

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```
* A button that switches from on to off when you click it.

## Conditional Rendering

We can use properties to conditionalize rendering:

```js
<body>
    <div id="root"></div>
    <script type="text/babel">  
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Greeting isLoggedIn={true}/>);
    </script>
  </body>
```

```js
      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        }
        return <h1>Please sign up.</h1>;
      }
```

And we can create a full fledged object that uses this. 

```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
constructor(props) {
  super(props);
  this.handleLoginClick = this.handleLoginClick.bind(this);
  this.handleLogoutClick = this.handleLogoutClick.bind(this);
  this.state = {isLoggedIn: false};
}

handleLoginClick() {
  this.setState({isLoggedIn: true});
}

handleLogoutClick() {
  this.setState({isLoggedIn: false});
}

render() {
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}
}
```
* Notice how this class when it renders other components, it can assign properties onto them by how we defined them, which call our own functions in the class.

## Lists

Displaying lists in React uses the "map" function in JavaScript.
```js
function Numbers() { 
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return(<ul>{listItems}</ul>)
}
```

## Forms
```<input>```, ```<textarea>```, and ```<select>``` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with ```setState()```.

We can combine the two and make the React state be the source of truth. The React component that renders a form also controls what happens in that form on subsequent user input. An input form element who value is controlled by React in this way is called a **"controlled component"**

```js
function NameForm() {
  const [state, setState] = React.useState('');

  function handleChange(event) {
    setState(event.target.value);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + state);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
* Notice that the `value` saved in `event.target.value` is used in the value field of the form.

## React-APIs
We can use fetch requests as normal. We just have to make sure we manage the promises that result.

```js
handleChange(event) {
        this.setState({value: event.target.value});
        var url = "https://csonline.fhtl.org?q=" + event.target.value;
        console.log("URL " + url);
        fetch(url)
          .then((data) => {
            return (data.json());
          })
          .then((citylist) => {
            console.log("CityList");
            console.log(citylist);
            this.setState({cities:citylist})
            console.log(this.state.cities);
          });
      }
```

# React
React was created by Jordan Walke for use at Facebook in 2011. It ws first used with Facebook's news feed and then as the main framework for Instagram. Shortly thereafter, Facebook open sourced the framework and it was quickly adopted by many popular web apps.

React abstracts HTML into a JavaScript variant called JSX. JSX is converted into valid HTML and JavaScript using a preprocessor called Babel. For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.

```js
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```

Babel will convert that into valid JavaScript:
```js
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```

The React.createElement function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.

## Components cont.
React components allow you to modularize the functionality of your application.

### The Render Function
One primary purpose of a component is to generate the user interface. This is done with the component's `render` function. Whatever is returned from the `render` function is inserted into the component HTML element.

A JSX file containing a React component name `Demo` would cause React to load teh `Demo` component, call the `render` function, and insert the result into the place of the `Demo` Element

```html
<div>
  Component: <Demo />
</div>
```
* Notice that `Demo` is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML

**React Component**
```js
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```

**Resulting HTML**
```html
<div>Component: <b>Hello world</b></div>
```

### Properties

React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.

JSX
```js
<div>Component: <Demo who="Walke" /><div>
```

React Component
```js
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```

Resulting HTML
```html
<div>Component: <b>Hello Walke</b></div>
```

### State

In addition to properties, a component can have internal state. Component state is created by calling the `React.useState` hook function. The `useState` function returns a variable that contains the current state and a function to update the state. 

The following example creates a state variable called `clicked` and toggles the click state in the `updateClicked` function that gets called when the paragraph text is clicked.

```js
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

You can use JSX without a function. Variable representing JSX will work anyplace you would provide a component.

```js
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```

### Class style components

In addition to the function style components, you can also use a class to style your components. **However,** The React team is moving away from the class style representation, so it's probably not recommended to use it, but you should be aware of it.

Major difference is properties are loaded on the constructor and sstate is set using a `setState` function on the component object.

```js
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

### Reactivity

A components properties and states are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions take by the user or evetns that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

## Toolchains

Web programming is complex, so it is useful to abstract away some of the complexity with some tools.
* Code repository - Stores code in a shared, versioned, location.
* Linter - Removes, or warns, of not-idomatic code usage
* Prettier - Formats code according to a shared standard
* Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
* Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
* Bundler - Packages code into bundles for delivery to the browser. This enable compatibility (for example with ES6 module support), or performance (with lazy loading).
* Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
* Testing - Automated tests as multiple levels to ensure correctness.
* Deployment - Automated packagin and delivery of code from the development envrionment ot the production environment.

In our case, Our tool chain for our React project is as follows:
* GitHub as the code repository
* Vite for JSX, TS, development and debugging support
* ESBuild for converting to ES6 modules and transpiling (with Babel underneath)
* Rollup for bundling and tree shaking
* PostCSS for CSS transpiling
* Simple bash script for deployment

## React tic-tac-toe Tutorial

[Tic-tac-toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe)

### Components

A component is a reusable piece of code that represents part of the user interface.

The `return` line of a component returns some JSX that is a mixture of JavaScript and HTML

React components need to return a single JSX element and not multiple adjacent JSX elements.

BAD:
```js
export default function Square() {
  return <button className="square">X</button><button className="square">X</button>;
}
```

GOOD:
```js
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```

### Props
Props are values the component can pass to its parent.

Parents are define in {} in the function
```js
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```
  * The prop can then be referenced using the {} as a escape operator.

Then the prop can be passed in through HTML properties

```js
<div className="board-row">
  <Square value="1" />
  <Square value="2" />
  <Square value="3" />
</div>
```

You can add functions to component functions. These functions can act as handlers for events and can be called by adding the function name to the props of the component piece

```js
function Square({ value }) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

### States
Components use states to remember things.

React uses and provides a function called `useState` from your component to let it remember things which you need to import
```js
import { useState } from "react";
```

Now we can set a state variable in our component. The `value` is the name of the state. `setValue` is a function used to change state, and the `null` in the `useState` is used as an initial value for the state in this case.
```js
function Square({ value }) {
  const [value, setValue] = useState(null);
  ...
}
```

Now we can call `setValue` in things like our handlers!
```js
  function handleClick() {
    setValue('X');
  }
```

By clicking the components, and activating the handler, you're telling React to re-render that component whenever its `<button>` is clicked.

### Dev Tools.
React DevTools let you check the props and state of your React components.

### State knowledge
**We could communicate state to another component, but it is usually best practice to store state in a parent element if the parent needs access to it, or if two children need access to each other's states.**

**This way the children and parent will stay in sync with each other, reducing errors and bugs**

State can be passed as a prop to children pretty easily:

```js
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
  ...)
}
```

Since State is private, to update it from the children, we can pass a function through props.

```js
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

Then we specify the handler for the props to reference in the parent

```js
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
  ...)
}
```

The `handleClick()` function makes a copy of the array and changes the index in the array to be an X. It also calls the set Squares function and that lets React know that the state of the component has changed and needs to be updated.

### Note Closure
JavaScript allows us to access variables inside a function if it part of the same parent as the variable it is trying to access.

### Re-Render loops
The way our code is set up, the click is not actually calling the function, the function is just running automatically `onSquareClick={handleClick(0)}` which is causing an infinitely loop because the board is continually being re-rendering by being changed.

```js
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick(0)} />
```
If we use an `() =>` arrow function however, that causes the function to only run WHEN it is clicked.

```js
  <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
```

Let's recap what we've done:

1. Clicking on the upper left square runs the function that the `button` received as its `onClick` prop from the `Square`. The `Square` component received that function as its `onSquareClick` prop from the `Board`. The Board component defined that function directly in the JSX. It calls `handleClick` with an argument of 0.
1. `handleClick` uses the argument (`0`) to update the first element of the squares array from `null` to `X`.
1. The `squares` state of the `Board` component was updated, so the Board and all of its children re-render. This causes the `value` prop of the `Square` component with index `0` to change from `null` to `X`.

### Note "onclick"
The DOM `<button>`'s attribute `onClick` is a built-in component that has a special meaning to React.

### Importance of Imutability
If we directly change some data, that essentially erases that copy of the data. If we instead create a copy, modify it, and replace the original with it, we have achieved the same thing but now have the benefit of storing old data which we could go back to after an "undo".

There is another benefit. By default, child components re-render when it's parent component is directly changed. For performance reasons, immutability is better because React can easily compare a reassignment and skip a re-rendering if no data was changed, saving performance.

### Taking Turns
We can track if X gets to go next with another state.

```js
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
```
* We can flip the boolean tracking turns after each turn, and use an if statement to get the right input.

But the players can override a previous move. We don't want that

```js
function handleClick(i) {
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  ...
```
With this check, we can just skip adding an input, if there is already something in the spot of the array that is not `null`.

We just use a basic winner test function to see if the game should end early. Nothing specific to react.

To let the players know who won, or who is next, we can have a status message in our Board component

```js
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
  <>
    <div className="status">{status}</div>
  ...
```
Since the board component is rerendered anytime there is an update, this text will update accordingly, and it doesn't even need a function!

### Adding History
We can store our old `squares` in another array, which will be a state.

We will create a new component `Game`, and we will lift state up again, to be stored in the `Game` component.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
```

Notice how `currentSquares` does not use the `useState` function. We don't need to track it in state for the game to work. The history state should keep track of everything we need.

Next we make the board run off of props instead of states.
```js
function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
...

<Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
```

We then replace our previous state modifying calls in `Board` with the prop from `Game`, which will handle the state changes for us.

Then our handlePlay function will take care of those state changes
```js
function handlePlay(nextSquares) {
    setHistory([..history, nextSquares]);
    setXIsNext(!xIsNext);
}
```
* `[...history, nextSquares]` Enumerates all of the items in `history`and inserts them into a new array, folloed by `nextSquares` which is another array.

We can create buttons that have the move history by mapping the history to a `moves` array.

```js
const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    }
    else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  });
```

### 🔑 <u>**Keys and Lists**</u>
React needs to keep track of list items with Keys so it can know what happened when it is updated. If the key for a `<li>` doesn't exist, react will remove the component and just generate a new component. If the key does exist, then React will move the component, and remember the state of that component.

`key` is a special reserved property in react, and is not passed in props, even though it looks like it.

The key should be a good identifier, and not something simple like the position in the list, as that will get mixed up very quickly. Representing the moves in a game is still a number, but it accurately describes the list item.

```js
<li key={move}>
  <button onClick={() => jumpTo(move)}>{description}</button>
</li>
```

Keys do not need to be globally unique, they only need to be unique between components and their siblings.


### Adding Time travel
We then implement our jumpTo function, which will require adding another state to keep track of the current move.

```js
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  ... 
}
```
* We also changed the handlePlay function to modify the history and remove the old future moves after a move is made, and set the current move back.
* `currentSquares` is also now set to the current move, rather than just the latest element in `history`

### Cleanup / Good habits
You should try to remove reduntant states when possible. It makes your code easier to understand and reduces bugs.

## Reactivity

Making the UI react to changes in user input or data, is one of the architectural foundations of React. Theis is achieved through three major pieces of components
* `props`
* `state`
* `render`

When a component is rendered, React parses the JSX and creates a list of any references to the component's `state` or `prop` objects. React then monitors those objects and if it detects that they have changed it will call the component's render function so that the impact of the change is visualized.

**States are updated asynchronously**, so you can't access state on the next line of code. Eventually the change in state will happen.

This example has two components in a parent child relationship. `Survey` has the state `color` and `Questions` has the `prop` `color`, which is passed in by `Survey`.
`Question` also has the state `answer`, which is displayed as part of the content.

```js
// The Survey component
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      {/* Pass the Survey color state as a property to the Question.
          When the color changes the Question property will also be updated and rendered. */}
      <Question color={color} />

      <p>
        <span>Pick a color: </span>
        {/* Pass the Survey color state as a property to the input element.
            When the color changes, the input property will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ color }) => {
  const [answer, updateAnswer] = React.useState('pending...');

  function onChange({ target }) {
    updateAnswer(target.value);
  }

  return (
    <div>
      <span>Do you like this</span>
      {/* Color rerendered whenever the property changes */}
      <span style={{ color: color }}> color</span>?
      <label>
        <input type='radio' name='answer' value='yes' onChange={(e) => onChange(e)} />
        Yes
      </label>
      <label>
        <input type='radio' name='answer' value='no' onChange={(e) => onChange(e)} />
        No
      </label>
      {/* Answer rerendered whenever the state changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```

## React Hooks
React hooks allow React function style components to be able to do everything that a class style component can do and more. New features in React are also implemented using Hooks.

The main function of React hooks is to allow Function components to be able to access state.

 Function styles are the preferred way to use React these days.

 `React.useState` is a hook we have already used, and there are others as well.

### `React.useEffect()`
The `useEffect` hook allows you to represent lifecycle events. Basically if the component is ever rerendered this hook runs
```js
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

### Hook Dependencies
You can control what triggers `useEffect` hook by specifying its dependencies. In the following example we have two state variables, but we only want the `useEffect` hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the `useEffect` call.

```js
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
* If you specify an empty array as the hook dependency, then it is only rendered the first time the component is rendered.

**NOTE**: Hooks can only be used in function style components and call only be called in the top scope of the function, so not inside loops or conditionals.

## Router
A web framework router provides essential functionality for single page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each THML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads on HTML page and then JavaScript is used to manipulate the DOM and give it the appearnce of multiple pages. The router defines the routes a user can take through the application and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many options. We will us [react-router-dom](https://www.npmjs.com/package/react-router-dom) Version 6. The simplified routing functionality of React-router-dom derives from the project [react-router](https://www.npmjs.com/package/react-router) for its core functionality. Be sure not to confuse the two.

A basic router consists of a `BrowserRouter` component that encapuslates the entire application and controls the routing action. The `Link` or `NavLink`, component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

```js
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

## Vite
We need a framework that allows us to use JSX, minification, polyfills, and bundling. We can use a CLI to setup our web app using a toolchain.

Vite is our toolchain of choice. Vite bundles our code quickly, has debugging support, allows JSX, TypeScript, and different CSS flavors support.

To create a new React-based web application, run the following commands:
```bash
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```

`npm run dev` will host the application in your browser. You can quit by pressing `q`.

This created some files for us already. the main files are `index.html`, `main.jsx`, and `app.jsx`.

The browser loads `index.html` which has the `#root` element which is loaded by `main.jsx` that creates an App component, and the functionality is found in `App.jsx`. 

![Alt text](image-1.png)

### JSX vs. JS
The `Vite` CLI uses the `.jsx` extension for JSX files instead of the JavaScript `.js` extension. The Babel transpiler will work with either one, but some editor tools will worko different based upon the extension. For this reason, you should prefer `.jsx` for files that contain JSX.

### Building a production release
When you execute `npm run dev` you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you deploy to a production environment you need to run `npm run build`. This executes the `build` script found in your `package.json` and invokes the `Vite` CLI. `vite build` transpiles, minifies, injects the proper JavaScript, and then outpus everything to a deployment ready version contained in a distribution subdirectory names `dist`.

```bash
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
```
As you can see, Vite has created a new `.js`, `.css`, and `.html` file that created new HTML and JavaScript that represents the React functionality. It's kind of like compiling, but the correct term is transpiling, one language into another language, rather than machine code.

### Deploying a Production Release
The deployment script `deployReact.sh` creates a production distribution by calling `npm run build` and then copying the resulting `dist` directory to your production server.

## Converting to React

We need to reorganize our code.
* Service folder for backend
* src folder for React content

### Debugging
When debugging we need two servers, one for vite and one for our backend. This allows viewing results while debugging and developing.
* By default, vite uses port 5173 when running in dev mode.
We can configure the Vite HTTP server to proxy service HTTP and WebSocket requests to the Node.js HTTP server by providing a configuration file named vite.config.js with the following contents.
```js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
});
```

### Adding React Bootstrap
React bootstrap wraps components in Bootrap CSS frameworks
```bash
npm install bootstrap react-bootstrap
```
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
```js
import Button from 'react-bootstrap/Button';

export function NavButton({ text, url }) {
  const navigate = useNavigate();
  return (
    <Button variant='primary' onClick={() => navigate({ url })}>
      {text}
    </Button>
  );
}
```

### Enabling React
```bash
npm install react react-dom react-router-dom
```
This gives us all of the necessary DOM functionality of React.

Now we can replace our index.html file with something like this:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <title>Simon React</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>
```
With a relavent JSX file:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
* This hooks our index html with our `App` component.

Then we create our `App`!

First we create our navbar and our Link Items.

```jsx
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Tracker } from './tracker/tracker';
import { Sharer } from './sharer/sharer';
import { Import } from './import/import';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
            <header className='container-fluid'>
                <nav className='navbar fixed-top navbar-dark'>
                    <div className='navbar-brand'>
                    Game Tracker
                    </div>
                    <menu className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="">
                                Login
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="tracker">
                                Tracker
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="import">
                                Import
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="sharer">
                                Sharer
                            </NavLink>
                        </li>
                    </menu>
                </nav>
            </header>
```

### Routing
Then we need to route the items to the correct components

This makes it actually populate the click with a new component

```jsx
<Routes>
    <Route path='/' element={<Login />} exact />
    <Route path='/tracker' element={<Tracker />} />
    <Route path='/import' element={<Import />} />
    <Route path='/sharer' element={<Sharer />} />
    <Route path='*' element={<NotFound />} />
</Routes>
```

### Converting Components

The basic process for converting original html and JS to a component is as follows:
- Copy the `main` element HTML over and put it in the return value of the component. Don't copy the header and footer HTML since they are now represented in `app.jsx`.
- Rename the `class` to `className` so that it doesn't conflict with the JavaScript keyword `class`.
- Copy the JavaScript over and turn the functions into inner functions of the React component.
- Move the CSS over to the component directory and use an `import` statement to bring it into the component's `jsx` file.
- Create React state variables for each of the stateful objects in the component.
- Replace DOM query selectors with React state variables.
- Move state up to parent components as necessary. For example, authentication state, or user name state.
- Create child components as necessary. For example, a `SimonGame` and `SimonButton` component.


# Final Review
1. Ports
  - HTTP: 80
  - HTTPS: 443
  - SSH: 22
2. The HTTP Codes follow this format:
  - 1xx - Informational.
  - 2xx - Success.
  - 3xx - Redirect to some other location, or that the previously cached resource is still valid.
  - 4xx - Client errors. The request is invalid.
  - 5xx - Server errors. The request cannot be satisfied due to an error on the server.
3. HTTP header `content-type`, Specify the format of the response content following standar MIME types
4. Cookie attributes:
  - HTTPOnly: Tells th ebrowser to not let JavaScript read the cookie.
  - sameSite: Will only return the cookie to the domain that generated it.
  * `Domain` specifies which server can receive a cookie. If you specify a domain, all of its sub domains will be able to receive cookies.
    - If you don't specify a cookie, cookies are only available on the server, and not its sub domains.
  * `Path` indicates a URL path that must exist in the requested URL in order to send the Cookie header
8. You should hash user's passwords and store them in the database

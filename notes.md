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

## HTML (Hyper text markup language)

### Elements and tags
* Based of HTML document
```
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
```
<p id="hello" class="greeting">Hello world</p>
```

### Hyperlinks
* Represented by a anchor tag ```<a href="https://gametracker.click">GameTracker</a>```

```
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


## Without async or defer
Traditionally, when a browser encounters a <script> tag, it stops parsing the HTML, requests the script file, executes it, and then continues parsing the HTML. This behavior can significantly delay the parsing of the rest of your page if the script is large or if it's hosted on a slow server.

`<script src="script.js"></script>`

## With async
When you add the async attribute to a script, the browser will continue to parse the HTML while the script is being downloaded in the background. Once the script has finished downloading, the browser will halt the parsing and execute the script, then continue parsing the rest of the page.

This is useful for scripts that don't depend on other scripts and don't modify the DOM (Document Object Model). However, because async scripts are not guaranteed to execute in order, they're not suitable for scripts that depend on each other.

`<script async src="script.js"></script>`

## With defer
The defer attribute also allows the browser to continue parsing the HTML while the script is being downloaded, similar to async.

However, scripts with defer are executed only after the entire document has been parsed. Unlike async, defer scripts are executed in the order they appear in the document.

This makes defer suitable for scripts that depend on each other or that modify the DOM.

<script defer src="script.js"></script>
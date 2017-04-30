# GenericJavaScript-View-developing-files.

The files in this repository provide the structure of the code environment for the GenericJavaScriptView node in Knime. 

Please do not use the Index HTML in this repo! The node provides only JavaScript and CSS code implementation. 
HTML should be generated into the JavaScript code.

Copy and paste the code of the style.css file and the script.js code into the GenericJavaScriptView node.
You can trie it with the sample code in the files.

The Repository should help to build new code for the node. It’s embedded debugging and testing in the browser. 
It is recommended to use an Script Editor or IDE like:

* Atom (https://atom.io/)
* Visual Studio Code (https://code.visualstudio.com/)
* Sublime (https://www.sublimetext.com/)
* Brackets (http://brackets.io/)

For inspirations feel free to look at this Blogposts in the KNIME community:
* https://tech.knime.org/forum/knime-developers/cytoscapejs-and-generic-javascript-view
* https://tech.knime.org/forum/knime-general/google-maps-api-in-generic-javascript-view
* https://tech.knime.org/forum/knime-labs-general/feature-request-generic-javascript-view


Recommended libraries are:
* D3
* jQuery
* Bootstrap
* Materializecss
* Plotly
* Cytoscape

The Node uses require.js for connection with libraries.

You can read KNIME input data via variables like:
 var location = knimeDataTable.getColumn(0);

Pros of the Generic JavaScriptView in KNIME:
* embedded the power of advanced web frontends in KNIME
* good reason to learn JS

Cons:
* complex structure to build HTML
* Limited Output Options
* Limited Options to use internally installed libraries and image files


For more advanced tasks were you need data-outputs we recommend to use the JavaScript Node Development in KNIME.

Feel free for use.

Happy coding < > 




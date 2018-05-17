# Hide-My-Ass
Simple, effective (yet imperfect) Javascript obfuscation tool

The hideMyAss() function removes sources from Javascript links, and clears text content from script tags.

This function is triggered on document.readyStateChange, document.load, and document.beforeUnload.

Next, we save underscored references to all console methods (console.log becomes console.\_log) and then all 
of the native console methods will trigger a console.clear() to further cover your tracks.

**Note: This will not hide your script sources from devTool's 'Sources' tab. That is possible to achieve by
loading your scripts dynamically after the DOM has been rendered.

**There is no perfect way to hide front-end Javascript. Hackers can always find a way to access your source code
if they are determined enough. That's why it is important to keep any sensitive information or proprietary methods
on the server side. This script is just a simple tool to hide some of your logic from prying eyes ( .) __ ( .) ...

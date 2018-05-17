// Obfuscate javascript code/sources from inspection
// Clear all console messages to eliminate any extra info
// ToDo: Change <link> sources without breaking styles (?)
// var links = document.getElementsByTagName('link');
// for (var i = 0; i < links.length; i++) links[i].href = '';

// Main Function
var hideMyAss = function(){
    var scripts = document.scripts;
    for (var i = 0; i < scripts.length; i++){
        scripts[i].src = '';
        scripts[i].textContent = '';
    }
    console.clear();
}

// Event Listeners
document.onreadystatechange = hideMyAss();
document.load = hideMyAss();
document.beforeunload = hideMyAss();

// Save a reference to the originals in case we need them
var _log = console.log,
    _warn = console.warn,
    _error = console.error,
    _info = console.info,
    _table = console.table,
    _group = console.group;

// Now everytime something gets sent to the console we clear it
console.log = function(catchMsg){ console.clear(); }
console.warn = function(catchMsg){ console.clear(); }
console.error = function(catchMsg){ console.clear(); }
console.info = function(catchMsg){ console.clear(); }
console.table = function(catchMsg){ console.clear(); }
console.group = function(catchMsg){ console.clear(); }

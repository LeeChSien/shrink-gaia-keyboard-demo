'use strict';

var demo = new KeyboardDemoApp(LAYOUTS);
demo.start();

/*
setTimeout(function() {
  demo.removeFocus();
}, 3000);
*/


var mainBody = document.getElementById('main-body')

mainBody.addEventListener('click', function() {
  if (!demo.resuming && demo.focused) { demo.removeFocus(); }
});

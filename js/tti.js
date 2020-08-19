/////////////////////////////////////////// Drawing ///////////////////////////////////////////

var word = "abcdefg";

// canvas settings
var padding = 50;
var font = '60px San_Diego_Font';

// load canvas & context
var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

// set font so I can resize
ctx.font = font;

// text sizing
var textSizing = ctx.measureText(word);
console.log(textSizing);
var textWidth = Math.floor(textSizing['width']);
var textHeight = Math.floor(textSizing['actualBoundingBoxAscent'] + textSizing['actualBoundingBoxDescent']);
console.log(`text size: ${textWidth} x ${textHeight}`);

// set canvas size
canvas.width = textWidth + padding;
canvas.height = textHeight + padding;

// now do text settings, because they get cleared with resize
ctx.font = font;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

console.log(`new canvas size: ${canvas.width} x ${canvas.height}`);

// draw text
ctx.fillColor = 'black';
ctx.fillText(word, canvas.width/2, canvas.height/2);


//////////////////////////////////////// Interactivity ////////////////////////////////////////

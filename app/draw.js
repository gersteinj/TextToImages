define(function (require) {


    var canvData = require('./canvSetup');

    var canv = canvData.canvas;
    var ctx = canvData.context;

    function drawBackground() {
        // draw background
        ctx.fillStyle = canvData.bgColor;
        ctx.fillRect(0, 0, canv.width, canv.height);
        if (canvData.borderSize > 0) {
            ctx.strokeStyle = canvData.borderColor;
            ctx.lineWidth = canvData.borderSize;
            ctx.strokeRect(0, 0, canv.width, canv.height);
        }
    }

    function drawText() {
        // draw text
        ctx.fillStyle = canvData.textColor;
        ctx.fillText(canvData.textString, canv.width / 2, canv.height / 2);
    }

    canvData.textSetup();
    canvData.canvasResize();
    
    drawBackground();
    drawText();
    
    console.log(canvData.textString);
    
    return {
        redraw: function () {
            drawBackground();
            drawText();
        },
        'sampleString': 'sample string from draw.js',
        'textString': canvData.textString
    };

});



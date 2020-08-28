define(function (require) {
    
    var canvData = require('./canvSetup');
    
    var canv = canvData.canvas;
    var ctx = canvData.context;

    canvData.textSetup();
    canvData.canvasResize();
    
    // draw background
    ctx.fillStyle = canvData.bgColor;
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw text
    ctx.fillStyle = canvData.textColor;
    ctx.fillText(canvData.textString, canv.width/2, canv.height/2);
    console.log(canvData.textString);
});    



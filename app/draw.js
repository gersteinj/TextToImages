define(function (require) {
    
    var canvData = require('./data');
    
    var canv = document.getElementById('preview');
    var ctx = canv.getContext('2d');
    
    // draw background
    ctx.fillStyle = canvData.bgColor;
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw text
    ctx.font = `${canvData.textPxls}px ${canvData.textFont}`;
    ctx.fillStyle = canvData.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(canvData.textString, canv.width/2, canv.height/2);
    console.log(canvData.textString);
});    



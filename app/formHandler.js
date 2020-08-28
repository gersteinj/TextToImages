define(['./draw', './canvSetup'], function(draw, canvData) {
    document.getElementById('word').addEventListener('input', function() {
        console.log(this.value);
        canvData.textString = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    })
});
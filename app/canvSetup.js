define( function() {
    // do setup stuff here
    // not currently needed
    var canvas = document.getElementById('preview');
    var ctx = canvas.getContext('2d');

    return {
        'canvas' : canvas,
        'context' : ctx,
        'borderSize': document.getElementById('border-size').value,
        'padding' : 30,
        'textString' : 'Type something!',
        'bgColor' : document.getElementById('bg-color').value,
        'textColor' : document.getElementById('text-color').value,
        'borderColor' : document.getElementById('border-color').value,
        'fontDropdown' : true,
        'textSize' : 48,
        'textFont' : document.getElementById('text-font').value,
        'textSetup' : function () {
            console.log('setting up text');
            ctx.font = `${this.textSize}px ${this.textFont}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
        },
        'canvasResize' : function() {
            this.textSetup();
            console.log('resizing canvas');
            
            var textWidth = ctx.measureText(this.textString)['width'] + this.padding + this.borderSize * 2;
            var textHeightSizer = ctx.measureText('Qq')
            console.log(textHeightSizer);
            var textHeight = textHeightSizer['actualBoundingBoxAscent'] + textHeightSizer['actualBoundingBoxDescent'] + this.padding + this.borderSize * 2;
            console.log(textHeight);
            canvas.width = textWidth;
            canvas.height = textHeight;
            
            // reset text, because resizing the canvas wipes out settings
            this.textSetup();
        }
    }
})
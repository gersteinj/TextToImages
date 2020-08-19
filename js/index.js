const app = new Vue({
    el: '#tti-app',
    data: {
        textString: 'Type in some text',
        charactersRemaining: 50,
        textColor: 'black',
        backgroundColor: 'aliceblue',
        textBoxPadding: 25,
        textSize: 30,
        textFont: 'sans-serif',
        canvas: 'null'
    },
    directives: {
        insertMessage: function (canvasElement, binding, vnode) {
            // example of accessing data
            // console.log(vnode.context.textColor);

            // get canvas context
            var ctx = canvasElement.getContext('2d');

            // calculate size
            ctx.font = `${vnode.context.textSize}px ${vnode.context.textFont}`;
            var textSizing = ctx.measureText(binding.value);
            var textWidth = Math.floor(textSizing['width']);
            var textHeight = Math.floor(textSizing['actualBoundingBoxAscent'] + textSizing['actualBoundingBoxDescent']);

            // console.log(`${canvasElement.width} x ${canvasElement.height}`);
            // console.log(`Text size: ${textWidth} x ${textHeight}. Padding: ${vnode.context.textBoxPadding}`);
            
            // dynamic resize
            canvasElement.width = textWidth + vnode.context.textBoxPadding;
            canvasElement.height = textHeight + vnode.context.textBoxPadding;
            // console.log(`${canvasElement.width} x ${canvasElement.height}`);
            
            // fill canvas with background color
            ctx.fillStyle = vnode.context.backgroundColor;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

            // // shadow
            // ctx.shadowColor = '#999';
            // ctx.shadowBlur = 4;
            // ctx.shadowOffsetX = 5;
            // ctx.shadowOffsetY = 5;

            // draw text
            ctx.font = `${vnode.context.textSize}px ${vnode.context.textFont}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = vnode.context.textColor;
            ctx.fillText(binding.value, canvasElement.width/2, canvasElement.height/2);
        }
    },
    methods: {
        countCharacters: function () {
            this.charactersRemaining = 50 - this.textString.length;
        },
        notify: function (event) {
            alert(event);
        },
        makeImage: function () {
            cnv = document.getElementById('drawing');
            console.log(cnv);

            cnv.toBlob(function(blob) {
                var newImg = document.createElement('img'), url = URL.createObjectURL(blob);

                newImg.onload = function() {
                    URL.revokeObjectURL(url);
                };

                newImg.src = url;
                document.body.appendChild(newImg);
            })
        }
    }
})
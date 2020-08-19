const app = new Vue({
    el: '#tti-app',
    data: {
        textString: 'enter your text',
        charactersRemaining: 50,
        textColor: 'black',
        backgroundColor: 'red',
        textBoxPadding: '5px',
        textSize: 30,
        textFont: 'serif',
        canvas: 'null'
    },
    directives: {
        insertMessage: function (canvasElement, binding, vnode) {
            // example of accessing data
            // console.log(vnode.context.textColor);
            
            // get canvas context
            var ctx = canvasElement.getContext('2d');
            
            // fill canvas with background color
            ctx.fillStyle = vnode.context.backgroundColor;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

            // draw text
            ctx.fillStyle = vnode.context.textColor;
            ctx.font = '20px serif';
            ctx.fillText(binding.value, 10, 50);
        }
    },
    methods: {
        countCharacters: function () {
            this.charactersRemaining = 50 - this.textString.length;
        }
    }
})
const app = new Vue({
    el: '#tti-app',
    data: {
        // instructionString: 'Enter some text',
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
        insertMessage: function (canvasElement, binding) {
            // get canvas context
            var ctx = canvasElement.getContext('2d');
            // clear the canvas
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
const app = new Vue({
    el: '#word-preview',
    data: {
        // instructionString: 'Enter some text',
        textString: '',
        charactersRemaining: 50,
        styleObject: {
            color: 'black',
            backgroundColor: 'red',
            padding: '5px'
        }
            // textSize: 30,
            // textFont: 'serif'
    },
    methods: {
        countCharacters: function () {
            this.charactersRemaining = 50 - this.textString.length;
        }
    }
})
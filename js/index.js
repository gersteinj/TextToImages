const app = new Vue({
    el: '#word-preview',
    data: {
        // instructionString: 'Enter some text',
        textString: '',
        charactersRemaining: 50,
        foreground: 'black',
        background: 'red',
        textSize: 30,
        textFont: 'serif'
    },
    methods: {
        countCharacters: function() {
            this.charactersRemaining = 50 - this.textString.length;
        }
    }
})
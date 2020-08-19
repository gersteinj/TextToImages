const app = new Vue({
    el: '#tti-app',
    data: {
        // instructionString: 'Enter some text',
        textString: '',
        charactersRemaining: 50,
        textColor: 'black',
        backgroundColor: 'red',
        textBoxPadding: '5px',
        textSize: 30,
        textFont: 'serif'
    },
    methods: {
        countCharacters: function () {
            this.charactersRemaining = 50 - this.textString.length;
        }
    }
})
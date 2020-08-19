var app = new Vue({
    el: '#main',
    data: {
        'exampleContent': 'this is some text'
    },
    directives: {
        insertMessage: function(canvasElement, binding) {
            // get canvas context
            var ctx = canvasElement.getContext("2d");

            // clear the canvas
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            ctx.fillStyle = "black";
            ctx.font = '20px serif';
            ctx.fillText(binding.value, 10, 50);
        }
    },
    // watch: {
    //     exampleContent: function() {
    //         console.log("exampleContent changed to " + this.exampleContent);
    //     }
    // }
})
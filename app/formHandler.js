define(['./draw', './canvSetup'], function (draw, canvData) {
        document.getElementById('word').addEventListener('input', function () {
        console.log(this.value);
        canvData.textString = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    });

    document.getElementById('savebtn').addEventListener('click', function () {
        console.log('saving!');
        // var dataURL = canvData.canvas.toDataURL('image/png');
        // console.log(dataURL);
        canvData.canvas.toBlob( blob => {
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.innerText = 'this will be a download link';
            // a.style = 'display: none';

            var url = URL.createObjectURL(blob);
            a.href = url;
            a.download = `tti-${canvData.textString}.png`;
            a.click();
            URL.revokeObjectURL(url);
        });
    })
});
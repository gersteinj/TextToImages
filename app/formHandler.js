define(['./draw', './canvSetup'], function (draw, canvData) {
    // text input
    document.getElementById('word').addEventListener('input', function () {
        console.log(this.value);
        canvData.textString = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    });

    // set font
    document.getElementById('text-font').addEventListener('input', function () {
        console.log("you're entering something for font")
        canvData.textFont = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    })

    document.getElementById('text-dropdown').addEventListener('input', function () {
        console.log("you're entering something for font")
        canvData.textFont = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    })

    // set text size
    document.getElementById('text-size').addEventListener('input', function () {
        console.log("You're setting the font size");
        canvData.textSize = this.value;
        canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    })

    // set border size
    document.getElementById('border-size').addEventListener('input', function () {
        console.log("You're setting the border size");
        canvData.borderSize = this.value;
        // canvData.textSetup();
        canvData.canvasResize();
        draw.redraw();
    })

    // save button
    document.getElementById('savebtn').addEventListener('click', function () {
        console.log('saving!');
        // var dataURL = canvData.canvas.toDataURL('image/png');
        // console.log(dataURL);
        canvData.canvas.toBlob(blob => {
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.innerText = 'this will be a download link';
            a.style = 'display: none';

            var url = URL.createObjectURL(blob);
            a.href = url;
            a.download = `tti-${canvData.textString}.png`;
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(document.body.lastChild);
        });
    });

    // text color
    document.getElementById('text-color').addEventListener('input', function () {
        canvData.textColor = this.value;
        console.log(this.value);
        draw.redraw();
        console.log(this.parentElement);
    });

    // bg color
    document.getElementById('bg-color').addEventListener('input', function () {
        canvData.bgColor = this.value;
        console.log(this.value);
        draw.redraw();
    });
    
    // border color
    document.getElementById('border-color').addEventListener('input', function () {
        canvData.borderColor = this.value;
        console.log(this.value);
        draw.redraw();
    });

    // toggle font selection type
    document.getElementById('font-select-toggle').addEventListener('click', function () {
        canvData.fontDropdown = !canvData.fontDropdown;
        console.log(canvData.fontDropdown);

        if (canvData.fontDropdown) {
            document.getElementById('dropdown-font').style.display = 'block';
            document.getElementById('custom-font').style.display = 'none';
        } else {
            document.getElementById('dropdown-font').style.display = 'none';
            document.getElementById('custom-font').style.display = 'block';

        }
    });
});
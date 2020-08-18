let input, showButton, saveButton, fontSize, padding;
let bgPicker, fgPicker;
let sizeSlider;

function setup() {
    input = createInput();
    
    bgPicker = createColorPicker('#eee');
    fgPicker = createColorPicker('#333333');
    
    sizeSlider = createSlider(10, 150, 30, 1);
    
    showButton = createButton('show');
    showButton.mousePressed(drawWord);

    saveButton = createButton('save');
    saveButton.mousePressed(saveWord);

    padding = 10;
    createCanvas(100, 100);
    background(bgPicker.color());
}

function drawWord() {
    const word = input.value();
    textSize(sizeSlider.value());
    textAlign(CENTER, CENTER);
    const textHoriz = floor(textWidth(word));
    const textVert = textAscent() + textDescent();
    console.log(word);
    console.log(textHoriz);
    resizeCanvas(textHoriz + padding, textVert +padding);
    background(bgPicker.color());
    fill(fgPicker.color());
    text(word, width/2, height/2);
}

function saveWord() {
    drawWord();
    saveCanvas(input.value(), 'png');
    input.value('');
}
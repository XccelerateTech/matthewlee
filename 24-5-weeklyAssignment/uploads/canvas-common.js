let canvasReal = document.getElementById(`canvas-1`);
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById(`canvas-draft`);
let contextDraft = canvasDraft.getContext('2d');
let canvasBg = document.getElementById(`canvas-bg`);
let contextBg = canvasBg.getContext('2d');
let currentFunction;
let dragging = false;
let layerCreate = false;
let fill;
let stroke;
let strokeStyle;
let bgColor;
let radius;
let clickCount = 0;
let clickArr = [];
let BgIsColor = true;

$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$('body').mousedown(function (e) {
    if (e.offsetX > canvasReal.width || e.offsetY > canvasReal.height) {
    currentFunction.onMouseDownWithoutCanvas() }
});

$('#canvas-draft').mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
    if (cPushArray[cStep] != canvasReal.toDataURL()) {
        cPush();
    }
});

$('#canvas-draft').mouseleave(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

$('body').keydown(function (e) {
    dragging = false;
    let keypressed = e.which;
    currentFunction.onKeyEnter(keypressed, e);
});

// controlling some buttons

$("#dropFill").click(function (e) {
    fill = e.target.innerText;
    $("#dropFill").hide();
    return fill;
})

$("#styleFill").click(function () {
    $("#slideFill").css("display", "flex")
})

$("#styleStroke").click(function () {
    $("#dropStroke").css("display", "block")
})

//stroke slider



class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyEnter() { } //new add
    onMouseDownWithoutCanvas() { } //new add
    onLayerCreate() { } //new add
}

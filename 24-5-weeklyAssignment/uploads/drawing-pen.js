let dragCount = [];
let c;

class DrawingPen extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    

    onMouseDown(coord) {
        
        this.contextReal.fillStyle = `${strokeStyle}`;
        this.contextReal.strokeStyle = `${strokeStyle}`;
        this.contextReal.lineWidth = stroke;
        this.contextReal.lineCap = "round";
        this.contextDraft.fillStyle = `${strokeStyle}`;
        this.contextDraft.strokeStyle = `${strokeStyle}`;
        this.contextDraft.lineCap = "round";
        this.origX = coord[0];
        this.origY = coord[1];
        clickArr.push([coord[0], coord[1]])
        //Draw circle at click point
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 10, 0, 2 * Math.PI)
        this.contextDraft.stroke();
        if (clickCount <= 0) {
        this.contextReal.beginPath();
        }
        this.contextReal.stroke();
        clickCount++;
    }

    onDragging(coord) {
        dragCount.push(1);
        if (clickArr.length > 1) {
            c = clickArr.length;
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(clickArr[c - 2][0], clickArr[c - 2][1]);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1], clickArr[c - 1][0], clickArr[c - 1][1]);
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.stroke();


            this.contextReal.beginPath();
            this.contextReal.moveTo(clickArr[c - 2][0], clickArr[c - 2][1]);
        }
    }
    onMouseMove() { }
    onMouseUp(coord) {
        if (clickCount > 1 && dragCount.length == 0) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(clickArr[0][0], clickArr[0][1]);
            for (let i = 0; i < clickCount; i++) {
                this.contextDraft.lineTo(clickArr[i][0], clickArr[i][1]);
                // this.contextDraft.stroke();
            };
            this.contextReal.beginPath();
            this.contextReal.moveTo(clickArr[0][0], clickArr[0][1]);
            for (let j = 0; j < clickCount; j++) {
                this.contextReal.lineTo(clickArr[j][0], clickArr[j][1]);
                this.contextReal.stroke();
            };
        } else if (dragCount.length > 0) {
            c = clickArr.length;
            this.contextReal.quadraticCurveTo(coord[0], coord[1], clickArr[c - 1][0], clickArr[c - 1][1]);
            this.contextReal.stroke();
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyEnter() {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        clickCount = 0;
        clickArr =[];
        dragCount =[];
    }

    // $("#finish").on("click", () =>{
    //     console.log('clicked');
    //     this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    // })
}
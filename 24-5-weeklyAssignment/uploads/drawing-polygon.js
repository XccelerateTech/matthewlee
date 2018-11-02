class DrawingPolygon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        clickCount++;
        this.contextDraft.lineWidth = stroke;
        this.contextDraft.lineCap = 'round';
        this.contextReal.lineWidth = stroke;
        this.contextReal.lineCap = 'round';
        this.contextDraft.strokeStyle = `${strokeStyle}`;
        this.origX = coord[0];
        this.origY = coord[1];
        clickArr.push([coord[0], coord[1]])
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 5, 0, 2 * Math.PI)
        this.contextDraft.stroke();
        if (clickCount > 0 && !(clickArr[0][0] <= coord[0] +10 && clickArr[0][0] >= coord[0] -10 && clickArr[0][1] <= coord[1] +10 && clickArr[0][1] >= coord[1] -10)) {
            this.contextDraft.beginPath();
            this.contextReal.beginPath();
            this.contextDraft.moveTo(clickArr[0][0], clickArr[0],[1]);
            this.contextReal.moveTo(clickArr[0][0], clickArr[0],[1]);
            for (let i = 0; i < clickCount; i++) {
                this.contextDraft.lineTo(clickArr[i][0], clickArr[i][1])
                // this.contextReal.lineTo(clickArr[i][0], clickArr[i][1])
            };
            this.contextDraft.stroke();
            this.contextReal.stroke();
        }
        if (clickCount > 1 && clickArr[0][0] <= coord[0] +10 && clickArr[0][0] >= coord[0] -10 && clickArr[0][1] <= coord[1] +10 && clickArr[0][1] >= coord[1] -10){
            // this.contextDraft.lineTo(clickArr[0][0], clickArr[0][1])
            this.contextDraft.closePath()
            clickArr.pop();
            for (let i = 0; i < clickCount-1; i++) {
                this.contextReal.lineTo(clickArr[i][0], clickArr[i][1])
            };
            // this.contextReal.lineTo(clickArr[0][0], clickArr[0][1])
            this.contextReal.closePath()
            this.contextReal.strokeStyle = `${strokeStyle}`;
            this.contextReal.stroke()
            this.contextReal.fillStyle = fill;
            this.contextReal.fill();
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            clickCount = 0;
            clickArr =[];
        };
        // this.contextReal.fillStyle = `${fill}`;
        // this.origX = coord[0];
        // this.origY = coord[1];
    }
    onDragging(coord){
    }

    onMouseMove(){}
    onMouseUp(coord){

        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }
    onMouseLeave(){
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // clickCount = 0;
        // clickArr =[];
    }
    onMouseEnter(){}
    onKeyEnter(key){
        if (key == 27) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            var key = 0;
            clickCount = 0;
            clickArr =[];
        };
    };
    onMouseDownWithoutCanvas() {
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        clickCount = 0;
        clickArr =[];
    }
}


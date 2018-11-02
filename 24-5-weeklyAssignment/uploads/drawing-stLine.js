class DrawingStLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal; 
        this.contextDraft = contextDraft;           
    }


    
    onMouseDown(coord){
        this.contextReal.strokeStyle = `${strokeStyle}`;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = stroke;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
    }
    onDragging(coord){
        this.contextDraft.strokeStyle = `${strokeStyle}`;
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = stroke;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        this.contextDraft.closePath()
    }
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){}
}
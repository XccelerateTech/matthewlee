class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;     
        this.contextDraft = contextDraft;       
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = strokeStyle;
        this.contextDraft.strokeStyle = strokeStyle;
        this.context.lineWidth = stroke;
        this.contextDraft.lineWidth = stroke;
        this.context.lineCap = 'round';
        this.contextDraft.lineCap = 'round';
        this.context.beginPath();
        this.contextDraft.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.contextDraft.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        $('#canvas-draft').css('opacity', aSS);
    }
    onDragging(coord,event){
            this.draw(coord[0],coord[1]);
    }

    onMouseMove(){
    }
    onMouseUp(){
        this.context.closePath();
        this.context.stroke(); 
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        $('#canvas-draft').css('opacity', '1');
    }
    onMouseLeave(){
        this.context.closePath();
        this.context.stroke(); 
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        $('#canvas-draft').css('opacity', '1');
    }
    onMouseEnter(){}
    onKeyEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.contextDraft.lineTo(x,y);
        this.contextDraft.moveTo(x,y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();    
        // this.context.stroke();    
    }
}
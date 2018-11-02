class Smiley extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord){
        
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.lineWidth = stroke;
        this.contextReal.strokeStyle = `${strokeStyle}`;
        this.contextReal.fillStyle = `${fill}`;
       
        
    }
    onDragging(coord){
        this.contextDraft.beginPath();
        this.contextDraft.lineWidth = stroke;
        this.contextDraft.strokeStyle = `${strokeStyle}`;
        this.contextDraft.fillStyle = `${fill}`;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        radius = Math.sqrt(Math.pow((coord[0]- this.origX),2)+Math.pow((coord[1] - this.origY),2));
        console.log ([coord[0], coord[1], radius]);
        this.contextDraft.arc(this.origX,this.origY,radius,0,2*Math.PI);
        this.contextDraft.moveTo(this.origX + 0.7*radius,this.origY);
        this.contextDraft.arc(this.origX,this.origY,0.7*radius,0,Math.PI);
        this.contextDraft.moveTo(this.origX - 0.4*radius,this.origY - 0.5*radius);
        this.contextDraft.arc(this.origX - 0.5*radius, this.origY - 0.5*radius, 0.1*radius,0,2*Math.PI);
        this.contextDraft.moveTo(this  .origX + 0.6*radius,this.origY - 0.5*radius);
        this.contextDraft.arc(this.origX + 0.5*radius, this.origY - 0.5*radius, 0.1*radius,0,2*Math.PI); 
        this.contextDraft.stroke();
       
    }

    onMouseMove(){}
    onMouseUp(coord){
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        radius = Math.sqrt(Math.pow((coord[0]- this.origX),2)+Math.pow((coord[1] - this.origY),2));
        this.contextReal.arc(this.origX,this.origY,radius,0,2*Math.PI);
        this.contextReal.moveTo(this.origX + 0.7*radius,this.origY);
        this.contextReal.arc(this.origX,this.origY,0.7*radius,0,Math.PI);
        this.contextReal.moveTo(this.origX - 0.4*radius,this.origY - 0.5*radius);
        this.contextReal.arc(this.origX - 0.5*radius, this.origY - 0.5*radius, 0.1*radius,0,2*Math.PI);
        this.contextReal.moveTo(this.origX + 0.6*radius,this.origY - 0.5*radius);
        this.contextReal.arc(this.origX + 0.5*radius, this.origY - 0.5*radius, 0.1*radius,0,2*Math.PI);       
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
    onKeyEnter(){}
}

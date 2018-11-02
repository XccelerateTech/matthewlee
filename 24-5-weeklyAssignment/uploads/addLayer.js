let layerClickCount = 0;
let zDraft;

$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $(".layerTitle").on("click", ()=> {
        //raise z-index of canvas-draft
        zDraft = $("#canvas-draft").css("z-index");
        $("#canvas-draft").css("z-index", `${zDraft}+1`)
        //create new layer
        let liLeng = $("#sortable li").length;
        $("#sortable li:nth-child(1)").before(`<li class="ui-state-default" order="${liLeng+1}">Layer ${liLeng+1}</li>`)
        $("#canvas-draft").after(`<canvas id="canvas-${liLeng+1}" width="600px" height="600px">Bad</canvas>`);
        //assign new layer as canvasReal
        canvasReal = document.getElementById(`canvas-${liLeng+1}`);
        $("#sortable li").css("background-color", "aquamarine");
        //new layer should be placed below canvasDraft
        $(`li[order="${liLeng+1}"]`).css({
            backgroundColor: "rgb(221, 108, 106)",
            zIndex: zDraft-1,
        });
        layerClickCount++;
    })
});

$("#sortable").on("mousedown", function(e){
    layerClickCount++;
    console.log ($("#sortable li"))
    canvasReal = document.getElementById(`canvas-${e.target.id}`);
    if (e.target.id !== "sortable"){
        if (layerClickCount == 1){
            $(e.target).css("background-color", "rgb(221, 108, 106)");
        } else if (layerClickCount > 1){
            $("#sortable li").css("background-color", "aquamarine");
            $(e.target).css("background-color", "rgb(221, 108, 106)");
        }
    } 
})

$("#sortable").on("mouseup", function(e){
    zDraft = $("#canvas-draft").css("z-index");
    let j = $("#sortable li").length;
    for (let i=0; i<j; i++){
        let order = $(`#sortable li:nth-child(${i+1})`).attr("order");
        $(`#canvas-${order}`).css("z-index", `${zDraft-(i+1)}`)
    }
})


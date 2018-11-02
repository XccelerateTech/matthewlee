$("#fillPanel, #fillTopPanel").on("click", () => {
    $(".fill, .styleTopPanel, .stylePanel2").css("display", "flex");
    $(".stylePanel, .stroke, .image, .styleTopPanel2, .bgColor").css("display", "none");
})

$("#strokePanel, #strokeTopPanel").on("click", () => {
    $(".stroke, .styleTopPanel, .stylePanel2").css("display", "flex");
    $(".stylePanel, .fill, .image, .styleTopPanel2, .bgColor").css("display", "none");

})

$(".stylePanel2").on("click", () => {
    $(".image, .stylePanel, .styleTopPanel2").css("display", "flex");
    $(".stylePanel2, .fill, .stroke, .styleTopPanel").css("display", "none");
})

$("#imgTopPanel").on("click", ()=>{
    $(".image, .stylePanel, .styleTopPanel2").css("display", "flex");
    $(".stylePanel2, .fill, .stroke, .styleTopPanel, .bgColor").css("display", "none");
})

$("#bgTopPanel").on("click", ()=>{
    $(".bgColor, .stylePanel, .styleTopPanel2").css("display", "flex");
    $(".stylePanel2, .fill, .stroke, .styleTopPanel, .image").css("display", "none");
})

$(".style").on("mouseleave", ()=>{
    $(".fill, .stroke, .styleTopPanel, .image, .styleTopPanel2, .bgColor").css("display", "none");
    $(".stylePanel, .stylePanel2").css("display", "flex");
})

$(".stylePanel3").on("mouseover", ()=>{
    $(".fill, .stroke, .styleTopPanel, .image, .styleTopPanel2, .bgColor").css("display", "none");
    $(".stylePanel, .stylePanel2").css("display", "flex");
})
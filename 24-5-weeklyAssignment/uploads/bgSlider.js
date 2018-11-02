//initiated BG color
bgColor= "rgba(0,0,0,0)";
contextBg.fillStyle = bgColor;
contextBg.fillRect(0, 0, canvasBg.width, canvasBg.height);
//
function slideBg() {
    let rC = document.getElementById("redC").value;
    let gC = document.getElementById("greenC").value;
    let bC = document.getElementById("blueC").value;
    $("#slideRedC").text(`Red (Max: 255): ${rC}`);
    $("#slideGreenC").text(`Green (Max: 255): ${gC}`);
    $("#slideBlueC").text(`Blue (Max: 255): ${bC}`);
    $("#slideBgC").css("background-color", `rgba(${rC}, ${gC}, ${bC}, 1)`)
    bgColor= `rgba(${rC}, ${gC}, ${bC}, 1)`
    contextBg.fillStyle = bgColor;
    contextBg.fillRect(0, 0, canvasBg.width, canvasBg.height);
    var BgIsColor = true;
}
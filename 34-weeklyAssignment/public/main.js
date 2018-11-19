

let indexArr = [];
let contextArr = [];
let inputVal = [];
function o2arr(arr) {
    for (i = 0; i < arr.length; i++) {
        indexArr.push(arr[i]);
        contextArr.push(arr[i].innerText)
    }
    return indexArr, contextArr;
}

$("#post p").on("click", (e) => {
    let input = document.querySelectorAll("#post p")
    o2arr(input);
    let index = indexArr.indexOf(e.target);
    let context = contextArr[index]
    $(e.target).remove();
    $(`.list:nth-child(${index + 1})`).append(`
    <input type="text" name="note" value="${context}">
    `)
})

$(".list #update").on("click", (e) => {
    let divList = $(e.target).parent().parent()
    let context = divList.find("input").val()
    let index = $(".list").index(divList)
    if (context != undefined) {
        axios.put('/', { "index": index, "context": context })
            .then(() => {
                divList.find("input").remove();
                divList.append(`<p>${context}</p>`)
            })
            .catch(function (error) {
                console.log("fuck axios");
            });
    }
})

// $(".list #del").on("click", (e) => {
//     let divList = $(e.target).parent().parent()
//     let index = $(".list").index(divList)
//     axios.delete('/', { "index": index })
//         .then(() => {
//             console.log ("happy delete")
//             divList.remove();
//         })
//         .catch(function (error) {
//             console.log("fuck axios");
//         });
// })

$(".list #del").on("click", (e) => {
    console.log ("del clicked")
    let divList = $(e.target).parent().parent()
    let context = divList.find("p").val()
    if (context != undefined) {
        axios.delete('/', { "context": context })
            .then(() => {
                console.log("happy delete")
                divList.remove();
            })
            .catch(function (error) {
                console.log("fuck axios");
            });
    } else {
        console.log ("context is undefined")
    }
})



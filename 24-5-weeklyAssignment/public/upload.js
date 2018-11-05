$("h2").click(
    $.getJSON("../test.json")
    .done((data)=>{
        $.each(data, (index, value)=>{
            $("#fileList").append(`
            <li id = "${index}">
                <a href="localhost:8080/uploads/${value}" target="_blank" download ="${value}">${value}</a>
            </li>
            `)
        })
    })
    .fail(()=>{
        $("h2").after(`
        <h1>Your Files are GONE!</h1>
        `)
    })
)
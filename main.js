$(function () {

    //navBar Hide and Show
    $(window).on("scroll", function (e) {
        let navOld = $(this).scrollTop();
        console.log("scroll working")
        console.log(navOld);
        let navNew;
        setTimeout(function (e) {
            navNew = $(this).scrollTop();
            //scrollDown or stop
            if (navNew >= navOld && navNew > 100) {
                $("nav").css("background-color", "rgba(255,255,255, 0)")
                $(".nav-link").css("text-shadow", "0 0 7px #FFFFFF")
                // scrollup or stay at top 
            } else if (navNew < navOld || navNew <= 100) {
                $("nav").css("background-color", "rgba(255,255,255, 0.5)")
                $(".nav-link").css("text-shadow", "0 0 0")
            }
        }, 100);
    })

    //#navbar logo opens on click
    let clickOpenCount = 0;
    $("#iconBox img").on("click", function () {
        clickOpenCount++;
        if (clickOpenCount <= 1) {
            $("body").css("overflow", "hidden");
            $("#nav").animate({
                height: "+=75vh",
                backgroundColor: "rgba(255,255,255, 0.7)",
            }, 400);
            $("#iconBox, #iconBox img").animate({
                height: "+=20vh",
                width: "+=20vh",
            }, 400);
        }
    })

    $(".nav-link").on("click", function () {
        //navbar collapse
        if (clickOpenCount == 1) {
            $("body").css("overflow", "auto");
            $("#nav").animate({
                height: "-=75vh",
                backgroundColor: "rgba(255,255,255, 0.5)",
            }, 400);
            $("#iconBox, #iconBox img").animate({
                height: "-=20vh",
                width: "-=20vh",
            }, 400);
        };
        // smooth scroll
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 400, 'linear');
        clickOpenCount = 0;
    })

    //for manipulating albums at #works section
    function allAlbum(alpha) {
        let imgLen = $(`#album${alpha} .albumContent img`).length;

        function imgHS(num) {
            let n = num.toString();
            for (i = 0; i < imgLen; i++) {
                if ($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt") === n) {
                    console.log($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt"));
                    $(`#album${alpha} .albumContent img:nth-child(${i + 1})`).fadeIn("slow");
                } else {
                    console.log($(`#album${alpha} .albumContent img:nth-child(${i + 1})`).attr("alt"));
                    $(`#album${alpha} .albumContent img:nth-child(${i + 1})`).fadeOut("slow");
                }
            }
        }

        $(`#album${alpha} .bigOverlay`).click(function () {
            $(`#album${alpha}`).css("display", "none");
            $(`#album${alpha} .button button`).remove();
        });

        $(`#${alpha}`).click(function () {
            $(`#album${alpha}`).css("display", "block");
            imgLen = $(`#album${alpha} .albumContent img`).length;
            for (i = 0; i < imgLen; i++) {
                $(`#album${alpha} .button`).append(
                    `<button class="btn" id="${i + 1}">${i + 1}</button>`
                )
            }
            imgHS(1);
        }
        )

        $(document).delegate(`#album${alpha} .button button`, 'click', function (e) {
            imgHS(e.target.innerText);
        })
    }

    allAlbum("a"); allAlbum("b"); allAlbum("c"); allAlbum("d"); allAlbum("e"); allAlbum("f"); allAlbum("g");

    //hover effect at #work section
    $(".overlay").on("mouseover", function () {
        $(this).fadeOut(500);
    }).on("mouseleave", function () {
        $(this).fadeIn(500);
    });

    //hover effects at contact section
    $(".pitch").on("mouseenter", function () {
        $("#pitch").fadeOut("fast");
        $(".icon").fadeIn("fast");
    }).on("mouseleave", function () {
        $(".icon").fadeOut("fast");
        $("#pitch").fadeIn("fast");
    });

    $("#icon a").on("mouseover", function () {
        console.log("mouseover working")
        $(this).animate({
            fontSize: "6vw",
        }, 300);
    }).on("mouseleave", function () {
        console.log("mouseover working")
        $(this).animate({
            fontSize: "4vw",
        }, 300)
    });

})
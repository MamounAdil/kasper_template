$(document).ready(function () {

    /* Add Class Active */
    $("header .list li a").on("click", function () {

        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
    });


    /* Scroll To Top */
    let goToTop = $(".go-top");
    if ($(window).scrollTop() > 100) {
        goToTop.fadeIn();
    } else {
        goToTop.fadeOut();
    }

    goToTop.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    /* When Scroll */
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("header-back");
            $("header .header-content ul li a").css("color", "rgba(3, 44, 62, .7)")
            $("header .header-content ul li.active a").css("color", "#FF2E56");
            $("header .header-content .form i").css("color", "rgba(3, 44, 62, .7)");
        } else {
            $("header").removeClass("header-back");
            $("header .header-content ul li a").css("color", "#FFF")
            $("header .header-content ul li.active a").css("color", "#FF2E56");
            $("header .header-content .form i").css("color", "#FFF");
        }

        if ($(window).scrollTop() < 400) {
            $(".go-top").css("display", "none")
        } else {
            $(".go-top").css("display", "block")
        }
    });

    /* Slider */
    $('.slider').bxSlider({
        auto: true,
        controls: false
    });

    // MixIt up Plugin
    let mixer = mixitup(".shuffle-container");

    /* Section Contact Us  */
    let input = $("input");
    input.on("focus", function () {
        $(this).parent(".form-group").removeClass("star");
    });


    // Open Menu
    $("header .header-content .custom-toggle").on("click", function () {
        $("header").removeClass("header-back");

        $("header .header-content .list").fadeIn();

        $("header .list").addClass("list-js")
    });


    $(".custom-toggle").on("click", function () {
        $(this).hide();
        $(".my-hide").show();
    });


    $(".my-hide").on("click", function () {
        $(this).hide();

        $("header .header-content .list").hide();

        $("header .list").removeClass("list-js");

        $(".custom-toggle").show();
    });



});

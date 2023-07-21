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


    Fancybox.bind('[data-fancybox="gallery"]', {
        //
    });
});



/* <ul class="container-fluid shuffle-container">

            <li class="box mix web" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery" >
                <img src="images/port/shuffle-1.jpg" alt="Shuffle #01"  />

                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Web Design  </p>
                    </div>
                </div>
            </li>

            <li class="box mix app" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-2.jpg" alt="Shuffle #02"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Amazing app   </p>
                    </div>
                </div>
            </li>

            <li class="box mix print" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-3.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Speed Print  </p>
                    </div>
                </div>
            </li>

            <li class="box mix photo" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-4.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Photography  </p>
                    </div>
                </div>
            </li>

            <li class="box mix web" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-5.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Web Design  </p>
                    </div>
                </div>
            </li>

            <li class="box mix app" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-6.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Amazing app  </p>
                    </div>
                </div>
            </li>

            <li class="box mix photo" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-7.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Photography  </p>
                    </div>
                </div>
            </li>

            <li class="box mix print" data-src="images/port/shuffle-1.jpg" data-fancybox="gallery">
                <img src="images/port/shuffle-8.jpg" alt="Shuffle #01"  />
                <div class="text">
                    <div class="content">
                        <h3> Awesome Images</h3>
                        <p class="nick"> Speed Print  </p>
                    </div>
                </div>
            </li>
        </ul>
* */
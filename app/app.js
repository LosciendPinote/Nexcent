jQuery(document).ready(function () {

    $(function () {
        new WOW().init();
    });


    $(".company--img").slick({
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

    })


    $(".hero__floating.sub__float.hero__computer__code-window").each(function () {
        var classname = $(this)

        var translateX = 37;
        var translateY = -21;
        var delay = 900;
        var joinedClass = joinClass(classname)
        animation(joinedClass, translateX, translateY, delay)
    });

    $(".hero__floating.sub__float.hero__computer__flowchart").each(function () {
        var classname = $(this)

        var translateX = 11;
        var translateY = -32;
        var delay = 1000;
        var joinedClass = joinClass(classname)
        animation(joinedClass, translateX, translateY, delay)

    })

    // $(".numbers").each(function () {
    //     var classname = $(this)
    //     var number = parseInt($(this).text()).toLocaleString()
    //     var endvalue = $(this).attr("data-end-value")
    //     var joinedClass = joinClass(classname)
    //     console.log(endvalue + joinedClass)

    //     if (endvalue) count_animation($(this), endvalue)

    // })
    $(".numbers").waypoint(function () {
        count_numbers()
    }, {
        offset: '100%'

    });
    function count_numbers() {
        document.querySelectorAll('.numbers').forEach((el) => {
            const endValue = el.getAttribute('data-end-value');


            if (endValue) count_animation(el, endValue);

        });
    }

    $(".content__object.unluck__object_2").waypoint(function () {


    }, {
        offset: '50%'

    });
    //Key Object
    $(".content__object.mobile-login__object_4").waypoint(function () {

        var target = ".content__object.mobile-login__object_4"
        var rotate = [-30, 1];
        var translateX = [-82, 1];
        var translateY = [41, 1];
        var duration = 3000;
        var delay = 1000;
        animation_objects(target, rotate, translateX, translateY, duration, delay)
        this.destroy()
    }, {
        offset: '100%'

    })
    //Like Object
    $(".content__object.mobile-login__object_1").waypoint(function () {

        var target = ".content__object.mobile-login__object_1"
        var delay = 1800
        pop_up_animation(target, delay)
        this.destroy()
    }, {
        offset: '100%'

    })


    $(".content__object.mobile-login__object_5").waypoint(function () {
        var target = ".content__object.mobile-login__object_5"
        var rotate = [-45, 1];
        var translateX = [-51, 1];
        var translateY = [-33, 1];
        var duration = 3000;
        var delay = 1000;
        animation_objects(target, rotate, translateX, translateY, duration, delay)
        this.destroy()
    }, {
        offset: '100%'

    });
    $(".sub__float.hero__computer__css").each(function () {
        var class_name = $(this)
        var target = joinClass(class_name)
        var delay = 1500
        pop_up_animation(target, delay)
    })
    $(".sub__float.hero__computer__html").each(function () {
        var class_name = $(this)
        var target = joinClass(class_name)
        var delay = 2000
        pop_up_animation(target, delay)
    })
    $(".sub__float.hero__computer__c").each(function () {
        var class_name = $(this)
        var target = joinClass(class_name)
        var delay = 2500
        pop_up_animation(target, delay)
    })
    $(".sub__float.hero__computer__code").each(function () {
        var class_name = $(this)
        var target = joinClass(class_name)
        var delay = 3000
        pop_up_animation(target, delay)
    })

    $(".hero__floating.hero__x__cloud").each(function () {
        var target, translateX, translateY, delay, loop
        var classname = $(this)

        target = joinClass(classname)
        translateX = 19
        translateY = -5
        delay = 500
        loop = true
        animate_x_cloud(target, translateX, translateY, delay, loop)
    })

    $(".customer--contain").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        speed: 0,
        fade: true,
        slidesToScroll: 1,
        arrows: false,
        touchMove: false,
        touchThreshold: false,
        adaptiveHeight: true
    })

    $(".customer__logo__img").on("click", function () {
        var slick_number = $(this).attr("customer__logo__slick")

        var selected__slick = $(this).closest(".customer--information").find(".customer__slick__wrap[customer__slick='" + slick_number + "']")
        var final_slick = selected__slick.attr("data-slick-index")
        $(".customer--contain").slick('slickGoTo', final_slick);

        if ($(this).hasClass("active")) {

        } else {
            $(".customer__logo__img").removeClass("active")
            $(this).addClass("active")
            var img_target = ".customer--img.customer--contain"
            var text_target = ".customer--information .customer--contain"
            img_slick_animation(img_target)
            slick_animation(text_target)
        }

    })
    $(".content--header.hamburger--menu").on("click", function () {
        $(this).closest(".inner-col.header-col").find(".content--header.header--cta--wrapper").toggleClass("active")

    })

    //===================Function Area==========================
    function img_slick_animation(target) {
        anime({
            targets: target,
            scale: [0, 1],
            duration: 1500
        })
    }
    function slick_animation(target) {
        anime({
            targets: target,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 1500
        })
    }
    function animate_x_cloud(target, translateX, translateY, delay, loop) {
        anime({
            targets: target,
            translateX: {
                value: translateX,
                loop: loop
            },
            translateY: {
                value: translateY,
                loop: loop
            },
            opacity: {
                value: [0, 1],
                delay: 500,
                loop: false,
            }, delay: delay,
            duration: 3000,
            loop: loop,
            direction: "alternate"

        });
    }

    function pop_up_animation(target, delay) {
        anime({
            targets: target,
            scale: [0, 1],
            delay: delay
        })
    }

    function animation_objects(target, rotate, translateX, translateY, duration, delay) {
        anime({
            targets: target,
            rotate: rotate,
            translateX: translateX,
            opacity: [0, 1],
            translateY: translateY,
            duration: duration,
            delay: delay
        });

    }

    function joinClass(classname) {
        var joined_class = "." + classname.attr("class").split(' ').join(".")
        return joined_class
    }

    function animation(target, translateX, translateY, delay) {

        anime({
            targets: target,
            translateX: translateX,
            translateY: translateY,
            delay: delay,
            duration: 3000
        });
    }

    function count_animation(target, number) {

        anime({
            targets: target,
            innerHTML: [0, number],
            easing: "linear",
            round: 1,
            duration: 4000

        });
    }






    // document.querySelectorAll('.number-animate').forEach((el) => {
    //     const endValue = el.getAttribute('data-end-value');
    //     const incrementValue = el.getAttribute('data-increment');
    //     const durationValue = el.getAttribute('data-duration');

    //     if (endValue) numberAnimation(el, endValue, incrementValue, durationValue);

    // });


    // function numberAnimation(el, endValue, incrementor, duration) {
    //     anime({
    //         targets: el,
    //         textContent: endValue,
    //         round: 1,
    //         easing: 'easeInOutQuad',
    //         duration: duration ? duration : 4000,
    //     });
    // }

})
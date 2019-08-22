    //-------------------------轮播图
            var pic_a = $(".pics li"),
            lunbo_icon = $(".circle li"),
            i = 0;

            $(lunbo_icon).each(function (flag) {
                $(this).click(function () {
                    $(pic_a).hide();
                    $(pic_a).eq(flag).fadeIn();
                    $(lunbo_icon).removeClass("on").eq(flag).addClass("on");
                    i = flag;
                });
            })

            function img_change() {
                i++;
                if (i > $(pic_a).length - 1) {
                    i = 0;
                }
                $(pic_a).hide();
                $(pic_a).eq(i).fadeIn();
                $(lunbo_icon).removeClass("on").eq(i).addClass("on");
            }
            gap = setInterval(img_change, 3000);

            $(".pics").mouseover(function () {
                clearInterval(gap);
            }).mouseout(function () {
                gap = setInterval(img_change, 3000);
            });

            function show_layer(name) {
                $(".mydiv").fadeOut(500);
                $("." + name).hide().fadeIn(500);
                $(".bg").show(0, function () {
                $(this).animate({ "opacity": 0.9 }, 500);
                })
            }
            function close_layer() {
                $(".mydiv").fadeOut(500);
                $(".bg").animate({ "opacity": 0 }, 500, function () {
                $(this).hide();
                });
            }

           
/**
 * Created by V_LIU on 2017/9/28.
 */
define(["jquery", "jqueryEasing"], function () {
    $(".plugin-API").on("click", "span.mydpd-toggle", function () {
        var $this = $(this);
        var $dataTog = $(this).data("tog");
        if ($(this).hasClass("glyphicon-chevron-up")) {
            $(".mydpd-target." + $dataTog).stop(true, true).slideUp(800, "easeInOutBack", function () {
                $this.removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            });

        } else {
            $(".mydpd-target." + $dataTog).stop(true, true).slideDown(800, "easeInOutBack", function () {
                $this.removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
            });
        }
    })
});


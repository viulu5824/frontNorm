/**
 * Created by V_LIU on 2017/9/29.
 */
define(["jquery"], function ($) {
    return {
         $this:this,
        //点击下拉函数封装
        panelToggle: function (opEleParent, opEle, ease) {
            $("#middle-content").off("click", "**")
                .on("click", opEleParent + " " + opEle + ".mydpd-toggle", function () {
                    $(this).hasClass("rotateZ180") ?
                        $(".mydpd-target." + $(this).data("tog")).stop(true, true).slideUp(800, ease).prev().find("span.mydpd-toggle").removeClass("rotateZ180")
                        :
                        $(".mydpd-target." + $(this).data("tog")).stop(true, true).slideDown(800, ease).prev().find("span.mydpd-toggle").addClass("rotateZ180");
                })
        },

        //双击全屏切换函数封装
        fullScreenToggle: function (toggleTarget) {
            $(".norm-content").on("click", toggleTarget, function () {
                $(this).hasClass("no-full") ?
                $(this).removeClass("no-full") && this.webkitRequestFullScreen()
                    :
                $(this).addClass("no-full") && document.webkitCancelFullScreen();
            })
        },

        //激活状态封装
        activeClick: function ($this, box) {
            $(box).removeClass("active");
            $($this).addClass("active");
        },

        //获取属性兼容处理
        getStyle: function (obj, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(obj)[attr];
            } else {
                return obj.currentStyle[attr];
            }
        },

    }
})
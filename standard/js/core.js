/**
 * Created by V_LIU on 2017/9/5.
 */
define(
    [
        "jquery",
        "text!tpls/htmlCssJs-standard.html",
        "text!tpls/bootstrapApply.html",
        "text!tpls/iconfont&commonCss.html",
        "text!tpls/plugins-API.html",
        "text!tpls/projectConstruction.html",
        "bootstrap"
    ],
    function ($, HCJTpl, bootstrapTpl, iconTpl, pluginTpl, projectTpl) {
        $("#routing-nav li>a").each(function (i, e) {
            $(e).on("click", function () {  //排除 “更多”
                console.log(projectTpl)
                if (!$(this).hasClass("dropdown-toggle")) {
                    //导航active状态
                    $(".active").removeClass("active");
                    $(this).addClass("active");
                    //导航路由
                    $("div#middle-content").html(eval($(this).data("click")));
                }
            })
        })
        /*页面默认显示projectTpl*/
    })
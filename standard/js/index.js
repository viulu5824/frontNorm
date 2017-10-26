/**
 * Created by V_LIU on 2017/9/28.
 */
define(["jquery","js/htmlCssJs","js/projectConstruction","js/iconfont&commonCSS","js/pluginAPI","js/frontModule","js/commonAPI","bootstrap"],
    function ($, htmlCssJs,projectCon,iconCSS,pluginAPI,frontModule,commonAPI) {
        //导航路由
        $("body").on("click","#routing-nav a.htmlCssJs",function(){
            htmlCssJs();
            commonAPI.activeClick(this,"#routing-nav>li a.active");
        }).on("click","#routing-nav a.projectConstruction",function(){
            projectCon();
            commonAPI.activeClick(this,"#routing-nav>li a.active");
        }).on("click","#routing-nav a.iconCSS",function(){
            iconCSS();
            commonAPI.activeClick(this,"#routing-nav>li a.active");
        }).on("click","#routing-nav a.pluginAPI",function(){
            pluginAPI();
            commonAPI.activeClick(this,"#routing-nav>li a.active");
        }).on("click","#routing-nav a.frontModule",function(){
            frontModule();
            commonAPI.activeClick(this,"#routing-nav>li a.active");
        })
        $("#routing-nav li>a.active").trigger("click");
    });
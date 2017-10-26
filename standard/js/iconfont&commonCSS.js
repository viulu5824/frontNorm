/**
 * Created by V_LIU on 2017/9/29.
 */
define(["jquery","js/commonAPI","text!tpls/iconfont&commonCss.html","text!css/common.css"],function($,commonAPI,iconTpl,commonCSS){
    function getIconCss(callback){
        $("div#middle-content").html(iconTpl);
        callback&callback();
    }
    return function(){
        getIconCss(function(){
            commonAPI.panelToggle(".commonCss","span","easeInOutBack");
            //导入common.css
            $("#middle-content #commoncss-html").html(commonCSS);
        })
    }
});
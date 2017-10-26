/**
 * Created by V_LIU on 2017/10/10.
 */
define(["jquery","js/commonAPI","text!tpls/htmlCssJs-standard.html","jqueryEasing"],function($,commonAPI,HCJTpl){
    function getHtmlCssJS(callback){
        $("div#middle-content").html(HCJTpl);
        callback&&callback();
    }
    return function(){
       getHtmlCssJS(function(){
           commonAPI.panelToggle(".htmlCssJs","span", "easeInOutBack")
           commonAPI.fullScreenToggle("#emmet");
       })
    }
})
/**
 * Created by V_LIU on 2017/9/28.
 */
define(["jquery", "js/commonAPI", "text!tpls/plugins-API.html"], function ($, commonAPI, pluginTpl) {
    function getPluginAPI(callback) {
        $("div#middle-content").html(pluginTpl);
        callback &&callback();
    }
    return function () {
        getPluginAPI(function () {
            commonAPI.panelToggle(".plugin-API", "span", "easeInOutBack");
        })
    }

});


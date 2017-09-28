/**
 * Created by V_LIU on 2017/9/5.
 */
requirejs.config({
    baseUrl:"../asset",
    paths:{
        "jquery":"./jquery/jquery-1.9.1.min",
        "jqueryEasing":"./jquery/jquery.easing.min",
        "swiper":"./swiper/js/swiper.jquery.min",
        "bootstrap":"./bootstrap/js/bootstrap.min",
        "text":"./require/text",
        "js":"../standard/js",
        "tpls":"../standard/tpls"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        },
        jqueryEasing:{
            deps:["jquery"]
        }
    }
});
require(["js/index.js"],function(){

});
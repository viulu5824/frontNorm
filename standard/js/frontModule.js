/**
 * Created by V_LIU on 2017/10/24.
 */
define(["jquery","js/commonAPI","text!tpls/frontModule.html","iScroll"],function($,commonAPI,frontModuleTpl){
    function getFrontModule(callback){
        $("div#middle-content").html(frontModuleTpl);
        callback&callback();
    }
    return function(){
        getFrontModule(function(){
            commonAPI.panelToggle(".frontModule","span", "easeInOutBack");

            //缓动动画封装
             function animate(obj, config) {
                clearInterval(obj.timer);
                obj.timer = setInterval(function () {
                    var flag = true;
                    for (var k in config) {
                        var target = config[k];
                        var leader = parseInt(commonAPI.getStyle(obj, k)) || 0;
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        leader = leader + step;
                        obj.style[k] = leader + "px";
                        if (leader !== target) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        clearInterval(obj.timer);
                    }
                }, 15);
            }

            var imgBox = document.querySelector(".frontModule  .accordion-toggle .img-box");
            var lis = imgBox.children;
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundImage = "url(img/accordion" + (i + 1) + ".jpg)";
                lis[i].onmouseover = function () {
                    for (var j = 0; j < lis.length; j++) {
                        animate(lis[j], {width: 80});
                    }
                    animate(this, {width: 650});
                };
            }
            imgBox.onmouseout = function () {
                for (var i = 0; i < lis.length; i++) {
                    animate(lis[i], {width: 200});
                }
            };
        })
    }
})
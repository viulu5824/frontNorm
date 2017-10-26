/**
 * Created by V_LIU on 2017/10/11.
 */
define(['jquery',"js/commonAPI","text!tpls/projectConstruction.html"],function($,commonAPI,projectConTpl){
   function getProjectCon(callback){
       $("#middle-content").html(projectConTpl);
       callback&&callback();
   }
    return function(){
        getProjectCon(function(){
            commonAPI.panelToggle(".projectConstruction","span", "easeInOutBack");
        })
    }
})
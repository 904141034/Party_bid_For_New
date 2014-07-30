/**
 * Created by lishaodan on 14-7-29.
 */
'use strict';

var myModule = {
    handleBM:function(json_message){
        var namePhone=myModule.handlebmMessage(json_message);
        if(namePhone!={} && typeof(namePhone)!="undefined"){
            var return_namePhone= BmMessage.bYes(namePhone);
            myModule.sendbmMessage(return_namePhone);
        }
    },
    handlebmMessage: function (json_message) {
        //去空格并判断bm
        var mess = json_message.messages[0].message;
        var message = mess.replace(/\s/g, "");
        var bb = message.search(/bm/i);
        var get_name = message.substr(2);
        var get_phone = json_message.messages[0].phone;
        var namePhone;
        if(bb!=(-1)){
            bb==0 ? namePhone=BmMessage.bYes1(get_name,get_phone):namePhone={};

        }
        return namePhone;
    },
    sendbmMessage: function (return_namePhone) {
        if (return_namePhone != {}&& return_namePhone.message!="") {
            native_accessor.send_sms(return_namePhone.get_phone, return_namePhone.message);
            myModule.refreshbm();
        }
    },
    refreshbm:function(){
    //获得报名id刷新报名页面
        var activity_register = document.getElementById("activity_register");  //获取报名页面的id
        if (activity_register) {
            var scope = angular.element(activity_register).scope();
            //通过id找到对应的页面获取$scope
            scope.$apply(function () {   //使用$apply()将报名页面的refresh方法包起来
                scope.refresh();
            });
        }
    },
    handleJJ:function(json_message){
        var bid_message=myModule.handleJJMessage(json_message);
        var return_bid_message= BmMessage.bYes(bid_message);
        myModule.sendbmMessage(return_bid_message);

    },
    handleJJMessage: function (json_message) {
        //去空格并判断bm
        var mess = json_message.messages[0].message;
        var message = mess.replace(/\s/g, "");
        var jj = message.search(/jj/i);
        var get_bidPhone = json_message.messages[0].phone;
        if(jj==0){
            var get_bidPrice = message.substr(2);
            var messagereturn=JJMessage.JYes(get_bidPrice,get_bidPhone);
            native_accessor.send_sms(get_bidPhone, messagereturn);
            myModule.refreshJJ();
        }

    },
    refreshJJ:function(){
        //获得竞价报名id刷新竞价报名页面
        var bid_register = document.getElementById("bid_register");  //获取竞价报名页面的id
        if (bid_register) {
            var scope = angular.element(bid_register).scope();
            //通过id找到对应的页面获取$scope
            scope.$apply(function () {   //使用$apply()将报名页面的refresh方法包起来
                scope.refresh();
            });
        }
    }
};
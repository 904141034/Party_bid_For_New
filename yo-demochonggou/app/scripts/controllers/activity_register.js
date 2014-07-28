'use strict';
/**
 * Created by lishaodan on 14-7-11.
 */
angular.module('yoDemoApp')
    .controller('activity_registerCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //返回按钮
        $scope.return = function () {
            $location.path('/activity_list');
        };

        //开始结束按钮事件
        $scope.start = function () {
            var activities = JSON.parse(localStorage.getItem("activities")) || [];

            if ($scope.start_stop == "开始") {

                $scope.start_stop = "结束";

                var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
                for (var i = 0; i < activities.length; i++) {
                    if (innerAct.name == activities[i].name) {
                        activities[i].status = "status";
                        localStorage.setItem("activities", JSON.stringify(activities));
                    }
                }
                if (innerAct.act == "false") {
                    innerAct.act = "true";
                    localStorage.setItem("innerAct", JSON.stringify(innerAct));
                }

            }

            else if ($scope.start_stop == "结束") {
                event.returnValue = confirm("确认要结束本次报名吗？");
                if (event.returnValue) {

                    var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
                    for (var i = 0; i < activities.length; i++) {
                        if (innerAct.name == activities[i].name) {
                            activities[i].status = "";
                            localStorage.setItem("activities", JSON.stringify(activities));
                        }
                    }
                    if (innerAct.act == "true") {
                        innerAct.act = "";
                        localStorage.setItem("innerAct", JSON.stringify(innerAct));

                        $scope.start_stop = "开始";
                    }
                    $location.path('/bid_list');
                }

            }

        };
        //该活动注册人数
        $scope.registerNum = 0;
        //页面初始化
        var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        for (var i = 0; i < activities.length; i++) {
            if (innerAct.name == activities[i].name) {
                $scope.registerNum = activities[i].bmMessages.length;
                $scope.bmMessages = activities[i].bmMessages;
            }
        }
        //判断是否有活动进行
        var acname = "";
        var a = 0;
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].status == "status") {
                a = 1;
                acname = activities[i].name;
            }
        }

        var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
        if (acname != "") {
            //console.log(acname);
            if (acname == innerAct.name) {
                $scope.startButton = true;
                $scope.start_stop = "结束";

            }
            if (acname != innerAct.name) {
                $scope.startButton = false;
                $scope.start_stop = "开始";

            }
        }
        if (acname == "") {

            for(var i=0;i<activities.length;i++){
                if(activities[i].name==innerAct.name){
                    var bidlists=activities[i].bidlists;
                    var ll=0;
                    for(var j=0;j<bidlists.length;j++){
                        if(bidlists[j].status!="status"){
                            ll++;
                        }
                    }
                    if(ll!=bidlists.length){
                        $scope.startButton = false;
                    }else if(ll==bidlists.length){
                        $scope.startButton = true;
                    }
//console.log(ll);
                }
            }




            $scope.start_stop = "开始";
        }
         //   refersh方法刷新页面
        $scope.refresh = function () {
            var innerAct = JSON.parse(localStorage.getItem("innerAct")) || [];
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            for (var i = 0; i < activities.length; i++) {
                if (innerAct.name == activities[i].name) {
                    $scope.registerNum = activities[i].bmMessages.length;
                    $scope.bmMessages = activities[i].bmMessages;
                }
            }
        };




    });
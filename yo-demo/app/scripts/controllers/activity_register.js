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

                var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
                for (var i = 0; i < activities.length; i++) {
                    if (InnerAct.name == activities[i].name) {
                        activities[i].status = "status";
                        localStorage.setItem("activities", JSON.stringify(activities));
                    }
                }
                if (InnerAct.act == "false") {
                    InnerAct.act = "true";
                    localStorage.setItem("InnerAct", JSON.stringify(InnerAct));
                }

            }

            else if ($scope.start_stop == "结束") {
                event.returnValue = confirm("确认要结束本次报名吗？");
                if (event.returnValue) {

                    var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
                    for (var i = 0; i < activities.length; i++) {
                        if (InnerAct.name == activities[i].name) {
                            activities[i].status = "";
                            localStorage.setItem("activities", JSON.stringify(activities));
                        }
                    }
                    if (InnerAct.act == "true") {
                        InnerAct.act = "";
                        localStorage.setItem("InnerAct", JSON.stringify(InnerAct));

                        $scope.start_stop = "开始";
                    }
                    $location.path('/bid_list');
                }

            }

        };
        //该活动注册人数
        $scope.registerNum = 0;
        //页面初始化
        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        var activities = JSON.parse(localStorage.getItem('activities')) || [];
        for (var i = 0; i < activities.length; i++) {
            if (InnerAct.name == activities[i].name) {
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

        var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
        if (acname != "") {
            //console.log(acname);
            if (acname == InnerAct.name) {
                $scope.startButton = true;
                $scope.start_stop = "结束";

            }
            if (acname != InnerAct.name) {
                $scope.startButton = false;
                $scope.start_stop = "开始";

            }
        }
        if (acname == "") {

            for(var i=0;i<activities.length;i++){
                if(activities[i].name==InnerAct.name){
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
            var InnerAct = JSON.parse(localStorage.getItem("InnerAct")) || [];
            var activities = JSON.parse(localStorage.getItem('activities')) || [];
            for (var i = 0; i < activities.length; i++) {
                if (InnerAct.name == activities[i].name) {
                    $scope.registerNum = activities[i].bmMessages.length;
                    $scope.bmMessages = activities[i].bmMessages;
                }
            }
        };




    });
/**
 * Created by lishaodan on 14-7-11.
 */
angular.module('yoDemoApp')
    .controller('activity_registerCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.return=function(){
            $location.path('/activity_list');
        };
        $scope.start_stop="开始";
        $scope.registerNum=0;
        $scope.start=function(activity_name){
            if($scope.start_stop=="开始"){
                $scope.register="true";
                $scope.start_stop="结束";
                console.log( $scope.register);

            }
            else if($scope.start_stop=="结束"){
             event.returnValue=confirm("确认要结束本次报名吗？");
                if(event.returnValue){
                    $scope.start_stop="开始";
                    $scope.register="false";
                }

            }


        };
//        //定义messages数组并获取
//        var message= {};
//        var messages = JSON.parse(localStorage.getItem('messages')) || [];
//        message.activity_name=$scope.activity_name;
//        message.person_name=$scope.person_name;
//        message.phone_number=$scope.phone_number;
//        messages .unshift(message);
//        localStorage.setItem("messages", JSON.stringify(messages));




    });
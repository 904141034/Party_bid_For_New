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
        $scope.start=function(){
            if($scope.start_stop=="开始"){
                $scope.start_stop="结束";

            }
            else if($scope.start_stop=="结束"){
             event.returnValue=confirm("确认要结束本次报名吗？");
                if(event.returnValue){
                    $scope.start_stop="开始";
                }

            }


        }
    });
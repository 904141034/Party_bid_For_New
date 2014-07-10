/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_createCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        var activity={};
        //定义activities数组并获取
        var activities = JSON.parse(localStorage.getItem('activities'))||[];
        $scope.textAlert="false";


        $scope.IsUseStr=function(){



        }
        $scope.create_Activity=function(activity_name){
            //console.log($scope.textAlert);
            ///判断活动重名
            for(var i=0;i<activities.length;i++){
                if($scope.activity_name==activities[i].name){
                    $scope.textAlert="ture";

                }else{
                    $scope.textAlert="false";

                }

            }
           if($scope.textAlert=="false"){

            activity.name=$scope.activity_name;
            activities.push(activity);
            localStorage.setItem("activities", JSON.stringify(activities));
            $location.path('/activity_list');
           }

        };

    });
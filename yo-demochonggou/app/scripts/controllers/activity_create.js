'use strict';
/**
 * Created by lishaodan on 14-7-9.
 */
angular.module('yoDemoApp')
    .controller('activity_createCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.show = Activity.getLength();
        $scope.return = function () {
            $location.path('/activity_list');
        }
        $scope.create_Activity = function (activity_name) {
            //重复警告
            $scope.textAlert = Activity.isRename(activity_name);
            console.log($scope.textAlert);
            if ($scope.textAlert == "false") {
                var activity = new Activity(activity_name);
                activity.add_saveItem();
                var innerAct = new InnerAct(activity_name);
                innerAct.add_saveItem();
                $location.path('/activity_register');
            }
        };
    });
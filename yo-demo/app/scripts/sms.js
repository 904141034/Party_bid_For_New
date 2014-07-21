//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
       native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        //console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);

        }
    },

    process_received_message: function (json_message) {

        //提取出活动
        var activities = JSON.parse(localStorage.getItem('activities')) || [];

        var InnerAct=JSON.parse(localStorage.getItem('InnerAct'))|| [];
        var mess=json_message.messages[0].message;
        var get_name="";
        var get_phone="";
        var str="";
        var ll=0;
        //方法一去空格并判断bm
        var message = mess.replace(/\s/g, "");
        var b=message.search(/bm/i);
        if(b==0){
            get_name=message.substr(2);
            get_phone= json_message.messages[0].phone;
        }else{
            get_name="null";

        }

//        //方法二去空格并判断bm
//        for(var i=0;i<mess.length;i++){
//            if(mess.substr(i,1)!=" "){
//                str+=mess.substr(i,1);
//            }
//        }

//        if(str.substr(0,2)=="bm"||str.substr(0,2)=="BM"||str.substr(0,2)=="Bm"||str.substr(0,2)=="bM"){
//            get_name=str.substr(2);//姓名
//            get_phone = json_message.messages[0].phone;
//        }

        if(InnerAct.act=="true") {
            for (var j = 0; j < activities.length; j++) {


                if (activities[j].name == InnerAct.name) {

                    var actMessages =activities[j].bmMessages;
                    //检查手机号重复
                    for(var l=0;l<actMessages.length;l++) {
                        if (actMessages[l].phone_number != get_phone) {
                            ll++;
                        }
                    }
                    if(ll==actMessages.length) {
                        //新建一个对象存储报名用户信息
                        var bmMessage = {};
                        var bmMessages = activities[j].bmMessages;
                        if (get_name != "null") {
                        bmMessage.person_name = get_name;
                        bmMessage.phone_number = get_phone;
                        bmMessages.unshift(bmMessage);
                        activities[j].bmMessages = bmMessages;
                        localStorage.setItem("activities", JSON.stringify(activities));
                        var message = "恭喜！报名成功";
                        this.send_sms(get_phone, message);
                    }
                    }

                }

            }
        }
        if(InnerAct.act=="false"){
            var message="活动尚未开始，请稍候！";
            this.send_sms(get_phone,message);
        }
        if(InnerAct.act==""){
            var message="Sorry,活动报名已结束！";
            this.send_sms(get_phone,message);
        }

        //获得报名id刷新报名页面
        var signUp = document.getElementById("register");  //获取报名页面的id
        if (signUp) {
            var scope = angular.element(signUp).scope();
            //通过id找到对应的页面获取$scope
            scope.$apply(function () {   //使用$apply()将报名页面的refresh方法包起来
                scope.refresh();
            });
        }

    }
}

function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}

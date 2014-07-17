//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
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
        var get_name = json_message.messages[0].message.substr(2); //姓名
        var get_phone = json_message.messages[0].phone; //电话
        if(InnerAct.act==true) {
            for (var j = 0; j < activities.length; j++) {

                if (activities[j].name == InnerAct.name) {
                    //新建一个对象存储报名用户信息
                    var bmMessage = {};
                    var bmMessages = activities[j].bmMessages;
                    bmMessage.person_name = get_name;
                    bmMessage.phone_number= get_phone;
                    bmMessages.unshift(bmMessage);
                    activities[j].bmMessages = bmMessages;
                    localStorage.setItem("activities", JSON.stringify(activities));
                    var message="恭喜！报名成功";
                    this.send_sms(get_phone,message);
                }

            }
        }
        if(InnerAct.act==null){
            var message="活动已结束！";
            this.send_sms(get_phone,message);
        }
        if(InnerAct.act==false){
            var message="活动还未开始！";
           this.send_sms(get_phone,message);


        }



    }
}


function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}

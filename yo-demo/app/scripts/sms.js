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
        //新建一个数组存储报名用户信息
//        var bmMessages = [];
        var bmMessage = {};
        //提取出活动
        var activities = JSON.parse(localStorage.getItem('activities')) || [];


        for (var j = 0; j < activities.length; j++) {
            if (activities[j].name == "1") {
                //对 activities[j]创建一个空数组
                var bmMessages = activities[j].bmMessages || [];
                var get_name = json_message.messages[0].message.substr(2); //姓名
                var get_phone = json_message.messages[0].phone; //电话
                bmMessage.person_name = get_name;
                bmMessage.phone_number = get_phone;
                bmMessages.unshift(bmMessage);
                console.log(bmMessages);
                activities[j].bmMessages = bmMessages;
                console.log(activities[j].bmMessages);
            }


        }



    }
}


function notify_message_received(message_json) {
    native_accessor.receive_message(message_json);
}

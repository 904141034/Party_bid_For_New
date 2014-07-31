function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=="true" ){
        handleBM(sms_json);
    }
    if(localStorage.is_bidding == "true"){
        handleJJ(sms_json);
    }
}
function handleBM(sms_json){
    var mess = sms_json.messages[0].message;
    var message = mess.replace(/\s/g, "");
    var bm = message.search(/bm/i);
    var phone = sms_json.messages[0].phone;
    if(bm==0 && typeof(bm)!="undefined"){
        var name=message.substr(2);
        handleBMfunction(name,phone);
    }
}
function handleBMfunction(name,phone){
    var activities = JSON.parse(localStorage.activities);
    var current_activity_id=localStorage.current_activity_id;
    var activity_sign_ups=_.findWhere(activities,{id:current_activity_id}).sign_ups;
    var sign_ups=_.findWhere(activity_sign_ups,{phone:phone});

    if(typeof(sign_ups)=="undefined"){
        var sigh_up=new Sign_ups(name,phone);
        activity_sign_ups.unshift(sigh_up);
        Activity.setActivities(activities);
    }

}
function handleJJ(sms_json){
    var mess = sms_json.messages[0].message;
    var message = mess.replace(/\s/g, "");
    var jj = message.search(/jj/i);
    var phone = sms_json.messages[0].phone;
    if(jj==0 && typeof(jj)!="undefined"){
        var price=message.substr(2);
        handleJJ_function(price,phone);
    }
}
function handleJJ_function(price,phone){
    var activities = JSON.parse(localStorage.activities);
    var current_activity_id=localStorage.current_activity_id;
    var activity=activities[current_activity_id];
    var sign_ups=_.findWhere(activity.sign_ups,{phone:phone});
    if(typeof(sign_ups)!="undefined"){
        save_bid(activity,phone,price,activities);
    }
}
function save_bid(activity,phone,price,activities){
    var current_bid=localStorage.current_bid;
    var hasbiddings= _.findWhere(activity.biddings[current_bid],{phone:phone});
    if(typeof(hasbiddings)=="undefined"){
        var bid=new Bid(price,phone);

        activity.biddings[current_bid].unshift(bid);

        Activity.setActivities(activities);
    }
}



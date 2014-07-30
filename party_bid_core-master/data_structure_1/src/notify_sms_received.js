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
    var current_activity=localStorage.current_activity;
    var activity_sign_ups=_.findWhere(activities,{name:current_activity}).sign_ups;
    var result=_.findWhere(activity_sign_ups,{name:name});
    if(typeof(result)=="undefined"){
        var sigh_up=new sign_ups(name,phone);
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
        handleJJfunction(price,phone);
    }
}
function handleJJfunction(price,phone){
    var activities = JSON.parse(localStorage.activities);
    var current_activity=localStorage.current_activity;
    var current_bid=localStorage.current_bid;
    var activity=_.findWhere(activities,{name:current_activity});
    var bid= _.findWhere(activity.bids,{name:current_bid});
    var bidding=_.findWhere(bid.biddings,{phone:phone});
    if(typeof(bidding)=="undefined"){
        save_bid(activity,phone,price,activities);
    }
}
function save_bid(activity,phone,price,activities){
    var sign_ups= _.findWhere(activity.sign_ups,{phone:phone});
    if(typeof(sign_ups)!="undefined"){
        var name=sign_ups.name;
        var biddings=_.findWhere(activity.bids,{name:localStorage.current_bid}).biddings;
        var bidmessage={};
        bidmessage.name=name;
        bidmessage.phone=phone;
        bidmessage.price=price;
        biddings.unshift(bidmessage);
        Activity.setActivities(activities);
    }
}

function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=="true" ){
        handleBM(sms_json);
    }
    localStorage.is_bidding == "true"? handleJJ(sms_json):create_new_bid(localStorage.current_activity_id);

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
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var has_sign_ups=_.findWhere(sign_ups,{phone:phone});
    if(typeof(has_sign_ups)=="undefined"){
        var activity_id= localStorage.current_activity;
        var sigh_up=new Sign_up(name,phone,activity_id);
        sign_ups.unshift(sigh_up);
        Sign_up.setsign_ups(sign_ups);
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
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var current_activity_id=localStorage.current_activity.toString();
    var flt_sign_ups=_.filter(sign_ups,function(sign_up){ return sign_up.activity_id==current_activity_id});
    var has_sign_ups=_.findWhere(flt_sign_ups,{phone:phone});
    typeof(has_sign_ups)!="undefined"?save_bid(has_sign_ups.name,phone,price): create_new_bid(current_activity_id);

}
function save_bid(name,phone,price){
    var bids= JSON.parse(localStorage.bids);
    bids.length==0 ? create_bid_bid(name,phone,price):judge_save_bid(name,phone,price);
}
function create_bid_bid(name,phone,price){
    var current_activity_id=localStorage.current_activity.toString();
    create_new_bid(current_activity_id);
    judge_save_bid(name,phone,price);
}
function judge_save_bid(name,phone,price){
    var bids= JSON.parse(localStorage.bids);
    var certain_bid= _.findWhere(bids,{activity_id:localStorage.current_activity,name:localStorage.current_bid});
    var has_bidding= _.findWhere(certain_bid.biddings,{phone:phone});

    if(typeof(has_bidding)=="undefined"){
        var bidding={};
        bidding.name=name;
        bidding.phone=phone;
        bidding.price=price;
        certain_bid.biddings.push(bidding);
        Bid.setBids(bids);
    }
}

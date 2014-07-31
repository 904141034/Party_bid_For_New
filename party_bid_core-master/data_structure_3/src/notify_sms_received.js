function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=="true" ){
        handleBM(sms_json);
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
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var has_sign_ups=_.findWhere(sign_ups,{phone:phone});
    if(typeof(has_sign_ups)=="undefined"){
        var activity_id= localStorage.current_activity;
        var sigh_up=new Sign_up(name,phone,activity_id);
        sign_ups.unshift(sigh_up);
        Sign_up.setsign_ups(sign_ups);
    }

}

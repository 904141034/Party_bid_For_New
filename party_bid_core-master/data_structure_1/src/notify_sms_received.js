function notify_sms_received(sms_json){
    if(localStorage.is_signing_up=="true"){
        handleBM(sms_json);
    }



}
function handleBM(sms_json){
    var mess = sms_json.messages[0].message;
    var message = mess.replace(/\s/g, "");
    var bm = message.search(/bm/i);
    var phone = sms_json.messages[0].phone;
    if(bm==0){
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
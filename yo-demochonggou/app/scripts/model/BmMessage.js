/**
 * Created by lishaodan on 14-7-29.
 */
function BmMessage(get_name,get_phone){
    this.person_name = get_name;
    this.phone_number=get_phone;
}
BmMessage.prototype.add_saveItem=function(){
    var activities=Activity.getActivities();
    var innerAct=InnerAct.getInnerAct();
    _.findWhere(activities,{name:innerAct.name}).bmMessages.unshift(this);
    Activity.setActivities(activities);
};
BmMessage.bYes1=function(get_name,get_phone){
    var namePhone={};
    namePhone.get_name=get_name;
    namePhone.get_phone =get_phone;
    namePhone.message="";
    return namePhone;
};
BmMessage.bYes=function(namePhone){
    var retu= BmMessage.bYes2(namePhone);
    return retu;
};
BmMessage.bYes2=function(namePhone){
    var innerAct=InnerAct.getInnerAct();
    if(innerAct.act=="true"){
        namePhone=BmMessage.handlesmsMessage(namePhone);
    }else if(innerAct.act!="true"){
        innerAct.act=="false"? namePhone.message= "活动尚未开始，请稍候！":namePhone.message="Sorry,活动报名已结束！";
    }
    return namePhone;
};
BmMessage.handlesmsMessage=function(namePhone){
    var bmMessages=Activity.return_bmMessages();
    var result=_.findWhere(bmMessages,{phone_number:namePhone.get_phone});
    if (typeof(result) == "undefined") {
        var bm = new BmMessage(namePhone.get_name, namePhone.get_phone);
        bm.add_saveItem();
        namePhone.message="恭喜！报名成功";

    }
    return namePhone;
};
BmMessage.idRegistered=function(get_bidPhone){
    var bmMessages=Activity.return_bmMessages();
    var result=_.findWhere(bmMessages,{phone_number:get_bidPhone});
    var person_name;
    typeof(result)=="undefined"? person_name="":person_name=result.person_name;
    return person_name;
};
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
    namePhone.get_name = get_name;
    namePhone.get_phone = get_phone;
    namePhone.b="0";
    return namePhone;
};
BmMessage.bNo=function(){
    var namePhone={};
    namePhone.get_name = "null";
    namePhone.get_phone="null";
    namePhone.b="-1";
    return namePhone;
};
BmMessage.bYes=function(namePhone){
   if(namePhone.b=="0"){
       BmMessage.bYes2(namePhone);
   }

};
BmMessage.bYes2=function(namePhone){
    var innerAct=InnerAct.getInnerAct();
    if(innerAct.act=="true"){
        BmMessage.handsmsMessage(namePhone);
    }
};
BmMessage.handsmsMessage=function(namePhone){
    var bmMessages=Activity.return_bmMessages();
    var result=_.findWhere(bmMessages,{phone_number:namePhone.get_phone});
    if (typeof(result) == "undefined") {
        var bm = new BmMessage(namePhone.get_name, namePhone.get_phone);
        bm.add_saveItem();
    }

};
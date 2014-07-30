/**
 * Created by lishaodan on 14-7-30.
 */
function JJMessage(get_bidPrice,get_bidPhone,person_name){
    this.person_name=person_name;
    this.bid_price=get_bidPrice;
    this.phone_number=get_bidPhone;
}
JJMessage.prototype.add_saveItem=function(){
    var activities=Activity.getActivities();
    var innerAct=InnerAct.getInnerAct();
    var bidlists=_.findWhere(activities,{name:innerAct.name}).bidlists;
    _.findWhere(bidlists,{bid_name:innerAct.bid_name}).bidMessages.unshift(this);
    Activity.setActivities(activities);
    var RetMessage="恭喜！您已出价成功";
    return RetMessage;
};
JJMessage.JYes=function(get_bidPrice,get_bidPhone){
    var person_name=BmMessage.idRegistered(get_bidPhone);
    var message;
   person_name==""?message=JJMessage.NotRestered():message=JJMessage.Registered(get_bidPrice,get_bidPhone,person_name);
    return message;
};
JJMessage.NotRestered=function(){
    var RetMessage= "对不起，您没有报名此次活动！";
    return RetMessage;
};
JJMessage.Registered=function(get_bidPrice,get_bidPhone,person_name){
    var innerAct=InnerAct.getInnerAct();
    var message;
  innerAct.bid_act=="true"? message=JJMessage.isphoneSame(get_bidPrice,get_bidPhone,person_name):message=JJMessage.bidNotStart();
    return message;
};
JJMessage.bidNotStart=function(){
    var RetMessage= "对不起，竞价尚未开始，或者竞价已结束！";
    return RetMessage;
};
JJMessage.isphoneSame=function(get_bidPrice,get_bidPhone,person_name){
    var bidlists=BidList.get_listBid();
    var innerAct=InnerAct.getInnerAct();
    var bidMessages=_.findWhere(bidlists,{bid_name:innerAct.bid_name}).bidMessages;
    var result=_.findWhere(bidMessages,{phone_number:get_bidPhone});
    var message;
   typeof(result)=="undefined"? message=JJMessage.phoneNotSame(get_bidPrice,get_bidPhone,person_name):message=JJMessage.phoneSame();
    return message;
};
JJMessage.phoneSame=function(){
    var RetMessage= "你已成功出价，请勿重复出价！";
    return RetMessage;
};
JJMessage.phoneNotSame=function(get_bidPrice,get_bidPhone,person_name){
    var jj = new JJMessage(get_bidPrice,get_bidPhone,person_name);
    var message=jj.add_saveItem();
    return message;

};
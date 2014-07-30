/**
 * Created by lishaodan on 14-7-28.
 */
function InnerAct(activity_name){
    this.name = activity_name;
    this.act = "false";
    this.bid_name="";
    this.bid_act="";

}
InnerAct.prototype.add_saveItem=function()
{
   var innerAct=this;
   InnerAct.setInnerAct(innerAct);

};
InnerAct.setInnerAct=function(innerAct)
{
    localStorage.setItem('innerAct',JSON.stringify(innerAct)) ;
};
InnerAct.getInnerAct=function()
{
    var innerAct=JSON.parse(localStorage.getItem("innerAct"))||{};
    return innerAct;
};
InnerAct.Create_bidOrNot=function($scope){
    var innerAct=InnerAct.getInnerAct();
    innerAct.act=="true"? $scope.create_bid=false:InnerAct.hasNoAct($scope);
};
InnerAct.hasNoAct=function($scope){
    var bidlists=BidList.get_listBid();
    var list=_.findWhere(bidlists,{status:"status"});
    typeof(list)=="undefined"?$scope.create_bid=true: $scope.create_bid=false;
};
InnerAct.bidregisterOrNot=function($scope){
    var innerAct=InnerAct.getInnerAct();
    innerAct.bid_act == "false"? $scope.startbid = false:$scope.startbid = true;
};
InnerAct.judgeAct=function(){
    var innerAct=InnerAct.getInnerAct();
    return (innerAct.act != "true" ? InnerAct.judgeActaction1():InnerAct.judgeActaction2());


};
InnerAct.judgeActaction1=function(){
    var innerAct=InnerAct.getInnerAct();
    var message;
    innerAct=="false" ? message = "活动尚未开始，请稍候！": message = "Sorry,活动报名已结束！";
    return message;
};
InnerAct.judgeActaction2=function(){
    return "";
};

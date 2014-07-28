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

}
//InnerAct.getInnerAct=function()
//{
//    var innerAct= JSON.parse(localStorage.getItem('innerAct'));
//    console.log(innerAct);
//    return innerAct;
//};
InnerAct.setInnerAct=function(innerAct)
{
    localStorage.setItem('InnerAct',JSON.stringify(innerAct)) ;
};


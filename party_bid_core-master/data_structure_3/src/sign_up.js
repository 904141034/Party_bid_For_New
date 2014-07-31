function Sign_up(name,phone,activity_id){
    this.name=name;
    this.phone=phone;
    this.activity_id=activity_id;
}
Sign_up.setsign_ups=function(sign_ups){
    localStorage.setItem('sign_ups',JSON.stringify(sign_ups)) ;
};
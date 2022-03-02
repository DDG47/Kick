
var Butmenu = document.getElementById("icon_M");
var Butback = document.getElementById("back_b");
var menud = document.getElementById("menud");
var but_bcF = document.getElementById("backd");
var but_FcF = document.getElementById("Fackd");
var img_show = document.getElementById("showd");

Butmenu.onclick = function(){
    menud.style.marginLeft = "0%";
}
Butback.onclick = function(){
    menud.style.marginLeft = "100%";

}
but_bcF.onclick = function(){
    img_show.src = "Dates/img/reels/re02.jpg";
}
but_FcF.onclick = function(){
    img_show.src = "Dates/img/reels/re01.jpg";
}
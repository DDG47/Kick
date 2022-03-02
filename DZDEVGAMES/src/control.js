var url_yt = "https://www.youtube.com/channel/UC-JxrnOKQem0gnwWyYhgFCw";
var footer_yt = document.getElementById("yt-targ").href = url_yt;
var url_fb = "https://www.facebook.com/DzDevGames";
var footer_fb = document.getElementById("fb-targ").href = url_fb;
var url_yt1 = "https://www.youtube.com/channel/UC-JxrnOKQem0gnwWyYhgFCw";
var footer_yt1 = document.getElementById("yt-targ-01").href = url_yt1;

////////////Main Vars
////Var For Hadit
var numaHDIT = 4;

var heightAside = 1000;





//// do it
document.getElementById("ASD").style.height = heightAside + "px";




function SetMove(id, x,y){
    document.getElementById(id).style.marginLeft = x;
    document.getElementById(id).style.marginTop = y;
}
function SetDis(id,type){
    document.getElementById(id).style.display = type;
}










////////////
var img = new Array;
img[0] = document.getElementById("m1");
img[1] = document.getElementById("m2");
img[2] = document.getElementById("m3");
img[3] = document.getElementById("m4");

var pp = new Array;
pp[0] = document.getElementById("p1");
pp[1] = document.getElementById("p2");
pp[2] = document.getElementById("p3");
pp[3] = document.getElementById("p4");


var cv = document.getElementById("cover");
var tx = document.getElementById("txt");


var hl = document.getElementById("helo");






var d_v = new XMLHttpRequest();
d_v.open("GET", "src/video_data.json");
d_v.onload = function(){
    var data = JSON.parse(this.responseText);
    var d = Math.floor(Math.random() * data.length);
    var dback = new Array;

    
    cv.src = data[numaHDIT].URL;
    tx.innerHTML = data[numaHDIT].Name;
    for (var i = 0; i < img.length; i++) {
        img[i].src = data[i].URL;
        pp[i].innerHTML = data[i].Name;
    }

}
d_v.send();

var dz = new XMLHttpRequest();
dz.open("GET", "src/main.json");
dz.onload = function(){
    var sd = JSON.parse(this.responseText);
    var info = document.getElementById("infj");
    var a_download = document.getElementById("ado");

//////////////////////////AH
    var ah1 = document.getElementById("a_h_1");
    var ah2 = document.getElementById("a_h_2");
    var ah3 = document.getElementById("a_h_3");
    var ah4 = document.getElementById("a_h_4");


    hl.innerHTML = sd[0].tx;
    info.innerHTML = sd[0].info;
    a_download.href = sd[0].ado;

    ah1.href = sd[1].Url1;
    ah2.href = sd[1].Url2;
    ah3.href = sd[1].Url3;
    ah4.href = sd[1].Url4;
}
dz.send();


function getLink(url){
    window.open(url, "_blank");
}

function setscrool(down)
{
    window.scroll(0, down);
    console.log(down);
}
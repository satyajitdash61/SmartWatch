let currentdate=new Date();

function message(){
    document.getElementById("message").style.backgroundColor="aqua";
    document.getElementById("music").style.backgroundColor="white";
    document.getElementById("timer").style.backgroundColor="white";
    document.getElementById("musictitle").style.display="none";
    document.getElementById('messagetitle').style.display = "block";
    document.getElementById("timertitle").style.display="none";
    document.getElementById('time').style.left = "59%";
    document.getElementById("time").innerHTML=currentdate.getHours()+":"+currentdate.getMinutes();
    document.getElementById('messagetitle').style.left = "0%";
    document.getElementById('welcomeTime').style.display = "none";
}
function music(){
    document.getElementById("music").style.backgroundColor="aqua";
    document.getElementById("message").style.backgroundColor="white";
    document.getElementById("timer").style.backgroundColor="white";
    document.getElementById("messagetitle").style.display="none";
    document.getElementById("musictitle").style.display="block";
    document.getElementById("timertitle").style.display="none";
    document.getElementById("time").style.left="290%";
    document.getElementById("musictitle").style.right = "10%";
    document.getElementById("welcomeTime").style.display="none";
}
function timer(){
    document.getElementById("music").style.backgroundColor="white";
    document.getElementById("message").style.backgroundColor="white";
    document.getElementById("timer").style.backgroundColor="aqua";
    document.getElementById("messagetitle").style.display="none";
    document.getElementById("musictitle").style.display="none";
    document.getElementById("timertitle").style.display="block";
    document.getElementById("time").style.left="290%";
    document.getElementById("musictitle").style.right = "10%";
    document.getElementById("welcomeTime").style.display="none";
}
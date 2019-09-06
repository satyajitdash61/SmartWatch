let currentdate=new Date();
$(document).ready(function(){
    document.getElementById("welcomeTime").innerHTML=currentdate.getHours()+":"+currentdate.getMinutes();

})
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
    document.getElementById("messagebox1").style.display="block";
    document.getElementById("messagebox2").style.display="block";
    document.getElementById("messagebox3").style.display="block";


}
function music(){
    document.getElementById("music").style.backgroundColor="aqua";
    document.getElementById("message").style.backgroundColor="white";
    document.getElementById("timer").style.backgroundColor="white";
    document.getElementById("messagetitle").style.display="none";
    document.getElementById("musictitle").style.display="block";
    document.getElementById("timertitle").style.display="none";
    document.getElementById("time").style.left="300%";
    document.getElementById("time").firstChild.innerHTML=currentdate.getHours()+":"+currentdate.getMinutes();
    document.getElementById("musictitle").style.right = "10%";
    document.getElementById("welcomeTime").style.display="none";
    document.getElementById("messagebox1").style.display="none";
    document.getElementById("messagebox2").style.display="none";
    document.getElementById("messagebox3").style.display="none";


}
function timer(){
    document.getElementById("music").style.backgroundColor="white";
    document.getElementById("message").style.backgroundColor="white";
    document.getElementById("timer").style.backgroundColor="aqua";
    document.getElementById("messagetitle").style.display="none";
    document.getElementById("musictitle").style.display="none";
    document.getElementById("timertitle").style.display="block";
    document.getElementById("time").style.left="300%";
    document.getElementById("musictitle").style.right = "10%";
    document.getElementById("welcomeTime").style.display="none";
    document.getElementById("messagebox1").style.display="none";
    document.getElementById("messagebox2").style.display="none";
    document.getElementById("messagebox3").style.display="none";


    
}
function start(){
    var deadline = new Date("Sep 7, 2019 23:59:59").getTime(); 
    var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline-now; 
    //var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("countdown").innerHTML =  
     hours + ":" + minutes + ":" + seconds; 
    if (t < 0) 
        { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
        } 
    }, 1000); 
    }
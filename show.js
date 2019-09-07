let currentdate=new Date();
$(document).ready(function(){
    document.getElementById("welcomeTime").innerHTML=currentdate.getHours()+":"+currentdate.getMinutes();

})

let arr=[{name:"sasank", sms:"Hi, good morning"},
        {from:"saurav", sms:"Hi ,good evening"},
        {from:"puneet", sms:"Hi ,good afternoon"},
        {from:"pop", sms:"Hi ,good evening"},
        {from:"amazon", sms:"Hi ,good evening"},
        ];
        
        
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
    document.getElementsByClassName("sms").style.display="block";


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
    document.getElementsByClassName("sms").style.display="none";


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
    document.getElementsByClassName("sms").style.display="none";


    
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


//     var timer = document.getElementById('countdown');
// var toggleBtn = document.getElementById('start');
// var resetBtn = document.getElementById('reset');

// var watch = new Stopwatch(timer);

// function start() {
//   toggleBtn.textContent = 'Stop';
//   watch.start();
// }

// function stop() {
//   toggleBtn.textContent = 'Start';
//   watch.stop();
// }

// toggleBtn.addEventListener('click', function() {
//   watch.isOn ? stop() : start();
// });

// resetBtn.addEventListener('click', function() {
//   watch.reset();
// })

// function Stopwatch(elem) {
//     var time = 0;
//     var offset;
//     var interval;
  
//     function update() {
//       if (this.isOn) {
//         time += delta();
//       }
      
//       elem.textContent = timeFormatter(time);
//     }
  
//     function delta() {
//       var now = Date.now();
//       var timePassed = now - offset;
  
//       offset = now;
  
//       return timePassed;
//     }
  
//     function timeFormatter(time) {
//       time = new Date(time);
  
//       var minutes = time.getMinutes().toString();
//       var seconds = time.getSeconds().toString();
//       var milliseconds = time.getMilliseconds().toString();
  
//       if (minutes.length < 2) {
//         minutes = '0' + minutes;
//       }
  
//       if (seconds.length < 2) {
//         seconds = '0' + seconds;
//       }
  
//       while (milliseconds.length < 3) {
//         milliseconds = '0' + milliseconds;
//       }
  
//       return minutes + ' : ' + seconds + ' . ' + milliseconds;
//     }
  
//     this.start = function() {
//       interval = setInterval(update.bind(this), 10);
//       offset = Date.now();
//       this.isOn = true;
//     };
  
//     this.stop = function() {
//       clearInterval(interval);
//       interval = null;
//       this.isOn = false;
//     };
  
//     this.reset = function() {
//       time = 0;
//       update();
//     };
  
//     this.isOn = false;
//   }
}

    
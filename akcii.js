var countDown = new Date("Nov 25, 2023 23:59:59").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days +"d "+hours+"h "+minutes+"m "+ seconds + "s ";
    if(distance<0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "ВРЕМЯ ВЫШЛО";
    }
}, 1000);
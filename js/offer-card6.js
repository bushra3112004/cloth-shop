
var countDownDate6 = new Date("may 28, 2024 17:30:15").getTime();


var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate6 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo2").innerHTML = "EXPIRED";
    }
}, 1000);
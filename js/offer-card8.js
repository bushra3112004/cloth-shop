var countDownDate8 = new Date("june 5, 2024 10:12:25").getTime();


var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = countDownDate8 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("demo4").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo4").innerHTML = "EXPIRED";
    }
}, 1000);
const endDate = new Date("29 Dec, 2024 21:49:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDayInMillis = (24 * 60 * 60 * 1000)
    const oneHrInMillis = (60 * 60 * 1000)
    const oneMinInMillis = (60 * 1000);

    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending % oneDayInMillis) / oneHrInMillis);
    const mins = Math.floor((distancePending % oneHrInMillis) / oneMinInMillis);
    const secs = Math.floor((distancePending % oneMinInMillis) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("Countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";

        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        return;
    }

    //progess bar
    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered / totalDistance) * 100;
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

}
, 1000);
window.onload = function () {
    stuff();
};

function stuff(openh, closeh, openm=0, closem=60) {

    openh = 7;
    closeh = 21;

    var today = new Date();
    //Delete the line below
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    if (hours >= openh && hours < closeh && minutes >= openm && minutes < closem) {
        console.log("open");
    }
    else {
        console.log("closed");
    }

    console.log(time);
    setTimeout(stuff, 5000);
}
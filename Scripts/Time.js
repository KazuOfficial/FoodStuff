window.onload = function () {
    setTimeout(stuff, 5000);
};

function stuff(openh, closeh, openm=0, closem=60) {

    setTimeout(stuff, 5000);

    openh = 7;
    closeh = 21;

    var today = new Date();
    //Delete the line below
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    //var getH = getHours();

    if (hours >= openh && hours < closeh && minutes >= openm && minutes < closem) {
        console.log("open");
    }
    else {
        console.log("closed");
    }

    console.log(time);
    setTimeout(stuff, 5000);
}

function getHours(element) {

    var d = document.getElementById(element);
    d = d.innerHTML;

    var openh = d.split("").slice(0)[0];
    var closeh = d.split("").slice(-3)[0];

    console.log(openh);
    console.log(closeh);

    return [openh, closeh];

    //var getH = getHours();
    //var openh = getH[0];
    //var closeh = getH[1];
}
function stuff(openm = 0, closem = 60) {
    var today = new Date();
    //Delete the line below
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var getH = getHours();
    var openh = getH[0];
    var closeh = getH[1];

    if (hours >= openh && hours < closeh && minutes >= openm && minutes < closem) {
        console.log("open");
    }
    else {
        console.log("closed");
    }

    console.log(openh);
    console.log(closeh);
}
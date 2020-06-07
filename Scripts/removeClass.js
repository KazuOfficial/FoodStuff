var flag = 1;

function removeClass(divname, classname) {

    var element = document.getElementById(divname);
    element.classList.remove(classname);

    var secondelement = document.getElementById("foodmenu");
    element.classList.remove("col-lg-12");
    secondelement.className = "col-lg-6";

    if (flag == 1) {
        $("#shop").animate({ top: "+=15" }, 400);
        $("#shop").animate({ top: "-=15" }, 300);
        flag = 0;
    }
}
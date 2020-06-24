var flag = 1;
var i;
var subtract = 0;

var names = [];
var prices = [];
var counter = 0;

var foodcounter = 1;

function removeClass(divname, classname) {

    var element = document.getElementById(divname);
    element.classList.remove(classname);

    if (flag == 1) {
        animShop();
        flag = 0;
    }

    console.log("Removed class: " + classname + " from div: " + divname);
}

function addClass(divname, classname) {

    var element = document.getElementById(divname);
    element.className = classname;

    console.log("Added class: " + classname + " to div: " + divname);
}

function addStyle(styleDiv, styleId, value) {
    document.getElementById(styleDiv).style[styleId] = value;
}

function addItem(name, price) {
    names.push(name);
    prices.push(price);
}

function fullPrice() {
    var fullP = prices.reduce(function (a, b) {
        a = a - subtract;
        return a + b;
    }, 0);

    fullP = parseFloat(fullP).toFixed(2);

    document.getElementById("fullp").innerHTML = "$" + fullP;
}

function removeItem(atd, datd) {

    var stuff = document.getElementById(atd);

    names.splice(names.indexOf(atd), 1);
    prices.splice(prices.indexOf(datd), 1);

    for (i = 0; i < 4; i++) {
        var stuff = document.getElementById(atd);
        stuff.remove();
        console.log("[RemoveItem] showing var 'i': " + i);
    }

    counter--;

    if (names.length < 1) {
        Firstback();
        $("#cart").fadeOut(100);
    }

    var presubtract = parseFloat(datd).toFixed(2);
    fullPrice();
}

function removeRow(atd) {
    var stuff = document.getElementById(atd);
    stuff.remove();
}

function addRow(at, dat) {

    var tableRef = document.getElementById('shopTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();

    var indexCell = newRow.insertCell(0);
    indexCell.setAttribute("id", at);

    var nameCell = newRow.insertCell(1);
    nameCell.setAttribute("id", at);

    var priceCell = newRow.insertCell(2);
    priceCell.setAttribute("id", at);

    var binCell = newRow.insertCell(3);
    binCell.setAttribute("id", at);

    var newText = document.createTextNode("x" + foodcounter);
    var newName = document.createTextNode(names[counter]);
    var newPrice = document.createTextNode("$" + prices[counter]);

    var btntag = document.createElement("button");
    btntag.type = "button";
    btntag.className = "btn btn-link btn-xs";
    btntag.setAttribute("onclick", "removeItem('" + at + "','" + dat + "');");

    var dateString = '<span class="glyphicon glyphicon-trash"></span>';
    btntag.innerHTML = dateString;

    indexCell.appendChild(newText);
    nameCell.appendChild(newName);
    priceCell.appendChild(newPrice);
    binCell.appendChild(btntag);
    counter++;
}

function animFade (fadeDiv, value) {
    $(fadeDiv).fadeIn(value);
}

function cartScript() {
    if (names.length >= 1) {
        animFade('#cart', 500);
    }
}

function animShop() {
    $("#shop").animate({ top: "+=15" }, 400);
    $("#shop").animate({ top: "-=15" }, 300);
}

function scrollToO(scrolldiv) {
    $('html, body').animate({
        scrollTop: $(scrolldiv).offset().top - 105
    }, 800);
}

function countDuplicates(element) {
    var result = {};
    names.forEach(function (x) { result[x] = (result[x] || 0) + 1; });

    if (result[element] > 1) {
        for (i = 0; i < 4; i++) {
            removeRow(element);
            //foodcounter++;
        }
    }

    console.log(result);
    console.log(result.Stopiatka);
}
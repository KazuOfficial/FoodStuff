var flag = 1;

var names = [];
var prices = [];
var counter = 0;

function removeClass(divname, classname) {

    var element = document.getElementById(divname);
    element.classList.remove(classname);

    if (flag == 1) {
        $("#shop").animate({ top: "+=15" }, 400);
        $("#shop").animate({ top: "-=15" }, 300);
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

function addRow() {

    var tableRef = document.getElementById('shopTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();

    var indexCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var priceCell = newRow.insertCell(2);
    var binCell = newRow.insertCell(3);

    var newText = document.createTextNode("x1");
    var newName = document.createTextNode(names[counter]);
    var newPrice = document.createTextNode("$" + prices[counter]);

    var btntag = document.createElement("button");
    var spantag = document.createElement("span");
    btntag.className = "btn btn-link";
    spantag.className = "glyphicon glyphicon-trash";

    indexCell.appendChild(newText);
    nameCell.appendChild(newName);
    priceCell.appendChild(newPrice);
    binCell.appendChild(btntag.appendChild(spantag));
    counter++;
}

function fullPrice() {
    //var fullP = prices.map();
    var fullP = prices.reduce(function (a, b) {
        return a + b;
    }, 0);

    fullP = parseFloat(fullP).toFixed(2);

    document.getElementById("fullp").innerHTML = "$" + fullP;
}

function animFade (fadeDiv, value) {
    $(fadeDiv).fadeIn(value);
}

function cartScript() {
    if (names.length >= 1) {
        animFade('#cart', 500);
    }
    else if (names.length <= 0) {
        addStyle('#cart', 'display', 'none')
    }
}

function animShop() {
    $("#shop").animate({ top: "+=15" }, 400);
    $("#shop").animate({ top: "-=15" }, 300);
}
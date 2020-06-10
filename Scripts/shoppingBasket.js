var flag = 1;

var names = [];
var prices = [];
var counter = 0;

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

function addRow() {

    var tableRef = document.getElementById('shopTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();

    var indexCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var priceCell = newRow.insertCell(2);

    var newText = document.createTextNode("x1");
    var newName = document.createTextNode(names[counter]);
    var newPrice = document.createTextNode("$" + prices[counter]);

    indexCell.appendChild(newText);
    nameCell.appendChild(newName);
    priceCell.appendChild(newPrice);
    counter++;
}

function addItem(name, price) {
    names.push(name);
    prices.push(price);
}

function fullPrice() {
    //var fullP = prices.map();
    var fullP = prices.reduce(function (a, b) {
        return a + b;
    }, 0);

    fullP = parseFloat(fullP).toFixed(2);

    document.getElementById("fullp").innerHTML = "$" + fullP;
}
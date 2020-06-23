function Firstback() {
    addClass('shop', 'hidden col-lg-6 col-xs-12 pull-right jumbotron fixedElement');
    removeClass('foodmenu', 'col-lg-6');
    addClass('foodmenu', 'col-lg-12');
}

function Secondback() {
    addClass('form', 'hidden');
    addClass('paymenttype', 'hidden');
    removeClass('placeanorder', 'hidden');
    addClass('placeanorder', 'list-group-item list-group-item-action circle');
    removeClass('firstback', 'hidden');
    addClass('secondback', 'hidden');
    addClass('firstback', 'btn btn-link pull-right');
}

function Thirdback() {
    addClass('paypal-button-container', 'hidden');
    removeClass('form', 'hidden');
    removeClass('paymenttype', 'hidden');
    addClass('paymenttype', 'list-group-item list-group-item-action circle');
    addClass('thirdback', 'hidden');
    removeClass('secondback', 'hidden');
    addClass('secondback', 'btn btn-link pull-right');
}

function PlaceAnOrder() {
    removeClass('form', 'hidden');
    removeClass('paymenttype', 'hidden');
    removeClass('secondback', 'hidden');
    addClass('firstback', 'hidden');
    addClass('paymenttype', 'list-group-item list-group-item-action circle');
    addClass('placeanorder', 'hidden circle');
    addClass('secondback', 'btn btn-link pull-right');
}

function PaymentType() {
    removeClass('paypal-button-container', 'hidden');
    removeClass('thirdback', 'hidden');
    addClass('secondback', 'hidden');
    addClass('paymenttype', 'hidden circle');
    addClass('form', 'hidden');
    addClass('thirdback', 'btn btn-link pull-right');
}
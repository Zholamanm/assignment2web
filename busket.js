var firstValue = document.getElementById("hudi").textContent.replace(/\$/g, "").trim();
var secondValue = document.getElementById("shorti").textContent.replace(/\$/g, "").trim();
var thirdValue = document.getElementById("shorti").textContent.replace(/\$/g, "").trim();
var checkbox = document.getElementById("flexCheckDefault");


var firstPrice = parseFloat(firstValue);
var secondPrice = parseFloat(secondValue);
var thirdPrice = parseFloat(thirdValue);


var totalAmount = firstPrice + secondPrice + thirdPrice;

document.getElementById("total").textContent = totalAmount + "$";

document.getElementById("skidka").textContent = sale();

function sale(){
    if(secondPrice == thirdPrice){
        return "2 шорты подарок";
    }
    else{
        return 0;
    }
}

var dostavka = document.getElementById("dostavka").textContent.replace(/\$/g, "").trim();
var dostavkaPrice = parseFloat(dostavka);

var finalAmount = totalAmount+dostavkaPrice;

document.getElementById("final").textContent = finalAmount + "$" + " + 2 шорт в подарок";

var buyButton = document.getElementById("buy");

buyButton.addEventListener("click", function() {
    var yesOrno = prompt("Вы уверены? да или нет")
    if(yesOrno.toLowerCase() === "да"){
    alert("Поздравляем! Ваш заказ успешно оформлен!");
    }
    else{
        alert("Подумайте");
    }
});

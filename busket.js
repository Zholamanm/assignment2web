var firstValue = document.getElementById("hudi").textContent.replace(/\$/g, "").trim();
var secondValue = document.getElementById("shorti").textContent.replace(/\$/g, "").trim();
var thirdValue = document.getElementById("shorti").textContent.replace(/\$/g, "").trim();
var checkbox = document.getElementById("flexCheckDefault");
var dostavka = document.getElementById("dostavka").textContent.replace(/\$/g, "").trim();


var firstPrice = parseFloat(firstValue);
var secondPrice = parseFloat(secondValue);
var thirdPrice = parseFloat(thirdValue);


var totalAmount = firstPrice + secondPrice + thirdPrice;

// document.getElementById("total").textContent = totalAmount + "$";

// document.getElementById("skidka").textContent = sale();

function sale(){
    if(secondValue == thirdValue){
        return "2 шорты подарок";
    }
    else{
        return 0;
    }
}

var dostavka = document.getElementById("dostavka").textContent.replace(/\$/g, "").trim();
var dostavkaPrice = parseFloat(dostavka);

var finalAmount = totalAmount+dostavkaPrice;

// document.getElementById("final").textContent = finalAmount + "$" + " + 2 шорт в подарок";

var buyButton = document.getElementById("buy");

var all = 3;

document.addEventListener("change", function(e) {
    if (e.target.matches("#flexCheckDefault, #flexCheckDefault1, #flexCheckDefault2")) {
        var count = 0;
        var price = 0;
        var skidka = "";
        var final = 0;
        var item1 = document.getElementById('flexCheckDefault').checked;
        if(item1 === true){
            count++;
            price += firstPrice;
        }
        var item2 = document.getElementById('flexCheckDefault1').checked;
        if(item2 === true){
            count++;
            price += secondPrice;
        }
        var item3 = document.getElementById('flexCheckDefault2').checked;
        if(item3 === true){
            count++;
            price += thirdPrice;
        }
        if(item2 === true && item3 === true) {
            document.getElementById("skidka").textContent = sale();
            skidka = "2 шорт в подарок"
        }
        else {
            document.getElementById("skidka").textContent = "Нет скидки";
        }
        final = parseInt(dostavka) + price;
        document.getElementById('count').innerHTML = count;
        document.getElementById('total').textContent = price + '$';
        document.getElementById("final").textContent = final + "$" + " " + skidka;
    }
});

buyButton.addEventListener("click", function() {
    var yesOrno = prompt("Вы уверены? да или нет")
    if(yesOrno.toLowerCase() === "да"){
        var countdown = 3;
        for (var i = countdown; i >= 0; i--) {
            if (i === 0) {
                alert("Поздравляем! Ваш заказ успешно оформлен!");

            } else {
                alert("Обратный отсчет: " + i);
                countdown--;

            }
        }
    }
    else{
        alert("Подумайте");
    }
});

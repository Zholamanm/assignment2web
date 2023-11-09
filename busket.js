window.addEventListener('load', function () {

    const hoodie = localStorage.getItem('hoodie');
    const shorti = localStorage.getItem('shorti');

    let hoodieString = JSON.parse(hoodie);
    let shortiString = JSON.parse(shorti);

    let totalQuantity = 0;
    let total = 0;
    let hoodiePrice = 0;
    let shortiPrice = 0;
    let hoodieQuantity = 0;
    let shortiQuantity = 0;
    if (hoodieString) {
        document.getElementById('resultHoodie').innerHTML = hoodieString.hoodie;
        hoodiePrice = parseInt(hoodieString.priceOfHoodie);
        hoodieQuantity = parseInt(hoodieString.quant);
        const hoodieList = document.getElementById('hoodieContainer'); // Используйте уникальный идентификатор
        hoodieList.innerHTML = '';

        let hoodieDiv = document.createElement('div');
        hoodieDiv.innerHTML = `
        <p>Hoodie: <label data-type="text">${hoodieString.hoodie}</label></p>
        <p>Price: <label data-type="number">${hoodieString.priceOfHoodie}</label></p>
        <p>Photo: <img src="${hoodieString.photoOfHoodie}" id="hoodieimg"></p>
    `;
        hoodieList.appendChild(hoodieDiv);
    } else {
        console.log('Данные не найдены в localStorage или не могут быть разобраны в объекты JSON.');
    }
    if (shortiString) {
        document.getElementById('resultShorti').innerHTML = shortiString.shorti;
        shortiPrice = parseInt(shortiString.shortiPrice);
        shortiQuantity = parseInt(shortiString.quant);
        const shortiList = document.getElementById('shortiContainer'); // Используйте уникальный идентификатор
        shortiList.innerHTML = '';

        let shortiDiv = document.createElement('div');
        shortiDiv.innerHTML = `
        <p>Shorti: <label data-type="text">${shortiString.shorti}</label></p>
        <p>Price: <label data-type="text">${shortiString.shortiPrice}</label></p>
        <p>Photo: <img src="${shortiString.photoShorti}" id="shortiimg"></p>
    `;
        shortiList.appendChild(shortiDiv);
    } else {
        console.log('Данные не найдены в localStorage или не могут быть разобраны в объекты JSON.');
    }
    document.getElementById('buyButton').onclick = function () {
        var yesOrno = prompt("Вы уверены? да или нет")
        if(yesOrno.toLowerCase() === "да"){
            alert("Поздравляем! Ваш заказ успешно оформлен!");
            localStorage.removeItem('hoodie');
            localStorage.removeItem('shorti');
        }
        else{
            alert("Подумайте");
        }
    }
    var skidka = shortiQuantity >= 2 ? "2 шорты в подарок" : "Нет скидки";
    totalQuantity = hoodieQuantity + shortiQuantity;
    total = hoodiePrice + shortiPrice;
    var dostavka = document.getElementById("dostavka").textContent.replace(/\$/g, "").trim();
    var final = total + parseInt(dostavka);
    document.getElementById('count').innerHTML = totalQuantity.toString();
    document.getElementById('total').innerHTML = total.toString() + '$';
    document.getElementById("skidka").textContent = skidka;
    document.getElementById("final").textContent = final + "$" + " + " + skidka;

});



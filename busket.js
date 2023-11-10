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
        const hoodieList = document.getElementById('hoodieContainer');
        hoodieList.innerHTML = '';

        let hoodieDiv = document.createElement('div');
        hoodieDiv.innerHTML = `
                        <div class="row text-center align-items-center">
                            <div class="col-lg-3 col-sm-12">
                                <img class="w-100 card-img" src="${hoodieString.photoOfHoodie}" alt="Card image cap" onmouseover="largeimg1()" id="photo1" onmouseleave="smallimg1()">
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <p class="card-text"> ${hoodieString.hoodie} </p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h5 class="card-title" id ="shorti"><span id="price3">${hoodieString.priceOfHoodie}</span>$</h5>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h5 class="card-title" id ="shorti"><span id="price3">${hoodieString.size}</span>:Size</h5>
                            </div>
                        </div>
    `;
        hoodieList.appendChild(hoodieDiv);
    } else {
        console.log('Данные не найдены в localStorage или не могут быть разобраны в объекты JSON.');
    }
    if (shortiString) {
        document.getElementById('resultShorti').innerHTML = shortiString.shorti;
        shortiPrice = parseInt(shortiString.shortiPrice);
        shortiQuantity = parseInt(shortiString.quant);
        const shortiList = document.getElementById('shortiContainer');
        shortiList.innerHTML = '';
        // let shortiImg = document.getElementById('pictures');
        // shortiImg.innerHTML = '';
        // let shortiImgi = document.createElement('div');
        // shortiImgi.innerHTML = '<img src="${shortiString.photoShorti}" alt="picture" class="img-fluid" width="55px">';
        // shortiImg.appendChild(shortiImgi);
        let shortiDiv = document.createElement('div');
        shortiDiv.innerHTML = `
                        <div class="row text-center align-items-center">
                            <div class="col-lg-3 col-sm-12">
                                <img class="w-100 card-img" src="${shortiString.photoShorti}" alt="Card image cap" onmouseover="largeimg()" id="photo" onmouseleave="smallimg()">
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <p class="card-text"> ${shortiString.shorti} </p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h5 class="card-title" id ="shorti"><span id="price3">${shortiString.shortiPrice}</span>$</h5>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h5 class="card-title" id ="shorti"><span id="price3">${shortiString.size}</span>:Size</h5>
                            </div>
                        </div>
        
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
function largeimg() {
    document.getElementById('photo').style = "box-shadow: 0 0 100vw 100vw rgba(0, 0, 0, 0.7);\n" +
        "   transform: scale(1.3);   transition: .3s ease;";
}
function smallimg() {
    document.getElementById('photo').style = "box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n" +
        "   transform: scale(1);   transition: .3s ease;";
}

function largeimg1() {
    document.getElementById('photo1').style = "box-shadow: 0 0 100vw 100vw rgba(0, 0, 0, 0.7);\n" +
        "   transform: scale(1.3);   transition: .3s ease;";
}
function smallimg1() {
    document.getElementById('photo1').style = "box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n" +
        "   transform: scale(1);   transition: .3s ease;";
}




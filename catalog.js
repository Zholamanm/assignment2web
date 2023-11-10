var sizehoodie = "";
var sizeshorti = "";
function addToBusketHoodie(event){
    event.preventDefault();
    var photoOfHoodie = document.getElementById('photoHoodie').src;
    var quant = parseInt(document.getElementById('hoodiequant').value);
    var hoodieV = {
        hoodie: 'Худи',
        priceOfHoodie: 10 * quant,
        photoOfHoodie: photoOfHoodie,
        quant: quant,
        size: sizehoodie,
    };
    if(hoodieV.size === "") {
        alert("Выберите размер");
    } else {
        hoodieString = JSON.stringify(hoodieV);
        localStorage.setItem('hoodie', hoodieString);
    }
    console.log(hoodieV);
}

function addToBusketShorti(event){
    event.preventDefault();
    var photoShorti = document.getElementById('photoShorti').src;
    var quant = parseInt(document.getElementById('shortiquant').value);
    var shortiV = {
        shorti: 'Шорты',
        shortiPrice: 5 * quant,
        photoShorti: photoShorti,
        quant: quant,
        size: sizeshorti,
    }
    if(shortiV.size === "") {
        alert("Выберите размер");
    } else {
        shortiString = JSON.stringify(shortiV);
        localStorage.setItem('shorti', shortiString);
    }
    console.log(shortiV);
}

function hoodieSize(hoodie) {
    sizehoodie = hoodie;
}

function shortiSize(shorti) {
    sizeshorti = shorti;
}
const addToCartButtons = document.querySelectorAll(".btn-primary");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const basketLink = document.querySelector(".nav-item.busket .nav-link");
        basketLink.textContent = "🔴Корзина";
    });
});


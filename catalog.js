function addToBusketHoodie(event){
    event.preventDefault();
    var photoOfHoodie = document.getElementById('photoHoodie').src;
    var quant = parseInt(document.getElementById('hoodiequant').value);
    var hoodieV = {
        hoodie: 'Худи',
        priceOfHoodie: 10 * quant,
        photoOfHoodie: photoOfHoodie,
        quant: quant,
    };
    console.log(hoodieV);
    hoodieString = JSON.stringify(hoodieV);
    localStorage.setItem('hoodie', hoodieString);
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
    }

    console.log(shortiV);
    shortiString = JSON.stringify(shortiV);
    localStorage.setItem('shorti', shortiString);
}
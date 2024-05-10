function changeimage10(imageName10) {
    const mainimage10 = document.getElementById('main-img10')
    mainimage10.src = imageName10;
}

function inc10() {
    const quantityText = document.getElementById("quantity-text10");
    const showQuantity = document.getElementById("show-quantity10");
    const showTotal = document.getElementById("show-total10");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×500`;

    showTotal.innerText = `Total: ${quantity * 500}`;

}
function dec10() {

    const quantityText = document.getElementById("quantity-text10");
    const showQuantity = document.getElementById("show-quantity10");
    const showTotal = document.getElementById("show-total10");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×500`;
    showTotal.innerText = `Total: ${quantity * 500}`;

}


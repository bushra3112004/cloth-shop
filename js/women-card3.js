function changeimage3(imageName3) {
    const mainimage3 = document.getElementById('main-img3')
    mainimage3.src = imageName3;
}

function inc3() {
    const quantityText = document.getElementById("quantity-text3");
    const showQuantity = document.getElementById("show-quantity3");
    const showTotal = document.getElementById("show-total3");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×2999`;

    showTotal.innerText = `Total: ${quantity * 2999}`;

}
function dec3() {

    const quantityText = document.getElementById("quantity-text3");
    const showQuantity = document.getElementById("show-quantity3");
    const showTotal = document.getElementById("show-total3");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×2999`;
    showTotal.innerText = `Total: ${quantity * 2999}`;

}

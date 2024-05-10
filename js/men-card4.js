function changeimage8(imageName8) {
    const mainimage8 = document.getElementById('main-img8')
    mainimage8.src = imageName8;
}

function inc8() {
    const quantityText = document.getElementById("quantity-text8");
    const showQuantity = document.getElementById("show-quantity8");
    const showTotal = document.getElementById("show-total8");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×2600`;

    showTotal.innerText = `Total: ${quantity * 2600}`;

}
function dec8() {

    const quantityText = document.getElementById("quantity-text8");
    const showQuantity = document.getElementById("show-quantity8");
    const showTotal = document.getElementById("show-total8");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×2600`;
    showTotal.innerText = `Total: ${quantity * 2600}`;

}


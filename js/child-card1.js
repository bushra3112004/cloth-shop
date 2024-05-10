function changeimage9(imageName9) {
    const mainimage9 = document.getElementById('main-img9')
    mainimage9.src = imageName9;
}

function inc9() {
    const quantityText = document.getElementById("quantity-text9");
    const showQuantity = document.getElementById("show-quantity9");
    const showTotal = document.getElementById("show-total9");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×1000`;

    showTotal.innerText = `Total: ${quantity * 1000}`;

}
function dec9() {

    const quantityText = document.getElementById("quantity-text9");
    const showQuantity = document.getElementById("show-quantity9");
    const showTotal = document.getElementById("show-total9");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×1000`;
    showTotal.innerText = `Total: ${quantity * 1000}`;

}


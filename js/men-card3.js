function changeimage7(imageName6) {
    const mainimage7 = document.getElementById('main-img7')
    mainimage7.src = imageName7;
}

function inc7() {
    const quantityText = document.getElementById("quantity-text7");
    const showQuantity = document.getElementById("show-quantity7");
    const showTotal = document.getElementById("show-total7");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×1600`;

    showTotal.innerText = `Total: ${quantity * 1600}`;

}
function dec7() {

    const quantityText = document.getElementById("quantity-text7");
    const showQuantity = document.getElementById("show-quantity7");
    const showTotal = document.getElementById("show-total7");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×1600`;
    showTotal.innerText = `Total: ${quantity * 1600}`;

}

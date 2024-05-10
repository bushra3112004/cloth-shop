function changeimage6(imageName6) {
    const mainimage6 = document.getElementById('main-img6')
    mainimage6.src = imageName6;
}

function inc6() {
    const quantityText = document.getElementById("quantity-text6");
    const showQuantity = document.getElementById("show-quantity6");
    const showTotal = document.getElementById("show-total6");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×600`;

    showTotal.innerText = `Total: ${quantity * 600}`;

}
function dec6() {

    const quantityText = document.getElementById("quantity-text6");
    const showQuantity = document.getElementById("show-quantity6");
    const showTotal = document.getElementById("show-total6");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×600`;
    showTotal.innerText = `Total: ${quantity * 600}`;

}

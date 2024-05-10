function changeimage4(imageName4) {
    const mainimage4 = document.getElementById('main-img4')
    mainimage4.src = imageName4;
}

function inc4() {
    const quantityText = document.getElementById("quantity-text4");
    const showQuantity = document.getElementById("show-quantity4");
    const showTotal = document.getElementById("show-total4");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×4999`;

    showTotal.innerText = `Total: ${quantity * 4999}`;

}
function dec4() {

    const quantityText = document.getElementById("quantity-text4");
    const showQuantity = document.getElementById("show-quantity4");
    const showTotal = document.getElementById("show-total4");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×4999`;
    showTotal.innerText = `Total: ${quantity * 4999}`;

}

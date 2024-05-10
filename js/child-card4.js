function changeimage11(imageName11) {
    const mainimage11 = document.getElementById('main-img11')
    mainimage11.src = imageName11;
}

function inc11() {
    const quantityText = document.getElementById("quantity-text11");
    const showQuantity = document.getElementById("show-quantity11");
    const showTotal = document.getElementById("show-total11");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×1500`;

    showTotal.innerText = `Total: ${quantity * 1500}`;

}
function dec11() {

    const quantityText = document.getElementById("quantity-text11");
    const showQuantity = document.getElementById("show-quantity11");
    const showTotal = document.getElementById("show-total11");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×1500`;
    showTotal.innerText = `Total: ${quantity * 1500}`;

}


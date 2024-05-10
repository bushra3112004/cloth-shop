function changeimage12(imageName12) {
    const mainimage12 = document.getElementById('main-img12')
    mainimage12.src = imageName12;
}

function inc12() {
    const quantityText = document.getElementById("quantity-text12");
    const showQuantity = document.getElementById("show-quantity12");
    const showTotal = document.getElementById("show-total12");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×2500`;

    showTotal.innerText = `Total: ${quantity * 2500}`;

}
function dec12() {

    const quantityText = document.getElementById("quantity-text12");
    const showQuantity = document.getElementById("show-quantity12");
    const showTotal = document.getElementById("show-total12");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×2500`;
    showTotal.innerText = `Total: ${quantity * 2500}`;

}


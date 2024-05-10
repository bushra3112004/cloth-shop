function changeimage2(imageName2) {
    const mainimage2 = document.getElementById('main-img2')
    mainimage2.src = imageName2;
}

function inc2() {
    const quantityText = document.getElementById("quantity-text2");
    const showQuantity = document.getElementById("show-quantity2");
    const showTotal = document.getElementById("show-total2");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×999`;

    showTotal.innerText = `Total: ${quantity * 999}`;

}
function dec2() {

    const quantityText = document.getElementById("quantity-text2");
    const showQuantity = document.getElementById("show-quantity2");
    const showTotal = document.getElementById("show-total2");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×999`;
    showTotal.innerText = `Total: ${quantity * 999}`;

}


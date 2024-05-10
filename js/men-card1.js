function changeimage5(imageName5) {
    const mainimage5 = document.getElementById('main-img5')
    mainimage5.src = imageName5;
}

function inc5() {
    const quantityText = document.getElementById("quantity-text5");
    const showQuantity = document.getElementById("show-quantity5");
    const showTotal = document.getElementById("show-total5");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×999`;

    showTotal.innerText = `Total: ${quantity * 499}`;

}
function dec5() {

    const quantityText = document.getElementById("quantity-text5");
    const showQuantity = document.getElementById("show-quantity5");
    const showTotal = document.getElementById("show-total5");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×499`;
    showTotal.innerText = `Total: ${quantity * 499}`;

}

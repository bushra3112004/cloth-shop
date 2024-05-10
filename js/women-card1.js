
function changeimage1(imageName1) {
    const mainimage1 = document.getElementById('main-img1')
    mainimage1.src = imageName1;
}

function inc1() {
    const quantityText = document.getElementById("quantity-text1");
    const showQuantity = document.getElementById("show-quantity1");
    const showTotal = document.getElementById("show-total1");
    let quantity = parseInt(quantityText.innerText);
    if (quantity < 3) {
        quantityText.innerText = ++quantity;
    }
    else {
        alert("you cann't add more than 3 items ")
    }
    showQuantity.innerText = `Item: ${quantity}×1999`;

    showTotal.innerText = `Total: ${quantity * 1999}`;

}
function dec1() {

    const quantityText = document.getElementById("quantity-text1");
    const showQuantity = document.getElementById("show-quantity1");
    const showTotal = document.getElementById("show-total1");
    let quantity = parseInt(quantityText.innerText);
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    }
    else {
        alert("you cann't add less than 1 items")
    }
    showQuantity.innerText = `Item: ${quantity}×1999`;
    showTotal.innerText = `Total: ${quantity * 1999}`;

}


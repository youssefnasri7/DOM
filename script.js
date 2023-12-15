const cartItems = document.querySelectorAll(".item");
const totalPriceElement = document.querySelector(".total-price");

cartItems.forEach((item) => {
  const quantityInput = item.querySelector(".item-quantity input");
  const priceElement = item.querySelector(".item-price");
  const minusButton = item.querySelector(".btn-minus");
  const plusButton = item.querySelector(".btn-plus");
  const deleteButton = item.querySelector(".btn-delete");

  minusButton.addEventListener("click", () => {
    const newQuantity = parseInt(quantityInput.value) - 1;
    if (newQuantity > 0) {
      quantityInput.value = newQuantity;
      updatePrices();
    }
  });

  plusButton.addEventListener("click", () => {
    const newQuantity = parseInt(quantityInput.value) + 1;
    if (newQuantity <= 10) {
      quantityInput.value = newQuantity;
      updatePrices();
    }
  });

  deleteButton.addEventListener("click", () => {
    const confirmDelete = confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (confirmDelete) {
      item.remove();
      updatePrices();
    }
  });

  function updatePrices() {
    const totalPrice = cartItems.reduce((total, current) => {
      const quantity = parseInt(
        current.querySelector(".item-quantity input").value
      );
      return (
        total +
        quantity * parseFloat(current.querySelector(".item-price").textContent)
      );
    }, 0);

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
});

updatePrices();

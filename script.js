// Get the cart table body element
const cartItems = document.getElementById("cart-items");

// Get the total price element
const totalPrice = document.getElementById("total-price");

// Add event listeners to quantity and delete buttons for each item
cartItems.querySelectorAll("tr").forEach(function(item) {
  const minusBtn = item.querySelector(".minus-btn");
  const plusBtn = item.querySelector(".plus-btn");
  const quantityInput = item.querySelector(".quantity-input");
  const deleteBtn = item.querySelector(".delete-btn");
  const likeBtn = item.querySelector(".like-btn");
  const priceCell = item.querySelectorAll("td")[1];
  const totalCell = item.querySelectorAll("td")[3];

  // Update item quantity and total price when minus or plus button is clicked
  minusBtn.addEventListener("click", function() {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      totalCell.textContent = "$" + (quantity * parseFloat(priceCell.textContent.substring(1))).toFixed(2);
      updateTotalPrice();
    }
  });

  plusBtn.addEventListener("click", function() {
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
    totalCell.textContent = "$" + (quantity * parseFloat(priceCell.textContent.substring(1))).toFixed(2);
    updateTotalPrice();
  });

  // Remove item from cart when delete button is clicked
  deleteBtn.addEventListener("click", function() {
    item.remove();
    updateTotalPrice();
  });

  // Toggle like button color when clicked
  likeBtn.addEventListener("click", function() {
    likeBtn.classList.toggle("liked");
  });
});

// Update the total price based on the quantities and prices of items in the cart
function updateTotalPrice() {
  let total = 0;
  cartItems.querySelectorAll("tr").forEach(function(item) {
    const totalCell = item.querySelectorAll("td")[3];
    total += parseFloat(totalCell.textContent.substring(1));
  });
  totalPrice.textContent = "$" + total.toFixed(2);
}

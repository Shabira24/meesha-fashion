$(document).ready(function () {
  let unitPrice = parseInt($('#unit-price').text());
  let quantity = 1;
  let selectedSize = null;

  function updateTotal() {
    $('#total-price').text(unitPrice * quantity);
    $('#quantity').text(quantity);
  }

  // Show purchase options when "Buy Now" is clicked
  $('#buy-now-btnn').click(function () {
    $('#size-section').slideDown();
    $('#quantity-section').slideDown();
    $('#payment-methods').slideDown();
    $('#confirm-section').slideDown();
  });

  // Handle quantity changes
  $('#increase-btn').click(function () {
    quantity++;
    updateTotal();
  });

  $('#decrease-btn').click(function () {
    if (quantity > 1) {
      quantity--;
      updateTotal();
    }
  });

  // Capture size selection
  $('#product-size').change(function () {
    selectedSize = $(this).val();
  });

  // Handle confirm click
  $('#confirm-btnn').click(function () {
    selectedSize = $('#product-size').val(); // Re-read in case not manually triggered
    const paymentMethod = $('input[name="paymentMethod"]:checked').val();

    if (!selectedSize) {
      alert('❗ Please select a size.');
      return;
    }

    if (!paymentMethod) {
      alert('❗ Please select a payment method.');
      return;
    }

    alert(`✅ Order Confirmed!\n\nSize: ${selectedSize}\nQuantity: ${quantity}\nTotal Price: ₹${unitPrice * quantity}\nPayment Method: ${paymentMethod}`);
  });

  updateTotal(); // Initialize total
});

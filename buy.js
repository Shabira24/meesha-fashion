
  
    $(document).ready(function () {
      let unitPrice = parseInt($('#unit-price').text());
      let quantity = 1;

      function updateTotal() {
        $('#total-price').text(unitPrice * quantity);
        $('#quantity').text(quantity);
      }

      $('#buy-now-btn').click(function () {
        $('#quantity-section').slideDown(); // Show the section
      });

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

      $('#confirm-btn').click(function () {
        const paymentMethod = $('input[name="paymentMethod"]:checked').val();

        if (!paymentMethod) {
          alert('Please select a payment method.');
          return;
        }

        alert('Order Confirmed!\nQuantity: ' + quantity +
              '\nTotal Price: ₹' + (unitPrice * quantity) +
              '\nPayment Method: ' + paymentMethod);
      });
    });
  
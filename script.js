function calculateTotal() {
    var quantity = parseFloat(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var discount = parseFloat(document.getElementById('discount').value);
    
    var total = quantity * price;
    var discountedTotal = total - (total * (discount / 100));
    
    document.getElementById('total').textContent = "₹" + discountedTotal.toFixed(2);
  }
  
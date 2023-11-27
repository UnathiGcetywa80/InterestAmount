function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
  
    if (isNaN(principal) || isNaN(rate) ){
      document.getElementById('result').innerText = 'Please enter numbers.';
      return;
    }
  
    const interest = (principal * rate ) / 100;
    const totalAmount = principal + interest;
  
    document.getElementById('result').innerText = `Interest Amount: ${interest.toFixed(2)} \nTotal Amount: ${totalAmount.toFixed(2)}`;
  }
  
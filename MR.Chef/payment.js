function myFunction() {
    
      let cn = document.getElementById('cardNumber').value;
      let ch = document.getElementById('cardHolder').value;
      let ed = document.getElementById('expiryDate').value;
      let cvv = document.getElementById('cvv').value;
    
      if (cn == '' || ch == '' || ed == '' || cvv == '' ) 
      {
          alert('Please fill all fields!!!');
      }
    
      else
      {
            window.location.href = "finalpage.html";
          alert("Your Order Placed!");
  
      }}
    
 
    
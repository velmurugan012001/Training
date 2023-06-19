


function validateAndPay() {
    let fname = document.getElementById('firstName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let pincode = document.getElementById('code').value;
    let locality = document.getElementById('locality').value;
    let address = document.getElementById('address').value;
    let to = document.getElementById('cdt').value;

    if (fname == '' || email == '' || phone == '' || pincode == '' || locality == '' || address == '' || to == '') 
    {
        alert('Please fill all fields.');
    }
    else
    {
        window.location.href = "payment.html";
    }
}


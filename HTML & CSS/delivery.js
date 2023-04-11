// DOM Elements
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const addressInput = document.querySelector('#address');
const instructionsInput = document.querySelector('#instructions');
const submitButton = document.querySelector('#submit');
const orderSummary = document.querySelector('#orderSummary');

// Event Listeners
form.addEventListener('submit', handleFormSubmit);

// Functions
function handleFormSubmit(event) {
  event.preventDefault();
  
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;
  const instructions = instructionsInput.value;
  
  // Validate Form Inputs
  if (!firstName || !lastName || !email || !phone || !address) {
    alert('Please fill out all required fields');
    return;
  }
  
  // Generate Order Summary
  const orderSummaryHtml = `
    <h2>Order Summary</h2>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>Instructions: ${instructions}</p>
  `;
  
  // Show Order Summary
  orderSummary.innerHTML = orderSummaryHtml;
  orderSummary.style.display = 'block';
  
  // Clear Form Inputs
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  addressInput.value = '';
  instructionsInput.value = '';
}

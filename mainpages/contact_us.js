const form = document.querySelector('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const para = document.getElementById('error');

form.onsubmit = function(e) {
    if (fullname.value === '' || email.value === '') {
        e.preventDefault();
        para.textContent = 'Please fill in the required fields!';
    } else {
        alert("You have successfully submitted the form!");
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    console.log("Checking for saved data...");
    
    const savedName = localStorage.getItem("user_name");
    const savedEmail = localStorage.getItem("user_email");
    const savedPhone = localStorage.getItem("user_phone");

    if (savedName) {
        nameInput.value = savedName;
        console.log("Autofilled Name:", savedName);
    }
    if (savedEmail) {
        emailInput.value = savedEmail;
        console.log("Autofilled Email:", savedEmail);
    }
    if (savedPhone) {
        phoneInput.value = savedPhone;
        console.log("Autofilled Phone:", savedPhone);
    }

    form.addEventListener("submit", function(e) {

        localStorage.setItem("user_name", nameInput.value);
        localStorage.setItem("user_email", emailInput.value);
        localStorage.setItem("user_phone", phoneInput.value);
        
        console.log("Data saved to localStorage!");
      
    });
});
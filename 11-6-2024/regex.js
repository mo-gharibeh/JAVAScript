function validateForm() {
    clearErrors();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const bdate = document.getElementById('bdate').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (/\d/.test(fname)) {
        document.getElementById('fnameError').textContent = "Numbers are not allowed";
        
    }
    if (/\d/.test(lname)) {
        document.getElementById('lnameError').textContent = "Numbers are not allowed";
        
    }
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(bdate)) {   
        document.getElementById('bdateError').textContent = "The format should be dd/mm/yyyy";
        
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = "The e-mail is not valid";
    }
    if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = "The e-mails do not match";
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "The passwords do not match";

    }
}

function clearErrors() {
    document.getElementById('fnameError').textContent = "";
    document.getElementById('lnameError').textContent = "";
    document.getElementById('bdateError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('confirmEmailError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('confirmPasswordError').textContent = "";
}
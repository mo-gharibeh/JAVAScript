function validateForm() {
    // clearErrors();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const bdate = document.getElementById('bdate').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (/\d/.test(fname)) {
        document.getElementById('fnameError').textContent = "Numbers are not allowed";
    }else{
        document.getElementById('fnameError').textContent = "";
    }
    if (/\d/.test(lname)) {
        document.getElementById('lnameError').textContent = "Numbers are not allowed";
    }else{
            document.getElementById('lnameError').textContent = "";
        }
    
    
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(bdate)) {   
        document.getElementById('bdateError').textContent = "The format should be dd/mm/yyyy";
    }else{
        document.getElementById('bdateError').textContent = "";

    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = "The e-mail is not valid";
    }else{
        document.getElementById('emailError').textContent = "";
    }
    if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = "The e-mails do not match";
    }else{
        document.getElementById('confirmEmailError').textContent = "";
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "The passwords do not match";
    }else{
        document.getElementById('confirmPasswordError').textContent = "";
    }
}

// function clearErrors() {
//     document.getElementById('fnameError').textContent = "";
//     document.getElementById('lnameError').textContent = "";
//     document.getElementById('bdateError').textContent = "";
//     document.getElementById('emailError').textContent = "";
//     document.getElementById('confirmEmailError').textContent = "";
//     document.getElementById('passwordError').textContent = "";
//     document.getElementById('confirmPasswordError').textContent = "";
// }
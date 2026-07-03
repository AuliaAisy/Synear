//==========================================
// SHOW / HIDE PASSWORD
//==========================================
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");

document.getElementById("togglePassword").addEventListener("click",function(){

    if(password.type==="password"){
        password.type="text";
        this.innerHTML='<i class="bi bi-eye-slash"></i>';
    }else{
        password.type="password";
        this.innerHTML='<i class="bi bi-eye"></i>';
    }

});

document.getElementById("toggleConfirmPassword").addEventListener("click",function(){

    if(confirmPassword.type==="password"){
        confirmPassword.type="text";
        this.innerHTML='<i class="bi bi-eye-slash"></i>';
    }else{
        confirmPassword.type="password";
        this.innerHTML='<i class="bi bi-eye"></i>';
    }

});

//==========================================
// REGISTER
//==========================================
const registerForm=document.getElementById("registerForm");

registerForm.addEventListener("submit",function(e){

    e.preventDefault();

    const fullname=document.getElementById("fullname").value.trim();
    const email=document.getElementById("email").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const pass=password.value.trim();
    const confirm=confirmPassword.value.trim();
    const agree=document.getElementById("agree").checked;

    if(fullname===""||email===""||phone===""||pass===""||confirm===""){
        alert("Please complete all fields.");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }

    if(pass!==confirm){
        alert("Password and Confirm Password do not match.");
        return;
    }

    if(!agree){
        alert("Please agree to the Terms & Conditions.");
        return;
    }

    localStorage.setItem("fullname",fullname);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("password",pass);

    alert("Registration successful!");

    window.location.href="login.html";

});
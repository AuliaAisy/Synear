//==========================================
// PASSWORD SHOW / HIDE
//==========================================
const password=document.getElementById("password");
const togglePassword=document.getElementById("togglePassword");

togglePassword.addEventListener("click",function(){

    if(password.type==="password"){
        password.type="text";
        togglePassword.innerHTML='<i class="bi bi-eye-slash"></i>';
    }else{
        password.type="password";
        togglePassword.innerHTML='<i class="bi bi-eye"></i>';
    }

});

//==========================================
// LOGIN VALIDATION
//==========================================
const loginForm=document.querySelector("form");

loginForm.addEventListener("submit",function(e){

    e.preventDefault();

    const email=document.querySelector('input[type="email"]').value.trim();
    const passwordValue=password.value.trim();

    if(email===""||passwordValue===""){
        alert("Please complete your email and password.");
        return;
    }

    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if(email !== savedEmail || passwordValue !== savedPassword){
        alert("Email or Password is incorrect.");
        return;
    }

    const username=localStorage.getItem("fullname");

    localStorage.setItem("isLogin","true");
    localStorage.setItem("username",username);

    const redirect=localStorage.getItem("redirectAfterLogin");

    if(redirect){

        localStorage.removeItem("redirectAfterLogin");

        window.location.href=redirect;

    }else{

        window.location.href="index.html";

    }
});
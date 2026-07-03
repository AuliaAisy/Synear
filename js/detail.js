const registerButtons=document.querySelectorAll(".register-btn");

registerButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        const title=this.dataset.title;
        const price=this.dataset.price;
        const date=this.dataset.date;
        const type=this.dataset.type;

        const target=`registrasi.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&date=${encodeURIComponent(date)}&type=${type}`;

        if(localStorage.getItem("isLogin")==="true"){

            window.location.href=target;

        }else{

            localStorage.setItem("redirectAfterLogin",target);

            window.location.href="login.html";

        }

    });

});
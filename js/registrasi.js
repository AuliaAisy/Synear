//==========================================
// GET SEMINAR DATA
//==========================================
const params=new URLSearchParams(window.location.search);

const title=params.get("title");
const price=params.get("price");
const date=params.get("date");
const type=params.get("type");

console.log("registrasi.js loaded");
console.log(type);

//==========================================
// LOAD DATA
//==========================================
document.getElementById("seminarTitle").textContent=title;
document.getElementById("seminarDate").textContent=date;

const priceElement=document.getElementById("seminarPrice");

if(type==="free"){

    priceElement.textContent="FREE";
    priceElement.style.color="#16a34a";

    document.getElementById("paymentSection").style.display="none";

}else{

    priceElement.textContent="Rp"+Number(price).toLocaleString("id-ID");
    priceElement.style.color="#2563eb";

}
//==========================================
// AUTO FILL
//==========================================
document.getElementById("fullname").value=localStorage.getItem("fullname")||"";
document.getElementById("email").value=localStorage.getItem("email")||"";
document.getElementById("phone").value=localStorage.getItem("phone")||"";

//==========================================
// SUBMIT
//==========================================
const form=document.getElementById("registrationForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const seminar={
        title:title,
        date:date,
        price:price,
        type:type,
        status:"Registered"
    };

    let registrations=JSON.parse(localStorage.getItem("registrations"))||[];

    registrations.push(seminar);

    localStorage.setItem("registrations",JSON.stringify(registrations));

    if(type==="free"){

        window.location.href=`regis-success.html?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&price=${encodeURIComponent(price)}`;

    }else{

        window.location.href=`payment.html?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}&price=${encodeURIComponent(price)}`;

    }

});
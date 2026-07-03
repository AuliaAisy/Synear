const params=new URLSearchParams(window.location.search);

const title=params.get("title");
const date=params.get("date");

if(title){
    document.getElementById("seminarTitle").textContent=title;
}

if(date){
    document.getElementById("seminarDate").textContent=date;
}

const button=document.getElementById("viewRegistration");

button.href=`my-registration.html?title=${encodeURIComponent(title)}&date=${encodeURIComponent(date)}`;
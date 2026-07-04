//==========================================
// NAVBAR SEARCH
//==========================================
const form=document.getElementById("navbarSearchForm");
if(form){
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const keyword=document.getElementById("navbarSearch").value.trim();
        if(keyword===""){
            window.location.href="explore.html";
            return;
        }
        window.location.href="explore.html?search="+encodeURIComponent(keyword);
    });
}
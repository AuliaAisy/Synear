console.log("APP.JS LOADED");
const authArea=document.getElementById("authArea");

if(localStorage.getItem("isLogin")==="true"){

    authArea.innerHTML=`
        <div class="dropdown">
            <button class="btn profile-btn dropdown-toggle" data-bs-toggle="dropdown">
                <img src="${localStorage.getItem("photo")}" class="profile-img">
                ${localStorage.getItem("username")}
            </button>

            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                <li><a class="dropdown-item" href="sertifikat.html">Certificates</a></li>
                <li><a class="dropdown-item" href="notif.html">Notifications</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" id="logoutBtn">Logout</a></li>
            </ul>
        </div>
    `;

    document.getElementById("logoutBtn").onclick=function(){

        localStorage.clear();

        window.location.href="login.html";

    };

}

//==========================================
// TRENDING SWIPER
//==========================================
new Swiper(".trendingSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});
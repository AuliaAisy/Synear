console.log("APP.JS LOADED");

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

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
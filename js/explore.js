//==========================================
// ELEMENT
//==========================================
const keyword=document.getElementById("keyword");
const category=document.getElementById("category");
const locationSelect=document.getElementById("location");
const date=document.getElementById("date");
const searchBtn=document.getElementById("searchBtn");
const resetBtn=document.getElementById("resetBtn");
const resultCount=document.getElementById("resultCount");
const eventCards=document.querySelectorAll(".event-item");

//==========================================
// SEARCH FROM NAVBAR
//==========================================
const params = new URLSearchParams(window.location.search);
const navbarKeyword = params.get("search");

if(navbarKeyword){

    document.getElementById("keyword").value = navbarKeyword;

}

//==========================================
// FILTER EVENT
//==========================================
function filterEvents(){

    eventCards.forEach(card=>{

        const title=card.dataset.title.toLowerCase();
        const cat=card.dataset.category.toLowerCase();
        const loc=card.dataset.location.toLowerCase();
        const eventDate=card.dataset.date;

        const keywordMatch=
        keyword.value.trim()===""||
        title.includes(keyword.value.toLowerCase());

        const categoryMatch=
        category.value==="All Categories"||
        cat===category.value.toLowerCase();

        const locationMatch=
        locationSelect.value==="All Cities"||
        loc===locationSelect.value.toLowerCase();

        const dateMatch=
        date.value===""||
        eventDate===date.value;

        if(keywordMatch&&categoryMatch&&locationMatch&&dateMatch){

            card.style.display="";

        }else{

            card.style.display="none";

        }

    });

    updateResultCount();

}

//==========================================
// RESULT COUNT
//==========================================
function updateResultCount(){

    const visible=document.querySelectorAll(".event-item:not([style*='display: none'])").length;

    resultCount.textContent=`Showing ${visible} Event${visible!==1?"s":""}`;

}

//==========================================
// BUTTON SEARCH
//==========================================
searchBtn.addEventListener("click",function(){

    filterEvents();

});

//==========================================
// ENTER KEYWORD
//==========================================
keyword.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        filterEvents();

    }

});

//==========================================
// RESET
//==========================================
resetBtn.addEventListener("click",function(){

    keyword.value="";
    category.selectedIndex=0;
    locationSelect.selectedIndex=0;
    date.value="";

    eventCards.forEach(card=>{

        card.style.display="";

    });

    updateResultCount();

});

//==========================================
// AUTO SEARCH FROM NAVBAR
//==========================================
updateResultCount();
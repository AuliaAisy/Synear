//=========================================
// GET SEMINAR I
//=========================================
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
//=========================================
// DATABASE SEMIAR
//=========================================
const seminars = {
    uiux:{
        title:"UI/UX Design Seminar",
        category:"UI / UX DESIGN",
        description:"Learn from industry experts through inspiring talks, practical insights, and real-world case studies.",
        date:"12 July 2026",
        time:"09.00 - 16.00 WIB",
        location:"Jakarta Convention Center",
        seats:"250 Participants",
        speaker:"Michael Anderson",
        speakerJob:"Senior Product Designer at Google",
        speakerDesc:"Michael has more than 10 years of experience in Product Design and has worked with various international technology companies. He specializes in User Experience, Design Systems, and Product Strategy.",
        image:"https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80",
        aboutTitle:"Build Your UI/UX Career With Industry Experts",
        about1:"UI/UX Design Seminar 2026 is designed for students, fresh graduates, and professionals who want to master digital product design from scratch.",
        about2:"Participants will gain practical knowledge in user research, wireframing, prototyping, design systems, usability testing, and portfolio preparation.",
        schedule:[
        {
        time:"08.00",
        title:"Registration",
        desc:"Participant registration and welcome coffee."
        },
        {
        time:"09.00",
        title:"Opening Session",
        desc:"Introduction and keynote presentation."
        },
        {
        time:"10.30",
        title:"UI/UX Workshop",
        desc:"Hands-on design session using Figma."
        },
        {
        time:"13.00",
        title:"Case Study",
        desc:"Analyze real projects from leading companies."
        },
        {
        time:"15.30",
        title:"Q&A Session",
        desc:"Discussion with speakers and networking."
        }
        ],
        price:0,
        type:"free"
    },
    entrepreneur:{
        title:"Entrepreneur Summit 2026",
        category:"BUSINESS",
        description:"Build your startup with successful founders and experienced mentors.",
        date:"05 August 2026",
        time:"09.00 - 16.00 WIB",
        location:"Bandung",
        seats:"300 Participants",
        speaker:"Richard Tan",
        speakerJob:"Founder & CEO",
        speakerDesc:"Richard has successfully built several startups across Southeast Asia and actively mentors young entrepreneurs to develop sustainable businesses.",
        image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
        price:199000,
        type:"paid"
    },
    cyber:{
        title:"Cyber Security Conference",
        category:"TECHNOLOGY",
        description:"Discover the latest cyber security trends and digital protection.",
        date:"18 August 2026",
        time:"08.30 - 15.30 WIB",
        location:"Surabaya",
        seats:"350 Participants",
        speaker:"David Wilson",
        speakerJob:"Cyber Security Expert",
        speakerDesc:"David specializes in cyber defense, ethical hacking, and enterprise security with experience handling international security incidents.",
        image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
        aboutTitle:"Master Cyber Security From Industry Experts",
        about1:"Cyber Security Conference discusses the latest digital threats and modern security solutions.",
        about2:"Participants will learn ethical hacking, penetration testing, cyber defense, and incident response from experienced professionals.",
        schedule:[
        {
        time:"08.30",
        title:"Registration",
        desc:"Participant check in."
        },
        {
        time:"09.00",
        title:"Cyber Threat Landscape",
        desc:"Latest attack trends."
        },
        {
        time:"11.00",
        title:"Ethical Hacking Demo",
        desc:"Live penetration testing."
        },
        {
        time:"13.00",
        title:"Incident Response",
        desc:"Handling cyber attacks."
        },
        {
        time:"15.00",
        title:"Discussion",
        desc:"Q&A with speaker."
        }
        ],
        price:0,
        type:"free"
    },
    digital:{
        title:"Digital Marketing Seminar",
        category:"Seminar",
        description:"Master SEO, social media marketing and paid advertising.",
        date:"20 July 2026",
        time:"09.00 - 15.00 WIB",
        location:"Online",
        seats:"Unlimited",
        speaker:"Sarah Johnson",
        speakerJob:"Digital Marketing Specialist",
        speakerDesc:"Sarah has helped more than 300 companies increase sales through SEO, content marketing, and paid advertising strategies.",
        image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop&q=80",
        price:129000,
        type:"paid"
    },
    ai:{
        title:"AI Future Conference",
        category:"ARTIFICIAL INTELLIGENCE",
        description:"Explore Artificial Intelligence and the future of technology.",
        date:"22 July 2026",
        time:"10.00 - 16.00 WIB",
        location:"Jakarta",
        seats:"400 Participants",
        speaker:"Andrew Lee",
        speakerJob:"AI Engineer",
        speakerDesc:"Andrew focuses on Artificial Intelligence, Machine Learning, and Generative AI with over 12 years of industry experience.",
        image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
        price:249000,
        type:"paid"
    },
    public:{
        title:"Public Speaking Class",
        category:"SEMINAR",
        description:"Improve your confidence and presentation skills effectively.",
        date:"25 July 2026",
        time:"09.00 - 14.00 WIB",
        location:"Yogyakarta",
        seats:"200 Participants",
        speaker:"Lisa Brown",
        speakerJob:"Communication Coach",
        speakerDesc:"Lisa has trained thousands of professionals to improve public speaking confidence, leadership communication, and presentation skills.",
        image:"https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&auto=format&fit=crop&q=80",
        price:99000,
        type:"paid"
    }
};
const seminar = seminars[id];
//==========================================
// LOAD DATA
//==========================================
if(!seminar){
    window.location.href="explore.html";
}
document.getElementById("detailImage").src=seminar.image;
document.getElementById("detailCategory").textContent=seminar.category;
document.getElementById("detailTitle").textContent=seminar.title;
document.getElementById("detailDescription").textContent=seminar.description;
document.getElementById("detailDate").textContent=seminar.date;
document.getElementById("detailTime").textContent=seminar.time;
document.getElementById("detailLocation").textContent=seminar.location;
document.getElementById("detailSeats").textContent=seminar.seats;
document.getElementById("detailSpeaker").textContent=seminar.speaker;
document.getElementById("detailSpeakerJob").textContent=seminar.speakerJob;
document.getElementById("detailSpeakerDesc").textContent=seminar.speakerDesc;
document.getElementById("aboutTitle").textContent=seminar.aboutTitle;
document.getElementById("aboutText1").textContent=seminar.about1;
document.getElementById("aboutText2").textContent=seminar.about2;

const schedule=document.getElementById("scheduleList");
schedule.innerHTML="";
seminar.schedule.forEach(item=>{
schedule.innerHTML+=`
<div class="schedule-item">
<span>${item.time}</span>
<div>
<h5>${item.title}</h5>
<p>${item.desc}</p>
</div>
</div>
`;

});

const price=document.getElementById("detailPrice");

if(seminar.type==="free"){
    price.textContent="FREE";
    price.style.color="#16a34a";
}else{
    price.textContent="Rp"+seminar.price.toLocaleString("id-ID");
}
//==========================================
// REGISTER
//==========================================
const registerBtn=document.getElementById("registerBtn");
registerBtn.addEventListener("click",function(e){
    e.preventDefault();
    const target=`registrasi.html?id=${id}&title=${encodeURIComponent(seminar.title)}&date=${encodeURIComponent(seminar.date)}&price=${encodeURIComponent(seminar.price)}&type=${encodeURIComponent(seminar.type)}&location=${encodeURIComponent(seminar.location)}&speaker=${encodeURIComponent(seminar.speaker)}&image=${encodeURIComponent(seminar.image)}`;
    if(localStorage.getItem("isLogin")==="true"){
        window.location.href=target;
    }else{
        localStorage.setItem("redirectAfterLogin",target);
        alert("Please login first.");
        window.location.href="login.html";
    }
});
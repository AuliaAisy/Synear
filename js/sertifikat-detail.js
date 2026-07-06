//==========================================
// GET CERTIFICATE
//==========================================
const params=new URLSearchParams(window.location.search);
const id=params.get("id");
const fullname=localStorage.getItem("fullname")||"Participant";
const registrations=JSON.parse(localStorage.getItem("registrations"))||[];
const certificates=registrations.filter(item=>item.status==="Attended");
const certificate=certificates[id];

//==========================================
// CHECK DATA
//==========================================
if(!certificate){
    alert("Certificate not found.");
    window.location.href="sertifikat.html";
}

//==========================================
// LOAD DATA
//==========================================
document.getElementById("certificateName").textContent=fullname;
document.getElementById("certificateSeminar").textContent=certificate.title;
document.getElementById("certificateDate").textContent=certificate.date;
document.getElementById("certificateId").textContent=
"SYN-"+new Date().getFullYear()+"-"+String(Number(id)+1).padStart(4,"0");

//==========================================
// DOWNLOAD PDF
//==========================================
document.getElementById("downloadCertificate").addEventListener("click",function(){
    const element=document.getElementById("certificatePaper");
    const opt={
        margin:[10,10,10,10],
        filename:certificate.title+".pdf",
        image:{
            type:"jpeg",
            quality:1
        },
        html2canvas:{
            scale:3,
            scrollY:0
        },
        jsPDF:{
            unit:"mm",
            format:"a4",
            orientation:"landscape"
        }
    };
    html2pdf().set(opt).from(element).save();
});
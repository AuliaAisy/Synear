//==========================================
// TAB
//==========================================
const scanTab=document.getElementById("scanTab");
const codeTab=document.getElementById("codeTab");

const scanContent=document.getElementById("scanContent");
const codeContent=document.getElementById("codeContent");

scanTab.addEventListener("click",function(){

    scanTab.classList.add("active");
    codeTab.classList.remove("active");

    scanContent.style.display="block";
    codeContent.style.display="none";

});

codeTab.addEventListener("click",function(){

    codeTab.classList.add("active");
    scanTab.classList.remove("active");

    scanContent.style.display="none";
    codeContent.style.display="block";

});

//==========================================
// LOAD SEMINAR
//==========================================
const registrations=JSON.parse(localStorage.getItem("registrations"))||[];

let seminar=null;

if(registrations.length>0){

    seminar=registrations[registrations.length-1];

    document.getElementById("seminarTitle").textContent=seminar.title;
    document.getElementById("seminarDate").textContent=seminar.date;

}

//==========================================
// ATTENDANCE CODE
//==========================================
const attendanceCodes={
    "UI/UX Design Seminar":"UIUX2026",
    "Public Speaking Seminar":"SPEAK2026",
    "Data Science Seminar":"DATA2026",
    "Digital Marketing Seminar":"DM2026",
    "Cyber Security Seminar":"CYBER2026",
    "Business Innovation Seminar":"BIZ2026"
};
//==========================================
// QR SCANNER
//==========================================
const seminarQR={
    "UI/UX Design Seminar":"SYNEAR|UIUX2026",
    "Public Speaking Seminar":"SYNEAR|SPEAK2026",
    "Data Science Seminar":"SYNEAR|DATA2026",
    "Digital Marketing Seminar":"SYNEAR|DM2026",
    "Cyber Security Seminar":"SYNEAR|CYBER2026",
    "Business Innovation Seminar":"SYNEAR|BIZ2026"
};

let scanner=null;

if(document.getElementById("reader")){

    scanner=new Html5Qrcode("reader");

    Html5Qrcode.getCameras().then(function(){

        scanner.start(
            {
                facingMode:"environment"
            },
            {
                fps:10,
                qrbox:220
            },
            function(decodedText){

                const expectedQR=seminarQR[seminar.title];

                if(decodedText===expectedQR){

                    attendanceSuccess();

                    scanner.stop();

                }else{

                    alert("This QR Code is not valid for this seminar.");

                }

            },
            function(error){}
        );

    }).catch(function(){

        document.getElementById("reader").innerHTML=
        "<p class='text-danger'>Unable to access camera.</p>";

    });

}
//==========================================
// COMPLETE ATTENDANCE
//==========================================
const completeBtn=document.getElementById("completeAttendance");

completeBtn.addEventListener("click",function(){

    if(!seminar){
        alert("No seminar registration found.");
        return;
    }

    if(codeTab.classList.contains("active")){

        const input=document.getElementById("attendanceCode").value.trim();

        const expected=attendanceCodes[seminar.title];

        if(input===""){
            alert("Please enter the attendance code.");
            return;
        }

        if(input!==expected){
            alert("Invalid attendance code.");
            return;
        }

    }

    attendanceSuccess();

});

//==========================================
// SUCCESS
//==========================================
function attendanceSuccess(){

    seminar.status="Attended";

    registrations[registrations.length-1]=seminar;

    localStorage.setItem("registrations",JSON.stringify(registrations));

    document.getElementById("attendanceStatus").textContent="Checked In";
    document.getElementById("attendanceStatus").style.color="#16a34a";

    completeBtn.innerHTML='<i class="bi bi-check-circle-fill"></i> Attendance Completed';

    completeBtn.disabled=true;

    alert("Attendance Successful!");

}
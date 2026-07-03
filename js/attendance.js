const registrations=JSON.parse(localStorage.getItem("registrations"))||[];

if(registrations.length>0){

    const seminar=registrations[registrations.length-1];

    document.getElementById("seminarTitle").textContent=seminar.title;
    document.getElementById("seminarDate").textContent=seminar.date;

    new QRCode(document.getElementById("qrcode"),{
        text:JSON.stringify(seminar),
        width:220,
        height:220
    });

}

const completeBtn=document.getElementById("completeAttendance");

completeBtn.addEventListener("click",function(){

    const code=document.getElementById("attendanceCode").value.trim();

    const registrations=JSON.parse(localStorage.getItem("registrations"))||[];

    if(registrations.length===0){
        alert("No seminar registration found.");
        return;
    }

    const seminar=registrations[registrations.length-1];

    const validCodes={
        "UI/UX Design Seminar":"UIUX2026",
        "Public Speaking Seminar":"SPEAK2026",
        "Data Science Seminar":"DATA2026",
        "Digital Marketing Seminar":"DM2026",
        "Cyber Security Seminar":"CYBER2026",
        "Business Innovation Seminar":"BIZ2026"
    };

    const expectedCode=validCodes[seminar.title];

    if(code!==""&&code!==expectedCode){
        alert("Invalid attendance code.");
        return;
    }

    seminar.status="Attended";

    registrations[registrations.length-1]=seminar;

    localStorage.setItem("registrations",JSON.stringify(registrations));

    document.getElementById("attendanceStatus").textContent="Checked In";
    document.getElementById("attendanceStatus").style.color="#16a34a";

    completeBtn.innerHTML='<i class="bi bi-check-circle-fill"></i> Attendance Completed';

    completeBtn.disabled=true;

    alert("Attendance Successful!");

});
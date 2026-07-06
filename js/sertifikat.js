//==========================================
// LOAD CERTIFICATES
//==========================================
const registrations=JSON.parse(localStorage.getItem("registrations"))||[];
const certificateList=document.getElementById("certificateList");
certificateList.innerHTML="";
const certificates=registrations.filter(item=>item.status==="Attended");
//==========================================
// EMPTY STATE
//==========================================
if(certificates.length===0){
    certificateList.innerHTML=`
        <div class="empty-certificate">
            <i class="bi bi-award"></i>
            <h4>No Certificates Yet</h4>
            <p>Complete your seminar attendance to unlock certificates.</p>
            <a href="explore.html" class="btn btn-login-main">
                Explore Seminars
            </a>
        </div>
    `;
}
//==========================================
// CERTIFICATE LIST
//==========================================
else{
    certificates.forEach(function(item,index){
        certificateList.innerHTML+=`
            <div class="certificate-item">
                <div class="certificate-left">
                    <div class="certificate-icon">
                        <i class="bi bi-award-fill"></i>
                    </div>
                    <div>
                        <h5>${item.title}</h5>
                        <span>${item.date}</span>
                    </div>
                </div>
                <a
                    href="sertifikat-detail.html?id=${index}"
                    class="btn btn-login-main">
                    View Certificate
                </a>
            </div>
        `;
    });
}
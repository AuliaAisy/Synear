const registrations=JSON.parse(localStorage.getItem("registrations"))||[];

const container=document.querySelector(".registration-list-section .container");

const card=document.querySelector(".registration-card");

card.remove();

registrations.forEach(item=>{

    const price=item.type==="free"
        ?"FREE"
        :"Rp"+Number(item.price).toLocaleString("id-ID");

    container.innerHTML+=`
        <div class="registration-card">
            <div class="registration-image">
                <img src="../asset/uiux.jpg" alt="">
            </div>
            <div class="registration-content">
                <span class="badge bg-success">${item.status}</span>
                <h4>${item.title}</h4>
                <div class="registration-info">
                    <div>
                        <i class="bi bi-calendar-event"></i>
                        <span>${item.date}</span>
                    </div>
                    <div>
                        <i class="bi bi-wallet2"></i>
                        <span>${price}</span>
                    </div>
                </div>
                <div class="registration-action">
                    <a href="attendance.html" class="btn btn-login-main">
                        Attendance
                    </a>
                </div>
            </div>
        </div>
    `;
    if(registrations.length===0){

        container.innerHTML+=`
            <div class="text-center mt-5">
                <i class="bi bi-calendar-x" style="font-size:60px;color:#cbd5e1;"></i>
                <h4 class="mt-3">No Registrations Yet</h4>
                <p class="text-muted">
                    You haven't registered for any seminars.
                </p>
                <a href="explore.html" class="btn btn-login-main">
                    Explore Seminars
                </a>
            </div>
        `;
    }
});
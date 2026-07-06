//==========================================
// LOAD PROFILE
//==========================================
const fullname=localStorage.getItem("fullname")||"-";
const email=localStorage.getItem("email")||"-";
const phone=localStorage.getItem("phone")||"-";
const institution=localStorage.getItem("institution")||"-";
const occupation=localStorage.getItem("occupation")||"-";

document.getElementById("profileName").textContent=fullname;
document.getElementById("profileEmail").textContent=email;

document.getElementById("fullname").textContent=fullname;
document.getElementById("email").textContent=email;
document.getElementById("phone").textContent=phone;
document.getElementById("institution").textContent=institution;
document.getElementById("occupation").textContent=occupation;

//==========================================
// AVATAR
//==========================================
const avatar=document.getElementById("profileAvatar");

avatar.textContent=fullname.charAt(0).toUpperCase();

//==========================================
// LOGOUT
//==========================================
document.getElementById("logoutBtn").addEventListener("click",function(){

    if(confirm("Are you sure you want to logout?")){

        localStorage.removeItem("isLogin");
        localStorage.removeItem("username");

        window.location.href="login.html";

    }

});

//==========================================
// EDIT PROFILE
//==========================================
const editBtn=document.getElementById("editProfileBtn");
const editForm=document.getElementById("editForm");

editBtn.addEventListener("click",function(){

    editForm.classList.toggle("d-none");

    document.getElementById("editFullname").value=fullname;
    document.getElementById("editPhone").value=phone;
    document.getElementById("editInstitution").value=institution;
    document.getElementById("editOccupation").value=occupation;

});

//==========================================
// SAVE PROFILE
//==========================================
document.getElementById("saveProfileBtn").addEventListener("click",function(){
    localStorage.setItem(
        "fullname",
        document.getElementById("editFullname").value
    );
    localStorage.setItem(
        "phone",
        document.getElementById("editPhone").value
    );
    localStorage.setItem(
        "institution",
        document.getElementById("editInstitution").value
    );
    localStorage.setItem(
        "occupation",
        document.getElementById("editOccupation").value
    );
    alert("Profile updated successfully!");
    location.reload();
});
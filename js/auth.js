const authArea = document.getElementById("authArea");
if (authArea) {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
        const username = localStorage.getItem("username") || "User";
        const firstLetter = username.charAt(0).toUpperCase();
        authArea.innerHTML = `
            <div class="dropdown">
                <button class="btn profile-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <div class="profile-avatar">
                        ${firstLetter}
                    </div>
                    <span>${username}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a class="dropdown-item" href="profile.html">
                            <i class="bi bi-person"></i>
                            My Profile
                        </a>
                    </li>
                    <li>
                        <a href="my-registration.html" class="dropdown-item">
                            <i class="bi bi-journal-text"></i>
                            <span>My Registrations</span>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="attendance.html">
                            <i class="bi bi-clipboard-check"></i>
                            Attendance
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="sertifikat.html">
                            <i class="bi bi-award"></i>
                            Certificates
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <a class="dropdown-item text-danger" href="#" id="logoutBtn">
                            <i class="bi bi-box-arrow-right"></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        `;
        document.getElementById("logoutBtn").addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("isLogin");
            localStorage.removeItem("username");
            window.location.href = "login.html";
        });
    }
}
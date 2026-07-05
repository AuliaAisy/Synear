//==========================================
// TAB
//==========================================
const scanTab = document.getElementById("scanTab");
const codeTab = document.getElementById("codeTab");

const scanContent = document.getElementById("scanContent");
const codeContent = document.getElementById("codeContent");

scanTab.addEventListener("click", () => {

    scanTab.classList.add("active");
    codeTab.classList.remove("active");

    scanContent.style.display = "block";
    codeContent.style.display = "none";

});

codeTab.addEventListener("click", () => {

    codeTab.classList.add("active");
    scanTab.classList.remove("active");

    scanContent.style.display = "none";
    codeContent.style.display = "block";

});

//==========================================
// SEMINAR DATA
//==========================================
const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
let seminar = null;
const seminarData = {

    "UI/UX Design Seminar": {
        code: "UIUX2026",
        qr: "SYNEAR-UIUX2026"
    },

    "Public Speaking Seminar": {
        code: "SPEAK2026",
        qr: "SYNEAR-SPEAK2026"
    },

    "Data Science Seminar": {
        code: "DATA2026",
        qr: "SYNEAR-DATA2026"
    },

    "Digital Marketing Seminar": {
        code: "DM2026",
        qr: "SYNEAR-DM2026"
    },

    "Cyber Security Seminar": {
        code: "CYBER2026",
        qr: "SYNEAR-CYBER2026"
    },

    "Business Innovation Seminar": {
        code: "BIZ2026",
        qr: "SYNEAR-BIZ2026"
    }

};

if (registrations.length > 0) {

    seminar = registrations[registrations.length - 1];

    document.getElementById("seminarTitle").textContent = seminar.title;
    document.getElementById("seminarDate").textContent = seminar.date;

}

//==========================================
// QR SCANNER
//==========================================
let html5QrCode;

if (document.getElementById("reader")) {

    html5QrCode = new Html5Qrcode("reader");

    Html5Qrcode.getCameras().then(cameras => {

        if (cameras.length > 0) {

            html5QrCode.start(

                cameras[0].id,

                {
                    fps: 10,
                    qrbox: 220
                },

                function (decodedText) {

                    const expectedQR = seminarData[seminar.title].qr;

                    if (decodedText === expectedQR) {

                        attendanceSuccess();

                        html5QrCode.stop();

                    } else {

                        alert("Invalid QR Code.");

                    }

                },

                function (error) {}

            );

        }

    }).catch(() => {

        document.getElementById("reader").innerHTML =
            "<p class='text-danger'>Camera not available.</p>";

    });

}

//==========================================
// COMPLETE ATTENDANCE
//==========================================
const completeBtn = document.getElementById("completeAttendance");

completeBtn.addEventListener("click", () => {

    if (!seminar) {

        alert("No seminar registration found.");
        return;

    }

    if (codeTab.classList.contains("active")) {

        const input = document.getElementById("attendanceCode").value.trim();

        const expectedCode = seminarData[seminar.title].code;

        if (input === "") {

            alert("Please enter attendance code.");
            return;

        }

        if (input !== expectedCode) {

            alert("Invalid Attendance Code.");
            return;

        }

    }

    attendanceSuccess();

});

//==========================================
// SUCCESS
//==========================================
function attendanceSuccess() {

    seminar.status = "Attended";

    registrations[registrations.length - 1] = seminar;

    localStorage.setItem("registrations", JSON.stringify(registrations));

    document.getElementById("attendanceStatus").textContent = "Checked In";
    document.getElementById("attendanceStatus").style.color = "#16a34a";

    completeBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Attendance Completed';

    completeBtn.disabled = true;

    alert("Attendance Successful!");

}
// เก็บรหัสผ่านแบบเข้ารหัส (Base64 หรือ Hash จะดีกว่า)
const users = {
    "admin": btoa("ko@0123"), // แปลง "1234" เป็น Base64
    "user": btoa(" ")
};

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = btoa(document.getElementById("password").value); // แปลงเป็น Base64

    if (users[username] && users[username] === password) {
        sessionStorage.setItem("loggedIn", "true"); // ป้องกันกด F12 แล้วเห็นรหัสผ่าน
        window.location.href = "index2.html"; // ไปหน้า index2.html
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
}

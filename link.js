const div = document.getElementById("emalil");

div.addEventListener("click", () => {
    navigator.clipboard.writeText("parkchangbeom87@gmail.com");
alert("이메일이 복사되었습니다.");
});
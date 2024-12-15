document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signupBtn");
    const signupModal = document.getElementById("signupModal");
    const closeModal = document.getElementById("closeModal");

    
    signupBtn.addEventListener("click", function () {
        signupModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        signupModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === signupModal) {
            signupModal.style.display = "none";
        }
    });
});

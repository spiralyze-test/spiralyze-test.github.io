function mobileMenu() {
    var m = document.getElementById("menu");
    if (m.classList.contains("visible")) {
        m.classList.remove("visible");
    } else {
        m.classList.add("visible");
    }
}

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    $("#videoPlayer iframe").attr("src", "https://www.youtube.com/embed/Z7f5xkucTA0");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);        

// open modal function
const openModal = function () {
    $("#videoPlayer iframe").attr("src", "https://www.youtube.com/embed/Z7f5xkucTA0?autoplay=1");
    modal.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);
const one = document.getElementById("bir");
const two = document.getElementById("eky");
const windowModal = document.querySelector(".window__modal");

one.addEventListener("click", function () {
    windowModal.classList.add("active");
});

two.addEventListener("click", function () {
    windowModal.classList.remove("active");
});

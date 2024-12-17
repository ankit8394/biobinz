document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(item => item.classList.remove("active"));
            e.target.classList.add("active");
        });
    });
});
$(document).ready(function(){
    $(".menu-btn").click(function(){
      $("#list").slideToggle("slow");
    });
  });
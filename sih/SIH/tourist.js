// Highlight active section in navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});




function openNewPage() {
  window.location.href = "altobooktrip.html"; // replace with your new HTML page name
}
// Feedback form submission
const feedbackForm = document.getElementById("experienceFeedback");
const feedbackMessage = document.getElementById("feedbackMessage");

feedbackForm.addEventListener("submit", function(e) {
  e.preventDefault();
  feedbackMessage.style.display = "block";
  feedbackForm.reset();
});

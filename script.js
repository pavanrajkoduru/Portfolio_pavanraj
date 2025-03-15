document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect on page load
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  // Toggle menu function
  const toggleMenu = () => {
    document.querySelector(".menu-links").classList.toggle("open");
    document.querySelector(".hamburger-icon").classList.toggle("open");
  };

  // Fade-in effect for elements with class "fade-in"
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once shown
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of element is visible
  );

  fadeElements.forEach((element) => observer.observe(element));

  // Attach toggleMenu function to global scope if needed
  window.toggleMenu = toggleMenu;
});

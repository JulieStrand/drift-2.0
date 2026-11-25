const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.setAttribute("aria-expanded", "false");
  mobileBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.toggle("hidden");
    mobileBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

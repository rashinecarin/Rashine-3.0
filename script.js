/* =========================
   YEAR IN FOOTER
   ========================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================
   GALLERY IMAGE MODAL
   ========================= */
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.getElementById("modalBackdrop");

/* Open modal when gallery image is clicked */
document.querySelectorAll(".image-card img").forEach(img => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = img.alt;
    modalText.textContent = img.dataset.description || "";
    modal.setAttribute("aria-hidden", "false");
  });
});

/* Close modal */
function closeImageModal() {
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

modalClose.addEventListener("click", closeImageModal);
modalBackdrop.addEventListener("click", closeImageModal);

/* =========================
   CERTIFICATE LIGHTBOX
   ========================= */
const certLightbox = document.getElementById("certLightbox");
const certImg = document.getElementById("certLightboxImg");
const certClose = document.querySelector(".cert-close");
const certBackdrop = document.querySelector(".cert-backdrop");

document.querySelectorAll(".certificate-card img").forEach(img => {
  img.addEventListener("click", () => {
    certImg.src = img.src;
    certLightbox.classList.add("show");
    certLightbox.setAttribute("aria-hidden", "false");
  });
});

function closeCert() {
  certLightbox.classList.remove("show");
  certLightbox.setAttribute("aria-hidden", "true");
  certImg.src = "";
}

certClose.addEventListener("click", closeCert);
certBackdrop.addEventListener("click", closeCert);

/* =========================
   SCROLL REVEAL (SAFE)
   ========================= */
const revealItems = document.querySelectorAll(".journal-entry, .certificate-card");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach(item => revealObserver.observe(item));

/* =========================
   DARK MODE TOGGLE (ANIMATED)
   ========================= */
const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = toggleBtn.querySelector(".toggle-icon");
const prefersDark = localStorage.getItem("theme") === "dark";

/* Apply saved theme */
if (prefersDark) {
  document.body.classList.add("dark");
  toggleIcon.textContent = "☀️";
}

/* Toggle with animation */
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("animate");

  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");

  setTimeout(() => {
    toggleBtn.classList.remove("animate");
  }, 450);
});



/* =========================
   JOURNAL LIGHTBOX
   ========================= */
const journalLightbox = document.getElementById("journalLightbox");
const journalImg = document.getElementById("journalLightboxImg");
const journalClose = journalLightbox.querySelector(".cert-close");
const journalBackdrop = journalLightbox.querySelector(".cert-backdrop");

document.querySelectorAll(".journal-entry img").forEach(img => {
  img.addEventListener("click", () => {
    journalImg.src = img.src;
    journalLightbox.classList.add("show");
    journalLightbox.setAttribute("aria-hidden", "false");
  });
});

function closeJournal() {
  journalLightbox.classList.remove("show");
  journalLightbox.setAttribute("aria-hidden", "true");
  journalImg.src = "";
}

journalClose.addEventListener("click", closeJournal);
journalBackdrop.addEventListener("click", closeJournal);

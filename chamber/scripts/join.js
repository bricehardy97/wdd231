// Set the current timestamp in the hidden input when the page loads
window.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }
  
    // Optional: Accessibility focus enhancement
    const formFields = document.querySelectorAll("input, select, textarea, button");
    formFields.forEach(field => {
      field.addEventListener("focus", () => {
        field.classList.add("focused");
      });
      field.addEventListener("blur", () => {
        field.classList.remove("focused");
      });
    });
  
    // Optional: Animate membership cards on initial load
    const cards = document.querySelectorAll(".membership-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 200);
    });
  
    // Modal functionality for membership level info
    document.querySelectorAll("[data-modal-target]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const modalId = link.getAttribute("data-modal-target");
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add("open");
      });
    });
  
    document.querySelectorAll(".modal .close").forEach(button => {
      button.addEventListener("click", () => {
        button.closest(".modal").classList.remove("open");
      });
    });
  
    // Close modal if clicking outside content
    document.querySelectorAll(".modal").forEach(modal => {
      modal.addEventListener("click", e => {
        if (e.target === modal) {
          modal.classList.remove("open");
        }
      });
    });
  });
  
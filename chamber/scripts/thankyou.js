window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
  
    const fields = {
      firstname: "firstName",
      lastname: "lastName",
      email: "email",
      phone: "phone",
      organization: "organization",
      timestamp: "timestamp"
    };
  
    Object.entries(fields).forEach(([param, id]) => {
      const el = document.getElementById(id);
      const value = params.get(param);
  
      if (el) {
        if (param === "timestamp" && value) {
          el.textContent = new Date(value).toLocaleString();
        } else {
          el.textContent = value || "N/A";
        }
      }
    });
  });
  
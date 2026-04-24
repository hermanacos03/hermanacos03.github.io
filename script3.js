function validateContactForm() {
    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const safePattern = /^[a-zA-Z0-9\s@._,!?'()-]+$/;
  
    if (fullName === "") {
      alert("Name is required");
      return false;
    }
  
    if (email === "") {
      alert("Email is required");
      return false;
    }
  
    if (message === "") {
      alert("Message is required");
      return false;
    }
  
    if (!safePattern.test(fullName) || !safePattern.test(email) || !safePattern.test(message)) {
      alert("Please remove special characters that are not allowed.");
      return false;
    }
  
    alert("Message submitted successfully.");
    return false;
  }
  
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");
  
  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
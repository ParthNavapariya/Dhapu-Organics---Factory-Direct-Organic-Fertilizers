// ===== Navbar Scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navabar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});


// ===== Animation Observer =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});


// ===== Navbar Load =====
fetch("../Navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Hamburger
    const hamBtn = document.querySelector(".ham-btn");
    const hamDetail = document.querySelector(".ham-detail");
    const menuIcon = document.querySelector(".menu");

    if (hamBtn) {
      hamBtn.addEventListener("click", () => {
        hamDetail.classList.toggle("active");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");
      });
    }

    // Animation
    document.querySelectorAll(".hidden-bottom").forEach((el) => {
      observer.observe(el);
    });

    // Product Dropdown Mobile
    const productItem = document.querySelectorAll(".ham-detail ul li")[1];

    if (productItem) {
      const arrow = productItem.querySelector(".arrow");
      const link = productItem.querySelector("a");

      const toggleDropdown = () => {
        productItem.classList.toggle("open");
      };

      if (arrow) arrow.addEventListener("click", toggleDropdown);

      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          toggleDropdown();
        });
      }
    }

    // Desktop Dropdown
    const drops = document.querySelectorAll(".drop");

    drops.forEach((drop) => {
      drop.addEventListener("mouseenter", () => {
        drop.classList.add("open");
      });

      drop.addEventListener("mouseleave", () => {
        drop.classList.remove("open");
      });
    });
  })
  .catch((err) => {
    console.log("Navbar error:", err);
  });


// ===== Distributor Form Validation =====
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".error-msg").forEach((el) => el.remove());

    let isValid = true;

    const name = document.getElementById("text");
    const email = document.getElementById("email");
    const phone = document.getElementById("number");
    const inquiry = document.getElementById("inquiry");
    const message = document.querySelector("textarea");

    function showError(input, msg) {
      const error = document.createElement("p");
      error.classList.add("error-msg");
      error.textContent = msg;
      error.style.color = "red";
      error.style.fontSize = "14px";
      error.style.margin = "8px 0 15px";

      input.insertAdjacentElement("afterend", error);
      isValid = false;
    }

    if (name.value.trim() === "") {
      showError(name, "Name is required");
    }

    if (email.value.trim() === "") {
      showError(email, "Valid email required");
    }

    if (phone.value.trim() === "") {
      showError(phone, "Phone is required");
    }

    if (inquiry.value.trim() === "") {
      showError(inquiry, "Inquiry is required");
    }

    if (message.value.trim() === "") {
      showError(message, "Message is required");
    }

   
  });
}


// ===== Footer Load =====
fetch("../Fotter.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((err) => {
    console.log("Footer error:", err);
  });
// ───── Navbar Load ─────
fetch("../Navbar.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("navbar").innerHTML = data;

    // ===== Hamburger =====
const hamBtn = document.querySelector(".ham-btn");
const hamDetail = document.querySelector(".ham-detail");
const menuIcon = document.querySelector(".menu");

hamBtn.addEventListener("click", () => {
  hamDetail.classList.toggle("active");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars"); 
  }
});

 // BOTTOM
document.querySelectorAll(".hidden-bottom").forEach((el)=>{
  observer.observe(el);
});


    // ===== Product Dropdown (Mobile) =====
    const productItem = document.querySelectorAll(".ham-detail ul li")[1];

    if (productItem) {
      const arrow = productItem.querySelector(".arrow");
      const link = productItem.querySelector("a");

      const toggleDropdown = () => {
        productItem.classList.toggle("open");
      };

      if (arrow) {
        arrow.addEventListener("click", toggleDropdown);
      }

      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault(); 
          toggleDropdown();
        });
      }
    }

    // ===== Desktop Dropdown (optional) =====
    const drops = document.querySelectorAll(".drop");

    drops.forEach(drop => {
      drop.addEventListener("mouseenter", () => {
        drop.classList.add("open");
      });

      drop.addEventListener("mouseleave", () => {
        drop.classList.remove("open");
      });
    });

  })
  .catch(err => {
    console.log("Navbar error:", err);
  });

    // form validation

window.addEventListener("load", () => {

    const sendBtn = document.querySelector(".send-btn");

    sendBtn.onclick = function (e) {

        e.preventDefault();

        // INPUT VALUES
        const name = document.querySelector(".name").value.trim();
        const phone = document.querySelector(".Phone").value.trim();
        const location = document.querySelector(".location").value.trim();
        const message = document.querySelector(".message").value.trim();

        // ERROR DIVS
        const nameError = document.getElementById("nameError");
        const phoneError = document.getElementById("PhoneError");
        const locationError = document.getElementById("locationError");
        const messageError = document.getElementById("messageError");

        // CLEAR OLD ERRORS
        nameError.innerHTML = "";
        phoneError.innerHTML = "";
        locationError.innerHTML = "";
        messageError.innerHTML = "";

        let valid = true;

        // NAME
        if (name === "") {
            nameError.innerHTML = "Name is required";
            valid = false;
        }

        // PHONE
        if (phone === "") {
            phoneError.innerHTML = "Phone is required";
            valid = false;
        }

        // LOCATION
        if (location === "") {
            locationError.innerHTML = "Location is required";
            valid = false;
        }

        // MESSAGE
        if (message === "") {
            messageError.innerHTML = "Message is required";
            valid = false;
        }

        // SUCCESS
        if (valid) {
            alert("Form Submitted Successfully");
        }

    };

});

// ───── Footer Load ─────
fetch("../Fotter.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => {
    console.log("Footer error:", err);
  });
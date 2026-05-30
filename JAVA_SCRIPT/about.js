// ===== SCROLL ANIMATION =====

const observer = new IntersectionObserver((entries)=>{
    
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

},{
  threshold:0
});


// LEFT
document.querySelectorAll(".hidden-left").forEach((el)=>{
  observer.observe(el);
});

// RIGHT
document.querySelectorAll(".hidden-right").forEach((el)=>{
  observer.observe(el);
});

// BOTTOM
document.querySelectorAll(".hidden-bottom").forEach((el)=>{
  observer.observe(el);
});




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



// ===== Navigation =====

let home = document.getElementById("home");
let product = document.getElementById("Product");
let about = document.getElementById("about");
let distributor = document.getElementById("distributor");
let contact = document.getElementById("Contact");

if (home) {
  home.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
}

if (product) {
  product.addEventListener("click", function () {
    window.location.href = "../navigation/Product.html";
  });
}

if (about) {
  about.addEventListener("click", function () {
    window.location.href = "../navigation/about.html";
  });
}

if (distributor) {
  distributor.addEventListener("click", function () {
    window.location.href = "../navigation/Distributor.html";
  });
}

if (contact) {
  contact.addEventListener("click", function () {
    window.location.href = "../navigation/Contact.html";
  });
  
}


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


  // cta button
  const ctaBtn = document.querySelector(".cta-button");

if (ctaBtn) {
  ctaBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Product page open
    window.location.href = "../navigation/Product.html";
  });
}



  document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            const isItemActive = item.classList.contains("active");
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                }
            });
            if (isItemActive) {
                item.classList.remove("active");
            } else {
                item.classList.add("active");
            }
        });
    });

});


const form = document.getElementById("distributorForm");

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

    if (name.value.trim() === "") showError(name, "Name is required");
    if (email.value.trim() === "") showError(email, "Email is required");
    if (phone.value.trim() === "") showError(phone, "Phone is required");
    if (inquiry.value.trim() === "") showError(inquiry, "Inquiry is required");
    if (message.value.trim() === "") showError(message, "Message is required");

    if (isValid) {
      const whatsappMessage =
`Hello Dhapu Organics,

Name: ${name.value}
Email: ${email.value}
Phone: ${phone.value}
Inquiry: ${inquiry.value}
Message: ${message.value}`;

      const whatsappNumber = "919574155158";

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
    }
  });
}


// whatshapp from validation and send
const sendBtn = document.querySelector(".send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("nameError").innerText = "";
    document.getElementById("PhoneError").innerText = "";
    document.getElementById("locationError").innerText = "";
    document.getElementById("messageError").innerText = "";

    const name = document.querySelector(".name").value.trim();
    const phone = document.querySelector(".Phone").value.trim();
    const location = document.querySelector(".location").value.trim();
    const message = document.querySelector(".message").value.trim();

    let valid = true;

    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    }

    if (phone === "") {
      document.getElementById("PhoneError").innerText = "Phone is required";
      valid = false;
    }

    if (location === "") {
      document.getElementById("locationError").innerText = "Location is required";
      valid = false;
    }

    if (message === "") {
      document.getElementById("messageError").innerText = "Message is required";
      valid = false;
    }

    if (valid) {
      const whatsappMessage =
`Hello Dhapu Organics,

Name: ${name}
Phone: ${phone}
Location: ${location}
Message: ${message}`;

      const phoneNumber = "919574155158";

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
    }
  });
}

// ───── Footer Load ─────
fetch("../Fotter.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

        // Navigation
let footerHome = document.getElementById("footer-home");
let footerProduct = document.getElementById("footer-product");
let footerAbout = document.getElementById("footer-about");
let footerContact = document.getElementById("footer-contact");
let footerDistributor = document.getElementById("footer-distributor");
let getQoute = document.getElementById("getQoute");
let GETqote = document.getElementById("GET-qote");

if (footerHome) {
  footerHome.addEventListener("click", function () {
   window.location.href = "/index.html";
  });
}

if (footerProduct) {
  footerProduct.addEventListener("click", function () {
  window.location.href = "/navigation/Product.html";
  });
}

if (footerAbout) {
  footerAbout.addEventListener("click", function () {
  window.location.href = "/navigation/about.html";  });
}

if (footerContact) {
  footerContact.addEventListener("click", function () {
  window.location.href = "/navigation/Contact.html";
  });
}
if (footerDistributor) {
  footerDistributor.addEventListener("click", function () {
    window.location.href = "/navigation/Distributor.html";
  });
}
if (getQoute) {
  getQoute.addEventListener("click", () => {
    window.location.href = "/navigation/Contact.html";
  });
}

if (GETqote) {
  GETqote.addEventListener("click", () => {
    window.location.href = "/navigation/Contact.html";
  });
}
  })

  .catch(err => {
    console.log("Footer error:", err);
  });

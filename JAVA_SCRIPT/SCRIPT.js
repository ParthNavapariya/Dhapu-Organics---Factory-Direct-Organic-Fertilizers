// ───── Animation Observer ─────
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
});

function observeAnimations() {
  let elements = document.querySelectorAll(".animation");

  elements.forEach((el) => {
    el.classList.add("animate");
    observer.observe(el);
  });
}


// ───── Page Load ─────
document.addEventListener("DOMContentLoaded", function () {

  observeAnimations();

  // Buttons
  let exploreBtn = document.getElementById("Exploreproduct");
  let touchBtn = document.getElementById("getTouch");
  let viewBtn = document.getElementById("viewallproduct");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      window.location.href = "navigation/Product.html";
    });
  }

  if (touchBtn) {
    touchBtn.addEventListener("click", function () {
      window.location.href = "navigation/getQoute.html";
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener("click", function () {
      window.location.href = "navigation/product.html";
    });
  }


  // Slider
  let slider = document.getElementById("farm-slider");
  let acre = document.getElementById("acre-display");
  let trad = document.getElementById("trad-val");
  let dhapu = document.getElementById("dhapu-val");
  let extra = document.getElementById("extra-val");

  let TRAD = 20000;
  let DHAPU = 28000;

  function update() {
    let value = slider.value;

    acre.innerText = value + " Acres";
    trad.innerText = "₹" + (value * TRAD).toLocaleString();
    dhapu.innerText = "₹" + (value * DHAPU).toLocaleString();
    extra.innerText = "+₹" + (value * (DHAPU - TRAD)).toLocaleString();
  }

  if (slider) {
    slider.addEventListener("input", update);
    update();
  }

});


// ───── Navbar Scroll ─────
window.onscroll = function () {
  let navbar = document.querySelector(".navabar");

  if (navbar) {
    if (document.documentElement.scrollTop > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
};


// ───── Navbar Load ─────
fetch("../Navbar.html")
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {

   document.querySelector("#navbar").innerHTML = data;

    observeAnimations();

    // Dropdown
    let drops = document.querySelectorAll(".drop");

    drops.forEach(function (drop) {
      drop.addEventListener("click", function () {
        drop.classList.toggle("open");
      });

      drop.addEventListener("mouseover", function () {
        drop.classList.add("open");
      });

      drop.addEventListener("mouseout", function () {
        drop.classList.remove("open");
      });
    });


    // Hamburger
    const hamBtn = document.querySelector(".ham-btn");
    const hamDetail = document.querySelector(".ham-detail");

    hamBtn.addEventListener("click", () => {
      hamDetail.classList.toggle("active");
    });


    // Product dropdown toggle
    const productItem = document.querySelectorAll(".ham-detail ul li")[1];
    const arrow = productItem.querySelector(".arrow");

    arrow.addEventListener("click", () => {
      productItem.classList.toggle("open");
    });


    // Navigation
    let home = document.getElementById("home");
    let product = document.getElementById("Product");
    let about = document.getElementById("about");
    let distributor = document.getElementById("distributor");
    let contact = document.getElementById("Contact");
    let viewAllProducts = document.getElementById("viewAllProducts");

    let getQoute = document.getElementById("getQoute");
    let GETqote = document.getElementById("GET-qote");
    let getTouch = document.getElementById("getTouch");

    if (home) home.addEventListener("click", () => window.location.href = "index.html");

    if (product) product.addEventListener("click", () => window.location.href = "navigation/Product.html");

    if (about) about.addEventListener("click", () => window.location.href = "navigation/about.html");

    if (distributor) distributor.addEventListener("click", () => window.location.href = "navigation/Distributor.html");

    if (contact) contact.addEventListener("click", () => window.location.href = "navigation/Contact.html");

    if (getQoute) getQoute.addEventListener("click", () => window.location.href = "/navigation/Contact.html");

    if (GETqote) GETqote.addEventListener("click", () => window.location.href = "/navigation/Contact.html");

    if (getTouch) getTouch.addEventListener("click", () => window.location.href = "/navigation/Contact.html");

if (viewAllProducts) {
  viewAllProducts.addEventListener("click", () => {
    window.location.href = "./navigation/Product.html?scroll=up";
  });
}

  });


// ───── PRODUCT GRID ─────
const productGrid = document.querySelector(".productgrid");

if (productGrid && typeof products !== "undefined") {

products.slice(0, 8).forEach(product => {

    productGrid.innerHTML += `
      <div class="Product-card-detail animation">
        <div class="product-card-img">
          <img src="${product.image}"/>
          <h2 class="product-soil">${product.catagoryies}</h2>
          <div class="Enquiry-btn">
            <button class="show-btn">
            <a href="./navigation/Product_detail.html?id=${product.id}" class="card">
                Show More Details
              </a>
            </button>
                     <button 
  class="Whatshapp-btn"
  onclick="sendWhatsapp('${product.name}')"
>
  Whatsapp Enquiry
</button>
          </div>
        </div>

        <div class="product-name">
          <h1>${product.name}</h1>
        </div>

        <div class="product-card-discr">
          <p>${product.description}</p>
        </div>

        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span class="num-rate">${product.rating}</span>
          <span class="num">${product.number}</span>
          <span class="soil-Conditioner">${product.catagory}</span>
        </div>
      </div>
    `;

  });

}
function sendWhatsapp(productName) {
  const phoneNumber = "919574155158"; 
  const message = `Hello, I want enquiry about ${productName}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// ───── Search box ─────
let searchbox = document.getElementById("search-input");
let cards = document.querySelectorAll(".Product-card-detail");
let showCount = document.querySelector(".show");

if (searchbox) {
  searchbox.addEventListener("input", function () {

    let value = this.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(function (card) {

      let fullText = card.innerText.toLowerCase();

      if (fullText.includes(value)) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }

    });

    if (showCount) {
      showCount.textContent =
        "Showing " + visibleCount + " of " + cards.length + " products";
    }

  });
}


// ───── Footer Load ─────
fetch("../Fotter.html")
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {

    document.getElementById("footer").innerHTML = data;

    let footerHome = document.getElementById("footer-home");
    let footerProduct = document.getElementById("footer-product");
    let footerAbout = document.getElementById("footer-about");
    let footerContact = document.getElementById("footer-contact");
    let footerDistributor = document.getElementById("footer-distributor");

    if (footerHome) footerHome.onclick = () => location.href = "/index.html";
    if (footerProduct) footerProduct.onclick = () => location.href = "/navigation/Product.html";
    if (footerAbout) footerAbout.onclick = () => location.href = "/navigation/about.html";
    if (footerContact) footerContact.onclick = () => location.href = "/navigation/Contact.html";
    if (footerDistributor) footerDistributor.onclick = () => location.href = "/navigation/Distributor.html";

  })
  .catch(function (err) {
    console.log("Footer load error:", err);
  });
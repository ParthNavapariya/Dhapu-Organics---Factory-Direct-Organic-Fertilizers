fetch("../Navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    requestAnimationFrame(() => {

      // ===== HAMBURGER =====
      document.addEventListener("click", (e) => {

        if (e.target.closest(".ham-btn")) {
          document.querySelector(".ham-detail")?.classList.toggle("active");

          const icon = document.querySelector(".menu");
          icon?.classList.toggle("fa-bars");
          icon?.classList.toggle("fa-xmark");
        }

        // ===== NAVIGATION FIX =====
        if (e.target.closest("#home")) {
          window.location.href = "/index.html";
        }

        if (e.target.closest("#Product")) {
          window.location.href = "/navigation/Product.html";
        }

        if (e.target.closest("#about")) {
          window.location.href = "/navigation/about.html";
        }

        if (e.target.closest("#distributor")) {
          window.location.href = "/navigation/Distributor.html";
        }

        if (e.target.closest("#Contact")) {
          window.location.href = "/navigation/Contact.html";
        }

      });

    });

  })
  .catch(err => console.log(err));

  
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if (id) {

  const product = products.find(p => p.id == id);

  if (product) {

    document.getElementById("productImage").src = product.image;

    document.getElementById("title").innerHTML = product.name;

    document.getElementById("category").innerHTML = product.catagory;

    document.getElementById("description").innerHTML = product.description;

    document.getElementById("subtitle").innerHTML = product.subtitle;

    document.getElementById("stars").innerHTML = product.stars;

  document.getElementById("ratingNum").innerHTML =
product.rating;

    document.getElementById("rating-count").innerHTML =
    product.number + " farmer reviews";
    // Dosage
document.getElementById("dosageMain").innerHTML =
product.dosageMain;

// Variants
const variants = document.getElementById("variants");

variants.innerHTML = "";

product.variants.forEach(item => {

  variants.innerHTML += `
  
    <div class="variant">
      ${item}
    </div>

  `;

});



// Related Products
const related = products.filter(p => p.id != id);

const relatedProducts = document.getElementById("relatedProducts");

relatedProducts.innerHTML = "";

related.slice(0, 4).forEach(product => {

  relatedProducts.innerHTML += `

  <a href="Product_detail.html?id=${product.id}" class="card">

    <div class="card-image">

      <span class="badge">
        ${product.catagory}
      </span>

      <img src="${product.image}" alt="${product.name}">

      <div class="overlay">

        <button class="details-btn">
          Show More Details
        </button>

        <button 
    class="whatsapp-btn"
    onclick="sendWhatsapp('${product.name}')"
  >
    WhatsApp Enquiry
  </button>
      </div>

    </div>

    <div class="card-content">

      <h2>${product.name}</h2>

      <p class="subtitle">
        ${product.description}
      </p>

      <div class="card-footer">

        <div class="left-rating">

          <span>⭐</span>

          <span class="rating">
            ${product.rating}
          </span>

          <span class="rating-count">
            ${product.number}
          </span>

        </div>

        <span class="category-text">
          ${product.catagory}
        </span>

      </div>

    </div>

  </a>

  `;

});

  }

}
function sendWhatsapp(productName) {
  const phoneNumber = "919574155158"; 
  const message = `Hello, I want enquiry about ${productName}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
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

  
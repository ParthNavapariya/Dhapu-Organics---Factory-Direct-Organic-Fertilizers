window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("scroll") === "up") {
    const halfPage = document.body.scrollHeight * 0.5;

    window.scrollTo(0, halfPage);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 200);
  }
});
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
  const elements = document.querySelectorAll(".animation");

  elements.forEach((el) => {
    el.classList.add("animate");
    observer.observe(el);
  });
}

// ───── Navbar Load ─────
fetch("../Navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    observeAnimations();

    // ===== Hamburger =====
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

    // ===== Navigation =====
    setupNavigation();

    // ===== Product Dropdown =====
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

    // ===== Desktop Dropdown =====
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

// ───── Navigation Function ─────
function setupNavigation() {
  const home = document.getElementById("home");
  const product = document.getElementById("Product");
  const about = document.getElementById("about");
  const distributor = document.getElementById("distributor");
  const contact = document.getElementById("Contact");

    let getQoute = document.getElementById("getQoute");
    let GETqote = document.getElementById("GET-qote");

  if (home) {
    home.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }

  if (product) {
    product.addEventListener("click", () => {
      window.location.href = "../navigation/Product.html";
    });
  }

  if (about) {
    about.addEventListener("click", () => {
      window.location.href = "../navigation/about.html";
    });
  }

  if (distributor) {
    distributor.addEventListener("click", () => {
      window.location.href = "../navigation/Distributor.html";
    });
  }
   if (getQoute) getQoute.addEventListener("click", () => window.location.href = "/navigation/Contact.html");

    if (GETqote) GETqote.addEventListener("click", () => window.location.href = "/navigation/Contact.html");


  if (contact) {
    contact.addEventListener("click", () => {
      window.location.href = "../navigation/Contact.html";
    });
  }
}

// ───── Product Grid ─────
const grid = document.querySelector(".productgrid");

if (grid && typeof products !== "undefined") {
  let displayProducts = [];

  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("type");

  if (selectedCategory) {
    displayProducts = products.filter((product) =>
  product.catagory.toLowerCase().includes(selectedCategory.toLowerCase())
);
  } else {
    if (window.location.pathname.includes("Product.html")) {
      displayProducts = products;
    } else {
      displayProducts = products.slice(0, 6);
    }
  }

  grid.innerHTML = "";

  displayProducts.forEach((product) => {
    grid.innerHTML += `
      <div class="Product-card-detail animation">
        <div class="product-card-img">
          <img src="${product.image}" alt="${product.name}" />

          <h2 class="product-soil">
            ${product.catagoryies}
          </h2>

          <div class="Enquiry-btn">
            <button class="show-btn">
              <a href="Product_detail.html?id=${product.id}" class="card">
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

  observeAnimations();
}
function sendWhatsapp(productName) {
  const phoneNumber = "919574155158"; 
  const message = `Hello, I want enquiry about ${productName}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
// ───── Search Box ─────
const searchbox = document.getElementById("search-input");
const showCount = document.querySelector(".show");

if (searchbox) {
  let cards = document.querySelectorAll(".Product-card-detail");
  let totalCards = cards.length;

  if (showCount) {
    showCount.textContent =
      `Showing ${totalCards} of ${totalCards} products`;
  }

  searchbox.addEventListener("input", function () {
    let value = this.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach((card) => {
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
        `Showing ${visibleCount} of ${totalCards} products`;
    }
  });
}


// footer
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
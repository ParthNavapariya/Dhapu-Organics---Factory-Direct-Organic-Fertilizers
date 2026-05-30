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


// ───── Footer Load ─────
fetch("../Fotter.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => {
    console.log("Footer error:", err);
  });
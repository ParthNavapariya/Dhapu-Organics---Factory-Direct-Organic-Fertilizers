const grid = document.querySelector(".productgrid");

if (grid && typeof products !== "undefined") {
  grid.innerHTML = "";

  products.slice(0, 8).forEach((product) => {
    grid.innerHTML += `
      <div class="Product-card-detail animation">
        <div class="product-card-img">
          <img src="${product.image}" alt="${product.name}" />
          <h2 class="product-soil">${product.catagoryies}</h2>

          <div class="Enquiry-btn">
            <button class="show-btn">
              <a href="navigation/Product_detail.html?id=${product.id}" class="card">
                Show More Details
              </a>
            </button>

            <button class="Whatshapp-btn">
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
          <span class="num">${product.number || ""}</span>
          <span class="soil-Conditioner">${product.catagory || ""}</span>
        </div>
      </div>
    `;
  });

}

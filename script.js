const currencyFormatter = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

const samplePricingNote =
  "Sample pricing mode: official J. pricing is not provided here, so these prices are demo values used for the storefront.";

const products = [
  {
    id: 1,
    name: "Emerald Formal Shalwar Kameez",
    category: "men",
    price: 11999,
    badge: "Bestseller",
    stock: 12,
    description: "A regal emerald formal shalwar kameez with a sharp collar and subtle tailored finish for elegant occasions.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Emerald", value: "#0c8f72" },
      { name: "Black", value: "#111111" },
      { name: "Gold", value: "#d4af37" }
    ]
  },
  {
    id: 2,
    name: "Royal Ivory Kurta",
    category: "men",
    price: 14999,
    badge: "New",
    stock: 8,
    description: "Soft ivory kurta with a polished silhouette designed for family gatherings, formal dinners, and elevated everyday wear.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Ivory", value: "#f1ebdf" },
      { name: "Black", value: "#141414" },
      { name: "Green", value: "#1c6a5d" }
    ]
  },
  {
    id: 3,
    name: "Heritage Black Waistcoat",
    category: "men",
    price: 17999,
    badge: "Premium",
    stock: 15,
    description: "Statement waistcoat featuring rich black texture and a structured fit that adds instant polish to formal attire.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Black", value: "#111111" },
      { name: "Gold", value: "#d4af37" },
      { name: "Deep Green", value: "#0f483d" }
    ]
  },
  {
    id: 4,
    name: "Linen Summer Kurta Set",
    category: "men",
    price: 12999,
    badge: "Hot",
    stock: 9,
    description: "Breathable linen kurta designed for all-day comfort while preserving a refined, well-tailored profile.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sand", value: "#d4b996" },
      { name: "Forest", value: "#173d32" },
      { name: "Onyx", value: "#0d0d0d" }
    ]
  },
  {
    id: 5,
    name: "Rose Gold Anarkali",
    category: "women",
    price: 16999,
    badge: "Trending",
    stock: 10,
    description: "Graceful rose gold anarkali with flowing monotone drape, ideal for weddings, soirées and special evenings.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Rose Gold", value: "#cda27c" },
      { name: "Midnight", value: "#10151d" },
      { name: "Emerald", value: "#1b6f62" }
    ]
  },
  {
    id: 6,
    name: "Midnight Sada Suit",
    category: "women",
    price: 15999,
    badge: "Elegant",
    stock: 13,
    description: "Sophisticated midnight suit featuring a structure that balances comfort, elegance and understated premium detailing.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Midnight", value: "#101417" },
      { name: "Pearl", value: "#e7e1d8" },
      { name: "Forest", value: "#164c43" }
    ]
  },
  {
    id: 7,
    name: "Emerald Lawn Co-ord",
    category: "women",
    price: 13999,
    badge: "Classic",
    stock: 11,
    description: "Refined emerald lawn co-ord set that brings a modern premium feel to understated everyday styling.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Emerald", value: "#0f8b73" },
      { name: "Black", value: "#121212" },
      { name: "Ivory", value: "#efeae1" }
    ]
  },
  {
    id: 8,
    name: "Festive Kids Kurta",
    category: "kids",
    price: 8999,
    badge: "Kids",
    stock: 18,
    description: "A light festive kurta tailored for comfort and little-girl or little-boy elegance during family events.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Emerald", value: "#0c8f72" },
      { name: "Sand", value: "#d8bf9f" },
      { name: "Black", value: "#111111" }
    ]
  },
  {
    id: 9,
    name: "Classic Kids Waistcoat",
    category: "kids",
    price: 9999,
    badge: "Fresh",
    stock: 12,
    description: "Structured kids waistcoat that adds sophistication to occasion wear for celebrations and family gatherings.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Black", value: "#101010" },
      { name: "Gold", value: "#d4af37" },
      { name: "Green", value: "#1b6c5d" }
    ]
  },
  {
    id: 10,
    name: "Children Party Set",
    category: "kids",
    price: 10999,
    badge: "Limited",
    stock: 16,
    description: "A coordinated kids party set balancing comfort, style and festive elegance in vibrant premium tones.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: [
      { name: "Ivory", value: "#f1eadf" },
      { name: "Emerald", value: "#0f8b73" },
      { name: "Saffron", value: "#d9a144" }
    ]
  },
  {
    id: 11,
    name: "Signature Shawl",
    category: "accessories",
    price: 6999,
    badge: "Must Have",
    stock: 20,
    description: "Premium shawl crafted to complement formal and festive outfits with a polished luxury finish.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Emerald", value: "#13675d" },
      { name: "Black", value: "#111111" },
      { name: "Gold", value: "#d4af37" }
    ]
  },
  {
    id: 12,
    name: "Leather Wallet",
    category: "accessories",
    price: 7999,
    badge: "Elite",
    stock: 22,
    description: "Minimal leather wallet designed with a premium finish, suitable for gifting or everyday refined utility.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", value: "#191919" },
      { name: "Brown", value: "#8d654c" },
      { name: "Gold", value: "#d4af37" }
    ]
  }
];

const cart = [];
const wishlist = [];

const productsGrid = document.getElementById("productsGrid");
const wishlistGrid = document.getElementById("wishlistGrid");
const cartItems = document.getElementById("cartItems");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const toast = document.getElementById("toast");
const subtotalValue = document.getElementById("subtotalValue");
const discountValue = document.getElementById("discountValue");
const totalValue = document.getElementById("totalValue");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutForm = document.getElementById("checkoutForm");

let activeFilter = "all";
let searchTerm = "";

function formatPrice(value) {
  return currencyFormatter.format(value);
}

function getDiscountedPrice(originalPrice) {
  return Number((originalPrice * 0.5).toFixed(0));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function renderProducts() {
  const filtered = products.filter((product) => {
    const categoryMatch = activeFilter === "all" || product.category === activeFilter;
    const searchMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  productsGrid.innerHTML = "";

  if (!filtered.length) {
    productsGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div>
          <h3>No products match your search.</h3>
          <p>Try a different keyword or category.</p>
        </div>
      </div>
    `;
    return;
  }

  filtered.forEach((product) => {
    const discounted = getDiscountedPrice(product.price);
    const isWishlisted = wishlist.includes(product.id);

    productsGrid.insertAdjacentHTML(
      "beforeend",
      `
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" />
          <span class="product-badge">${product.badge}</span>
          <button
            type="button"
            class="wishlist-button ${isWishlisted ? "active" : ""}"
            data-wishlist="${product.id}"
            aria-label="Add to wishlist"
          >
            ${isWishlisted ? "♥" : "♡"}
          </button>
        </div>

        <div class="product-body">
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <span class="product-stock">${product.stock} in stock</span>
          </div>

          <h3>${product.name}</h3>

          <div class="price-wrap">
            <span class="original-price">${formatPrice(product.price)}</span>
            <span class="discounted-price">${formatPrice(discounted)}</span>
          </div>

          <div class="product-sizes">
            ${product.sizes
              .slice(0, 4)
              .map((size) => `<span class="size-pill">${size}</span>`)
              .join("")}
          </div>

          <div class="product-colors">
            ${product.colors
              .slice(0, 3)
              .map(
                (color) =>
                  `<span class="color-pill"><span class="color-dot" style="background:${color.value}"></span>${color.name}</span>`
              )
              .join("")}
          </div>

          <div class="product-actions">
            <button type="button" class="btn btn-primary" data-view-product="${product.id}">
              View Details
            </button>
            <button type="button" class="btn btn-secondary" data-add-cart="${product.id}">
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `
    );
  });
}

function renderWishlist() {
  wishlistGrid.innerHTML = "";

  if (!wishlist.length) {
    wishlistGrid.innerHTML = `
      <div class="empty-state">
        Your wishlist is empty. Save a few items to compare your favorites.
      </div>
    `;
    return;
  }

  wishlist.forEach((productId) => {
    const product = getProductById(productId);
    if (!product) return;

    wishlistGrid.insertAdjacentHTML(
      "beforeend",
      `
      <div class="wishlist-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h4>${product.name}</h4>
          <div class="mini-price">${formatPrice(getDiscountedPrice(product.price))}</div>
        </div>
        <button type="button" data-remove-wishlist="${product.id}" aria-label="Remove from wishlist">✕</button>
      </div>
    `
    );
  });
}

function createCartItem(productId, selectedSize, selectedColor, quantity) {
  const product = getProductById(productId);
  if (!product) return null;

  const existing = cart.find(
    (item) =>
      item.productId === productId &&
      item.size === selectedSize &&
      item.color === selectedColor
  );

  if (existing) {
    existing.quantity += quantity;
    return existing;
  }

  const discounted = getDiscountedPrice(product.price);

  const item = {
    productId,
    name: product.name,
    image: product.image,
    size: selectedSize,
    color: selectedColor,
    quantity,
    originalPrice: product.price,
    discountedPrice: discounted
  };

  cart.push(item);
  return item;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
}

function updateWishlistCount() {
  wishlistCount.textContent = wishlist.length;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        Your cart is empty. Add a few signature essentials to continue.
      </div>
    `;
  } else {
    cart.forEach((item) => {
      const product = getProductById(item.productId);
      cartItems.insertAdjacentHTML(
        "beforeend",
        `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h4>${item.name}</h4>
            <div class="cart-item-meta">
              <span>${item.size}</span>
              <span>${item.color}</span>
            </div>

            <div class="cart-item-controls">
              <div class="qty-box">
                <button type="button" data-qty-change="${item.productId}" data-direction="decrease" data-size="${item.size}" data-color="${item.color}">−</button>
                <strong>${item.quantity}</strong>
                <button type="button" data-qty-change="${item.productId}" data-direction="increase" data-size="${item.size}" data-color="${item.color}">+</button>
              </div>

              <span class="cart-price">${formatPrice(item.discountedPrice * item.quantity)}</span>
            </div>

            <button type="button" class="remove-item" data-remove-cart="${item.productId}" data-size="${item.size}" data-color="${item.color}">
              Remove
            </button>
          </div>
        </div>
      `
      );
    });
  }

  const subtotal = cart.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const discount = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0);
  const total = subtotal - discount;

  subtotalValue.textContent = formatPrice(subtotal);
  discountValue.textContent = `-${formatPrice(discount)}`;
  totalValue.textContent = formatPrice(total);
  checkoutTotal.textContent = formatPrice(total);

  updateCartCount();
}

function updateCartItemQuantity(productId, size, color, direction) {
  const item = cart.find(
    (entry) =>
      entry.productId === productId &&
      entry.size === size &&
      entry.color === color
  );

  if (!item) return;

  if (direction === "increase") {
    item.quantity += 1;
  } else if (direction === "decrease") {
    item.quantity -= 1;
  }

  if (item.quantity <= 0) {
    const index = cart.findIndex(
      (entry) =>
        entry.productId === productId &&
        entry.size === size &&
        entry.color === color
    );
    if (index !== -1) cart.splice(index, 1);
  }

  renderCart();
}

function removeCartItem(productId, size, color) {
  const index = cart.findIndex(
    (entry) =>
      entry.productId === productId &&
      entry.size === size &&
      entry.color === color
  );

  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
    showToast("Item removed from cart.");
  }
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);

  if (index === -1) {
    wishlist.push(productId);
    showToast("Added to wishlist.");
  } else {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist.");
  }

  updateWishlistCount();
  renderProducts();
  renderWishlist();
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const initialSize = product.sizes[0];
  const initialColor = product.colors[0].name;
  const initialColorValue = product.colors[0].value;

  const modalState = {
    productId,
    size: initialSize,
    color: initialColor,
    colorValue: initialColorValue,
    quantity: 1
  };

  const buildModal = () => {
    const discounted = getDiscountedPrice(product.price);

    modalBody.innerHTML = `
      <div class="modal-body">
        <div class="modal-gallery">
          <div class="main-gallery-image">
            <img src="${product.gallery[0]}" alt="${product.name}" id="mainGalleryImage" />
          </div>
          <div class="gallery-thumbs">
            ${product.gallery
              .map(
                (image, index) => `
                <button type="button" class="gallery-thumb ${index === 0 ? "active" : ""}" data-gallery-image="${image}">
                  <img src="${image}" alt="${product.name}" />
                </button>
              `
              )
              .join("")}
          </div>
        </div>

        <div class="modal-info">
          <span class="modal-category">${product.category}</span>
          <h2>${product.name}</h2>

          <div class="modal-price">
            <span class="original-price">${formatPrice(product.price)}</span>
            <span class="discounted-price">${formatPrice(discounted)}</span>
          </div>

          <p class="modal-description">${product.description}</p>

          <div class="option-section">
            <div class="option-label">
              <span>Size</span>
              <small>${modalState.size}</small>
            </div>
            <div class="option-set">
              ${product.sizes
                .map(
                  (size) =>
                    `<button type="button" class="option-button ${modalState.size === size ? "selected" : ""}" data-size-select="${size}">${size}</button>`
                )
                .join("")}
            </div>
          </div>

          <div class="option-section">
            <div class="option-label">
              <span>Color</span>
              <small>${modalState.color}</small>
            </div>
            <div class="option-set">
              ${product.colors
                .map(
                  (color) =>
                    `<button type="button" class="option-button ${modalState.color === color.name ? "selected" : ""}" data-color-select="${color.name}" style="border-color:${modalState.color === color.name ? 'rgba(212,175,55,0.5)' : 'rgba(255,255,255,0.08)'}">
                      <span class="color-dot" style="background:${color.value}"></span>${color.name}
                    </button>`
                )
                .join("")}
            </div>
          </div>

          <div class="modal-quantity">
            <button type="button" data-modal-qty-change="decrease">−</button>
            <span>${modalState.quantity}</span>
            <button type="button" data-modal-qty-change="increase">+</button>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn btn-primary" data-add-cart-modal="${product.id}">
              Add to Cart
            </button>
            <button type="button" class="btn btn-secondary" data-wishlist-modal="${product.id}">
              ${wishlist.includes(product.id) ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    `;

    const mainGalleryImage = document.getElementById("mainGalleryImage");
    const galleryThumbs = modalBody.querySelectorAll(".gallery-thumb");

    galleryThumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const source = thumb.dataset.galleryImage;
        mainGalleryImage.src = source;
        galleryThumbs.forEach((item) => item.classList.remove("active"));
        thumb.classList.add("active");
      });
    });

    modalBody.querySelectorAll("[data-size-select]").forEach((button) => {
      button.addEventListener("click", () => {
        modalState.size = button.dataset.sizeSelect;
        buildModal();
      });
    });

    modalBody.querySelectorAll("[data-color-select]").forEach((button) => {
      button.addEventListener("click", () => {
        modalState.color = button.dataset.colorSelect;
        const selectedColor = product.colors.find((color) => color.name === modalState.color);
        if (selectedColor) {
          modalState.colorValue = selectedColor.value;
        }
        buildModal();
      });
    });

    modalBody.querySelectorAll("[data-modal-qty-change]").forEach((button) => {
      button.addEventListener("click", () => {
        const change = button.dataset.modalQtyChange === "increase" ? 1 : -1;
        modalState.quantity = Math.max(1, modalState.quantity + change);
        buildModal();
      });
    });

    modalBody.querySelectorAll("[data-add-cart-modal]").forEach((button) => {
      button.addEventListener("click", () => {
        createCartItem(product.id, modalState.size, modalState.color, modalState.quantity);
        renderCart();
        closeModal();
        showToast(`${product.name} added to cart.`);
      });
    });

    modalBody.querySelectorAll("[data-wishlist-modal]").forEach((button) => {
      button.addEventListener("click", () => {
        toggleWishlist(product.id);
        buildModal();
      });
    });
  };

  buildModal();
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
}

function attachProductEvents() {
  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeModal();
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view-product]");
    if (viewButton) {
      openProductModal(Number(viewButton.dataset.viewProduct));
      return;
    }

    const addButton = event.target.closest("[data-add-cart]");
    if (addButton) {
      const productId = Number(addButton.dataset.addCart);
      const product = getProductById(productId);
      if (!product) return;
      createCartItem(productId, product.sizes[0], product.colors[0].name, 1);
      renderCart();
      showToast(`${product.name} added to cart.`);
      return;
    }

    const wishlistButton = event.target.closest("[data-wishlist]");
    if (wishlistButton) {
      toggleWishlist(Number(wishlistButton.dataset.wishlist));
      return;
    }

    const removeWishlistButton = event.target.closest("[data-remove-wishlist]");
    if (removeWishlistButton) {
      const productId = Number(removeWishlistButton.dataset.removeWishlist);
      const index = wishlist.indexOf(productId);
      if (index !== -1) wishlist.splice(index, 1);
      updateWishlistCount();
      renderWishlist();
      renderProducts();
      return;
    }

    const cartQuantityButton = event.target.closest("[data-qty-change]");
    if (cartQuantityButton) {
      const productId = Number(cartQuantityButton.dataset.qtyChange);
      const direction = cartQuantityButton.dataset.direction;
      const size = cartQuantityButton.dataset.size;
      const color = cartQuantityButton.dataset.color;
      updateCartItemQuantity(productId, size, color, direction);
      return;
    }

    const removeCartButton = event.target.closest("[data-remove-cart]");
    if (removeCartButton) {
      const productId = Number(removeCartButton.dataset.removeCart);
      const size = removeCartButton.dataset.size;
      const color = removeCartButton.dataset.color;
      removeCartItem(productId, size, color);
      return;
    }
  });

  document.getElementById("cartToggle").addEventListener("click", () => {
    document.getElementById("cartPanel").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("wishlistToggle").addEventListener("click", () => {
    document.querySelector(".wishlist-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("continueShopping").addEventListener("click", () => {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("clearCartBtn").addEventListener("click", () => {
    cart.length = 0;
    renderCart();
    showToast("Cart cleared.");
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((btn) => btn.classList.toggle("active", btn === button));
      renderProducts();
    });
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!cart.length) {
      showToast("Your cart is empty.");
      return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    if (!name || !phone || !address) {
      showToast("Please fill in all checkout details before ordering.");
      return;
    }

    const summary = cart.map((item) => {
      const product = getProductById(item.productId);
      return `- ${product ? product.name : item.name} (${item.size}, ${item.color}) x${item.quantity} = ${formatPrice(item.discountedPrice * item.quantity)}`;
    }).join("\n");

    const orderMessage = encodeURIComponent(
      `Hello, I would like to place an order.\n\nCustomer: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n${summary}\n\nTotal: ${formatPrice(cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0))}`
    );

    window.open(`https://wa.me/923001234567?text=${orderMessage}`, "_blank", "noopener");
    showToast("WhatsApp order opened.");
  });
}

function init() {
  updateWishlistCount();
  renderProducts();
  renderWishlist();
  renderCart();
  attachProductEvents();
  console.log(samplePricingNote);
}

init();

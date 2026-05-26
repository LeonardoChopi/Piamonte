// Array de productos de ejemplo
const productos = [
  {
    nombre: "Broche Cangrejo",
    descripcion: "Broche elegante con forma de cangrejo, decorado con piedras turquesa.",
    imagenes: [
      "productos/img/BorcheCangrejo1.jpg",
      "productos/img/BorcheCangrejo2.jpg"
    ],
    stock: true
  },
  {
    nombre: "Broche Salamandra",
    descripcion: "Broche de salamandra con incrustaciones de piedras de colores.",
    imagenes: [
      "productos/img/BorcheLagarto1.jpg",
      "productos/img/BorcheLagarto2.jpg"
    ],
    stock: false
  },
  {
    nombre: "Broche Abeja",
    descripcion: "Broche pequeño en forma de Abeja, ideal para cualquier ocasión.",
    imagenes: [
      "productos/img/BrocheAbeja1.jpg",
      "productos/img/BrocheAbeja2.jpg"
    ],
    stock: true
  }
];

// Renderizado dinámico de productos
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector(".product-list");
  if (!lista) return;
  lista.innerHTML = "";
  productos.forEach((producto, idx) => {
    const item = document.createElement("div");
    item.className = "product-item";

    // Galería de imágenes
    let galeria = "";
    if (producto.imagenes && producto.imagenes.length > 0) {
      galeria = `<div class="product-gallery">` +
        producto.imagenes.map((img, i) =>
          `<img src="${img}" alt="${producto.nombre} ${i+1}" class="${i === 0 ? 'active' : ''}" data-idx="${idx}" data-img="${i}" onerror="this.onerror=null;this.src='img/default.jpg';">`
        ).join("") +
        `</div>`;
    } else {
      galeria = `<div class="product-gallery"><img src="img/default.jpg" alt="${producto.nombre} default" class="active" data-idx="${idx}" data-img="0"></div>`;
    }

    // Stock
    const stockHtml = producto.stock
      ? '<span class="stock stock-true">En stock</span>'
      : '<span class="stock stock-false">Sin stock</span>';

    item.innerHTML = `
      ${galeria}
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      ${stockHtml}
      <div class="product-thumbs">
        ${(producto.imagenes && producto.imagenes.length > 0)
          ? producto.imagenes.map((img, i) =>
              `<img src="${img}" alt="${producto.nombre} miniatura" class="thumb" data-idx="${idx}" data-img="${i}" onerror="this.onerror=null;this.src='img/default.jpg';">`
            ).join("")
          : `<img src="img/default.jpg" alt="${producto.nombre} miniatura" class="thumb" data-idx="${idx}" data-img="0">`
        }
      </div>
    `;
    lista.appendChild(item);
  });

  // Selección de imágenes
  document.querySelectorAll('.product-thumbs .thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
      const idx = this.getAttribute('data-idx');
      const imgIdx = this.getAttribute('data-img');
      const gallery = document.querySelectorAll(`.product-gallery img[data-idx='${idx}']`);
      gallery.forEach((img, i) => {
        img.classList.toggle('active', i == imgIdx);
      });
    });
  });
});

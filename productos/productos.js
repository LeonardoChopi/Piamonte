// Array de productos de ejemplo
const productos = [
  {
    nombre: "Broche Cangrejo",
    descripcion: "Broche elegante con forma de cangrejo, decorado con piedras turquesa.",
    imagenes: [
      "productos/img/BorcheCangrejo1.jpg",
      "productos/img/BorcheCangrejo2.jpg",
      "productos/img/BorcheCangrejo3.jpg",
      "productos/img/BorcheCangrejo4.jpg"
    ],
    stock: true,
    precio: 350
  },
  {
    nombre: "Broche Lagartija",
    descripcion: "Broche de lagartija con incrustaciones de piedras de colores.",
    imagenes: [
      "productos/img/BorcheLagarto1.jpg",
      "productos/img/BorcheLagarto2.jpg"
    ],
    stock: false,
    precio: 400
  },
  {
    nombre: "Broche Abeja",
    descripcion: "Broche pequeño en forma de Abeja, ideal para cualquier ocasión.",
    imagenes: [
      "productos/img/BrocheAbeja1.jpg",
      "productos/img/BrocheAbeja2.jpg"
    ],
    stock: false,
    precio: 350
  },
  {
    nombre: "Caballo Plateado",
    descripcion: "Caballo plateado, perfecto para ocasiones especiales.",
    imagenes: [
      "productos/img/CaballoPlateado1.jpeg",
      "productos/img/CaballoPlateado2.jpeg"
    ],
    stock: true,
    precio: 250
  },
  {
    nombre: "Libélula",
    descripcion: "Libélula decorativa, ideal para coleccionistas.",
    imagenes: [
      "productos/img/Libélula1.jpeg"
    ],
    stock: true,
    precio: 350
  },
  {
    nombre: "Bandera Uruguay",
    descripcion: "Bandera de Uruguay, perfecta para ocasiones especiales.",
    imagenes: [
      "productos/img/BanderaUruguay1.jpeg",
      "productos/img/BanderaUruguay2.jpeg"
    ],
    stock: true,
    precio: 180
  },
  {
    nombre: "Corona",
    descripcion: "Corona decorativa, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Corona1.jpeg"
    ],
    stock: true,
    precio: 280
  },
  {
    nombre: "Búho",
    descripcion: "Búho decorativo, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Buho1.jpeg"
    ],
    stock: true,
    precio: 280
  },
  {
    nombre: "Pack flor + copo de nieve",
    descripcion: "Pack con flores y copo de nieve, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Florycopo1.jpeg"
    ],
    stock: true,
    precio: 320
  },
  {
    nombre: "Palmera",
    descripcion: "Palmera decorativa, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Palmera1.jpeg"
    ],
    stock: true,
    precio: 250
  },
  {
    nombre: "Pack de minis",
    descripcion: "Pack con miniaturas, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Minis1.jpeg",
      "productos/img/Minis2.jpeg",
      "productos/img/Minis3.jpeg",
      "productos/img/Minis4.jpeg",
      "productos/img/Minis5.jpeg",
      "productos/img/Minis6.jpeg",
      "productos/img/Minis7.jpeg",
      "productos/img/Minis8.jpeg"
    ],
    stock: true,
    precio: 100
  },
  {
    nombre: "Corbatín con sujetador",
    descripcion: "Corbatín con sujetador, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Corbatín1.jpeg"
    ],
    stock: true,
    precio: 290
  },
  {
    nombre: "Gato unitario",
    descripcion: "Gato unitario, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Gato1.jpeg"
    ],
    stock: true,
    precio: 120
  },
  {
    nombre: "Mariquita verde",
    descripcion: "Mariquita verde, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVerde1.jpeg"
    ],
    stock: true,
    precio: 260
  },
  {
    nombre: "Mariquita marrón",
    descripcion: "Mariquita marrón, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaMarron1.jpeg"
    ],
    stock: true,
    precio: 260
  },
  {
    nombre: "Mariquita rosada",
    descripcion: "Mariquita rosada, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaRosada1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita turquesa",
    descripcion: "Mariquita turquesa, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaTurquesa1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita colores",
    descripcion: "Mariquita colores, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaColores1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita violeta",
    descripcion: "Mariquita violeta, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVioleta1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Caballito de mar",
    descripcion: "Caballito de mar, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/CaballitoDeMar1.jpeg"
    ],
    stock: false,
    precio: false
  },
  {
    nombre: "Estrella de mar + caracol",
    descripcion: "Estrella de mar + caracol, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/EstrellaDeMarYCaracol1.jpeg"
    ],
    stock: false,
    precio: false
  },
  {
    nombre: "Combo flores",
    descripcion: "Combo flores, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/Comboflores1.jpeg"
    ],
    stock: false,
    precio: false
  },
  {
    nombre: "Mariquita violeta",
    descripcion: "Mariquita violeta, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVioleta1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita violeta",
    descripcion: "Mariquita violeta, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVioleta1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita violeta",
    descripcion: "Mariquita violeta, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVioleta1.jpeg"
    ],
    stock: false,
    precio: 260
  },
  {
    nombre: "Mariquita violeta",
    descripcion: "Mariquita violeta, ideal para ocasiones especiales.",
    imagenes: [
      "productos/img/MariquitaVioleta1.jpeg"
    ],
    stock: false,
    precio: 260
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
      <div class="product-price"><strong>Precio:</strong> $${producto.precio}</div>
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

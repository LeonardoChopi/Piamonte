// lightbox.js
(function () {
  // Crear overlay del lightbox
  var overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.innerHTML =
    '<div id="lightbox-box">' +
      '<button id="lightbox-close">&times;</button>' +
      '<img id="lightbox-img" src="" alt="">' +
    '</div>';
  document.body.appendChild(overlay);

  // Cerrar al hacer click en overlay o botón
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.id === "lightbox-close") {
      closeLightbox();
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  function openLightbox(src, alt) {
    var img = document.getElementById("lightbox-img");
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Delegar clicks en imágenes activas de la galería
  document.addEventListener("click", function (e) {
    var target = e.target;
    if (
      target.tagName === "IMG" &&
      target.closest(".product-gallery") &&
      target.classList.contains("active")
    ) {
      openLightbox(target.src, target.alt);
    }
  });
})();

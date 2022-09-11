import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galaryMarkup = createMarckup(galleryItems);
console.log(galaryMarkup);

gallery.insertAdjacentHTML("beforeend", galaryMarkup);

gallery.addEventListener("click", onGalleryContainerClick);

function createMarckup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const galleryArray = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

galleryEl.insertAdjacentHTML("afterbegin", galleryArray.join(""));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
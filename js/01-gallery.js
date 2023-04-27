import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createElements = galleryItems
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');
gallery.innerHTML = createElements;

gallery.addEventListener('click', event => {
  event.preventDefault();
  const targetImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
     <img src="${targetImage}" width="800" height="600">
`);
  instance.show();
});
console.log(galleryItems);

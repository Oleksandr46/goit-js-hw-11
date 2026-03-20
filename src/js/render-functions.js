import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
            <a href="${image.largeImageURL}">
              <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
            </a>
            <p><b>likes</b>: ${image.likes}</p>
            <p><b>views</b>: ${image.views}</p>
            <p><b>comments</b>: ${image.comments}</p>
            <p><b>downloads</b>: ${image.downloads}</p>
          </li>`;
    })
    .join('');
  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}
export function showLoader() {
  refs.loader.classList.add('visible');
}
export function hideLoader() {
  refs.loader.classList.remove('visible');
}

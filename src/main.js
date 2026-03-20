import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { clearGallery, showLoader } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, hideLoader } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value;

  if (query.trim() === '') {
    iziToast.error({
      message: 'Please enter a search query',
    });
    return;
  }
  clearGallery();
  showLoader();
  console.log(query);
  e.target.reset();
});

import { galleryItems } from './gallery-items.js';
// Change code below this line
const onCreateGallery = () => {

    const galleryWrap = document.querySelector('.gallery');

    galleryItems.forEach(image => {
        galleryWrap.insertAdjacentHTML(
            'afterbegin', 
            '<div class="gallery__item"><a class="gallery__link"><img class="gallery__image"></a></div>');
        const img = galleryWrap.querySelector('img');
        const link = galleryWrap.querySelector('a');
        img.setAttribute('src', image.preview);
        img.setAttribute('alt', image.description);
        link.setAttribute('href', image.original);
    })
}

console.log(galleryItems);
onCreateGallery();
import { galleryItems } from './gallery-items.js';
// Change code below this line
const onCreateGallery = () => {

    const galleryWrap = document.querySelector('.gallery');

    galleryItems.forEach(image => {
        galleryWrap.insertAdjacentHTML(
            'afterbegin', 
            `<div class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></div>`);
    })

    galleryWrap.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'A') {
    
            const instance = basicLightbox.create(`
                <div class="modal">
                    <img src=${e.target.dataset.source}  width="800" height="600">
                </div>
            `)
            instance.show()

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                  instance.close();
                } 
        });

        }
    })
}

console.log(galleryItems);
onCreateGallery();
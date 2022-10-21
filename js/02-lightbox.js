import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryWrap.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {

        const instance = basicLightbox.create(`
            <img src="assets/images/image.png" width="800" height="600">
            `)

            instance.show()
    }
})

console.log(galleryItems);

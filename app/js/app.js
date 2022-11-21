import Swiper, {Autoplay, Pagination} from 'swiper';
import Modal from "@vrembem/modal";

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        modules: [Autoplay, Pagination],
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Modal({ autoInit: true });
})

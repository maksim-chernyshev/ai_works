import Swiper from "swiper";
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([Navigation, A11y])

export function initWorks() {
    const swiper = new Swiper(document.querySelector('[data-js="worksSwiper"]'), {
        spaceBetween: 16,
        watchSlidesVisibility: true,
        slidesPerView: 'auto',

        navigation: {
            nextEl: document.querySelector('[data-js="nextWork"]'),
            prevEl: document.querySelector('[data-js="prevWork"]')
        },

        a11y: {
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    })
}

import { tns } from "tiny-slider/src/tiny-slider"
import forms from "./modules/forms"
import modal from "./modules/modal"

window.addEventListener('DOMContentLoaded', () => {

    forms();
    modal();

    tns({
        container: '.my-slider',
        loop: true,
        items: 2,
        slideBy: 'page',
        nav: false,    
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: "#customize-controls",
        responsive: {
            640: {
                items: 3,
            },
            
            768: {
                items: 3,
            }
        }
    
      });
});
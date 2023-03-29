
export function showNav() {

        jQuery('.tab').hide();

        jQuery('.games__tab').click(function(){
            jQuery(this).addClass('active').siblings().removeClass('active');
            jQuery('.games__content').hide();
            jQuery(jQuery('.games__content')[jQuery(this).index()]).show();
        }).first().trigger('click');

}
export function scrollTo () {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}


export function mainSlider() {
    const slider = new Swiper('.slider', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 10,
        slidesToScroll: 1,
        loop: true,
        simulateTouch: true,
        autoplay: {
            delay: 1000,
        },
        speed: 2000,
        allowTouchMove: true,
        breakpoints: {
           991: {
               slidesPerView: 5.5,
               spaceBetween: 16
            },
           768: {
               slidesPerView: 4.5,
               spaceBetween: 10
           }

        }
    });
}

export function bonusesSlider() {
    const slider = new Swiper('.bonuses-slider', {
        direction: 'horizontal',
        slidesPerView: 2.2,
        spaceBetween: 8,
        slidesToScroll: 1,
        loop: true,
        simulateTouch: true,
        autoplay: false,
        speed: 3000,
        allowTouchMove: true,
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 3.2,
                spaceBetween: 8
            }
        }
    });
}

export function vendorsSlider() {
    const slider = new Swiper('.vendors-slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        slidesToScroll: 1,
        spaceBetween: 14,
        loop: true,
        simulateTouch: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        speed: 3000,
        allowTouchMove: true
    });
}

export function reviewsSlider() {
    const slider = new Swiper('.reviews-slider', {
        direction: 'horizontal',
        slidesPerView: 2,
        slidesToScroll: 1,
        spaceBetween: 10,
        loop: true,
        simulateTouch: true,
        autoplay: false,
        speed: 3000,
        allowTouchMove: true,
        breakpoints: {
            991: {
                slidesPerView: 4.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3.5,
                spaceBetween: 10
            },
            577: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });
}
export function addResume() {

    $('.main-form__input_hidden').click(function(){
        $(".main-form__input_hidden").click();
    });

    $('.main-form__input_hidden').change(function() {
        $('.main-form__selected-file').addClass('visible').text($('.main-form__input_hidden')[0].files[0].name);
    });



}
// export function scrollAnimation() {
//     const animItems = document.querySelector('.main-info__decor');
//
//     if (animItems.length > 0){
//         function  animOnScroll(){
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;
//
//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;
//
//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }
//
//                 if((scrollY >  animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_move');
//                 } else {
//                     animItem.classList.add('_move');
//                 }
//
//             }
//
//
//         }
//     }
//     function offset(el) {
//         var rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     animOnScroll();
//     console.log(animItems.length);
// }
// export function textSlice() {
//
//     var sliced = document.querySelector('.slider__text').slice(0,10);
//     if (sliced.length < text.length) {
//         sliced += '...';
//     }
// }


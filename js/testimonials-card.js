const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.testimonials__cards-prev-btn',
        prevEl: '.testimonials__cards-next-btn',
    },
});
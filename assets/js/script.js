
//JQの場合
//$(function(){
//on = addEventListener
//$('#head-btn').on('click', ()=>{
//$('body').toggleClass('is-openMenu')})
//});

//kv
new Swiper('#kv', {
    loop: true,
    effect: "fade",
    speed: 2000,
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});


//ディティールのスライダー
//サムネイル
window.onload = function () {
    const galleryThumbs = new Swiper('#gallery-thumbs', {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });

    const detailSlide = new Swiper('#detail-slide', {
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
};



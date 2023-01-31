let btnCloser = document.querySelector('.btn-closer');
let btnOpen = document.querySelector('.btn-open');
let swiperWrapp = document.querySelector('.swiper-wrapper');

btnOpen.addEventListener('click', function(){
   swiperWrapp.classList.remove('swiper-wrapper_height');
   btnOpen.classList.add ('display-none');
   btnCloser.classList.remove('display-none');
})
btnCloser.addEventListener('click', function(){
   swiperWrapp.classList.add('swiper-wrapper_height');
   btnCloser.classList.add ('display-none');
   btnOpen.classList.remove('display-none');
})
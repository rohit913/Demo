let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let videoBtn=document.querySelectorAll('.vid-btn');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  
}
searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', () =>{
        loginForm.classList.toggle('active');
  
  });
  formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
         document.querySelector('.controls .active').classList.remove('active');
         btn.classList.add('active');
         let src = btn.getAttribute('data-src')
         document.querySelector('#video-slider') .src = src
    });
});
var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    640:{
      sliderPerView: 1,
    },
    768:{
      sliderPerView: 2,
    },
    1024:{
      sliderPerView: 3,
    },
  },
});

  

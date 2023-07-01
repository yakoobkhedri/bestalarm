// swiper

var swiper = new Swiper(".banner", {
    slidesPerView: 1,
    spaceBetween: 29,
    autoplay:true,
});
var swiper2 = new Swiper(".brands", {
    slidesPerView: 2,
    spaceBetween: 29,
    autoplay:true,
    breakpoints:{
        576:{
            slidesPerView:3
        },
        768:{
            slidesPerView:4
        },
        992:{
            slidesPerView:5
        }
    }
});
// banner motion

let slider=document.querySelector('#banner .swiper-slide');
let sliderContent=document.querySelector('#banner .swiper-slide .row');
let sliderWidth=slider.offsetWidth;
let sliderHeight=slider.offsetHeight;
let sliderContentMovement=40;

    slider.addEventListener('mousemove',(event)=>{
        movement(event)
    })

function movement(event) {
    let mouseX=Math.floor(-(event.offsetX-(sliderWidth/2))*(sliderContentMovement/sliderWidth));
    let mouseY=Math.floor(-(event.offsetY-(sliderHeight/2))*(sliderContentMovement/sliderHeight));

    sliderContent.style.transform=`translate(${mouseX}px,${mouseY}px)`;
}
// tabs

let tabs=Array.from(document.querySelectorAll('.tabs span'));
let tabContent=Array.from(document.getElementsByClassName('tab-content'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        tabs.forEach((tabs) => {tabs.classList.remove('active')});
        tab.classList.add('active');
        let tabId = tab.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})
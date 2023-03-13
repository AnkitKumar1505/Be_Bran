const slider_carousel = document.querySelector(".certified_digital_marketing_image_carousel");
const slider_arrowIcon = document.querySelectorAll(".certified_digital_marketing_image_wrapper_icon i");
const firstIconImage = slider_carousel.querySelectorAll("img")[0];

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
// let firstImageWidth = firstIconImage.clientWidth + 15;
let scrollWidth = slider_carousel.scrollWidth - slider_carousel.clientWidth;

slider_arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImageWidth = firstIconImage.clientWidth + 15;
    slider_carousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
  })  
});

// auto slide
const autoSlide = () =>{

    if(slider_carousel.scrollLeft == (slider_carousel.scrollWidth - slider_carousel.clientWidth) )
    return;

positionDiff = Math.abs(positionDiff);
let firstImageWidth = firstIconImage.clientWidth + 15;
let valDifference = firstImageWidth - positionDiff;
if(slider_carousel.scrollLeft > prevScrollLeft) {
    return slider_carousel.scrollLeft += positionDiff > firstImageWidth / 5 ? valDifference : - positionDiff;
}
slider_carousel.scrollLeft -= positionDiff > firstImageWidth / 5 ? valDifference : - positionDiff;
}

// mouse down event
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider_carousel.scrollLeft;
}

// scrolling event
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider_carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
   slider_carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart=false;
    slider_carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slider_carousel.addEventListener("mousedown", dragStart);
slider_carousel.addEventListener("touchstart", dragStart);

slider_carousel.addEventListener("mousemove", dragging);
slider_carousel.addEventListener("touchmove", dragging);

slider_carousel.addEventListener("mouseup", dragStop);
slider_carousel.addEventListener("mouseleave", dragStop);

var count = 1;
setInterval(function(){
  document.getElementById('ImgSlider' + count).checked = true;
  count++;
  if(count > 4){
    count = 1;
  } 
}, 15000);



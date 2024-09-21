/* DOM */
let main = document.querySelector('#main');
let rectangle = document.querySelector(".rectangle");

rectangle.addEventListener('mousemove', (details) => {
  let rectangleLocation = rectangle.getBoundingClientRect();
  let clientLocation = details.clientX;
  let difference =  clientLocation - rectangleLocation.left;

  let red = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 100, difference);
  let green = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 100, 255, difference);


  if (difference < rectangleLocation.width/2) {
    gsap.to(rectangle, {
      backgroundColor: `rgb(${red},0,0)`,
      ease: Power4,
    });
  } else {
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,${green},0)`,
      ease: Power4,
    });
  }

})

window.addEventListener('mousemove', (details) => {

  let a = details.clientX;

  gsap.utils.mapRange(0,window.innerWidth,500,100,a);

  gsap.to(rectangle,{
    left: a + "px",
    ease: Power4
  })

  console.log(window.innerWidth);

})
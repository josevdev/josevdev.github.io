//fade out triangles
window.onscroll = function() {fadeOutTriangles()};
const triangles = document.querySelector('.triangles');

function fadeOutTriangles() {
  if(window.pageYOffset >= 335) {
    triangles.style.opacity = 0;
  }
  else {
    triangles.style.opacity = 1;
  }
}

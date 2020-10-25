const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-15.8329381, -48.0699353], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl:"/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// create and add marker
L
.marker([-15.8329381, -48.0699353], { icon })
.addTo(map);

/* image gallery */
function selectImage(event) {
  const button = event.currentTarget;

  // remove all classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  } 
  /* alternativa com arrowFunction
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  */

  // select image clicked
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // actualize the container of image
  imageContainer.src = image.src;

  // add the class active for button
  button.classList.add("active");
}
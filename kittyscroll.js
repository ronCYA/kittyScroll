const SCROLL_AMOUNT = 3;
const ARM_ROTATION_LOWEST = -90;
const ARM_ROTATION_HIGHEST = 20;

const catSVG = `<svg class="cat-lower-right" draggable="false" xmlns="http://www.w3.org/2000/svg" viewBox="-7 0 361.4 394.1"><path class="arm-left" d="M97 199c-28-14-50-42-51-42-3-4-6-7-8-12v-7c-2-10-12-8-16-2-5-2-11-3-15 2-3 4-1 8 1 12-5 1-9 4-8 10 1 4 5 6 9 6 0 3 2 5 5 7 5 2 10-2 13-6 16 20 38 48 61 53"/><path class="ear-right" d="M210 24c3-3 13-14 13-6 1 9-7 45-18 38-4-3-11-12-10-17 2-6 11-11 15-15z" fill="#231f20" stroke="#231f20" stroke-width=".3" stroke-miterlimit="10"/><path class="ear-left" d="M99 24l14 17c0 1-17 16-21 2-4-13-7-23-7-35 6 1 10 11 14 16z" fill="#231f20" stroke="#231f20" stroke-width=".3" stroke-miterlimit="10"/><path class="whisker-upper-right" d="M277 111c3-1 4-2 4-4 0-4-7-9-10-10-11-5-24-3-37-1h-2l-9 1-26 5-4 1-9 1v1l10-1 3-1 26-5 9-1h3c12-2 25-4 36 1 3 2 9 6 9 9 0 1-1 3-3 3v1z"/><path class="whiser-lower-right" d="M268 136h1c-1-12-26-22-31-23-8-3-22-8-30-6v1c8-2 23 3 30 6 3 1 29 11 30 22z"/><path class="whisker-upper-left" d="M91 98v-1c-23-9-44-12-61-10v1c17-2 38 1 61 10z"/><path class="whisker-lower-left" d="M22 118l1-1c-3-3-4-5-3-7 3-6 24-9 29-9 13 1 29 1 42 5l1-1c-14-4-30-4-43-5-5 0-27 2-30 10-1 2 0 5 3 8z"/><path class="brow-3" d="M187 46v-1c4-8 12-26 7-35-1-3-3-5-6-6v1l5 5c5 9-4 28-7 35v1h1z"/><path class="brow-2" d="M128 41l1-1c-5-6-6-17-7-25 0-3 1-13 3-14l1 1h1c-1-2-2-2-3-2-3 1-3 15-3 15 1 8 2 20 7 26z"/><path class="brow-1" d="M120 40l1-1-4-7c-4-9-10-21-7-27h1l-1-1h-1c-4 7 3 19 7 28l4 8z"/><path class="body" d="M354 330v-1l-5-2 4-1v-1l-6-2h6l1-1-5-2 3-1v-1-1l-5-1 2-1v-1l-3-1 2-2v-1h-2v-1h1v-1h-3l4-1v-2l-4 1 3-1v-2h-4 1v-1h-2l-3 1-1-2 6-2v-2l-6 1 2-1-1-1-5 1 5-3c1-1 0-2-1-2l-5 2 3-3-1-1-6 3h-1l6-5s0-2-1-1l-7 3 4-5-1-1-3 2 1-1c0-1-1-2-2-1l-1 1v-1l-1-1-2 3 1-4-1-1-4 3 2-4h-2l-1 3v-3-2h-2l-3 4 1-5-1-1-6 7c2-2 2-5 2-7l-1-1-3 4v-1l-1-1-2 2v-1h-1-1l1-3h-1l-4 6 1-3c0-1-1-2-2-1l-1 3v-3h-1v1l-3 5v-1-1l1-1v-5h-2l-2 4-1-3-1 1 1 3h-1v-1h-1v2l-1-2h-1v1l-2-2-2 1v4l-1-2h-1l-2-2h-1l1 5-1-1v-1h-1v2c-1 1-1 0-1-1v-3h-1l-2 6-2-2h-1v-4h-1l-2 4h-1l-1 1v1l-1 1v2l-1-3-1 1v4l-1-3h-2l2 4 1 4h-1c1-2 0-3-1-4h-1l-2-2h-1v2l-1 1 2 5-1 1-4-4h-1l5 7-2 1-3-4h1l-3-5 1-1-1-1h-1l2-1 3 1v-1l-2-1 5-4-1-1-5 3-1-1 2-1-1-1-1 1c1-1 0-1-1-1v1l-1-1 6-7-1-1-5 4-1-1-1 1h-1l7-7c1-1 0-1-1-1l-4 3 1-2h-1l-2 3-1 1 1-1c0-2 5-7 6-9l-1-1-4 3h-1v1h-1l1-1-1-1 5-7c1 0 0-1 0 0l-6 4 1-1 1-3v-1l4-4c1-1 0-1-1-1l-5 4v-2l2-3 1-2c1 0 0-1 0 0l-1 1h-1v1l-2 1-1-2h1c0 1 1 0 0 0l-1-1 1-2 2-2-1-1-1 1h-1l-1 1v-1l-1-1 1-4 2-1v-1l1-2 1-1-4-6 1-1v-1-1h-1 2l1-1-4-5 1-1h-1-1l-2-1 4-6v-1l-1 1h-1l-2-2 2-3c1-1 0-2-1-1l-2 3-2-2 1-1-1-1 2-2-1-1-1 2-3-1 2-5-1-1 1-3h-1l-3 2h-1l3-8-1-1-5 6 3-10h-1l-3 3 2-7-1-1v1l-1-1 1-4c1-1 0-1-1-1l-1 2 3-6-1-1-4 3v-3h-1v1h-1l-1 1v-2l2-5-1-1-1 1-3 2 2-4 1-5h-1-1-1v1h-2l1-4v-1-1h-1v2l-1-3v-1l1-4h-1l-1 3-3 1v-1l2-4h-1l-1 1v-1-2l-1-1 1-2h-1l-1 1h-1v-1l1-2c1 0 0-1 0 0v-1-1l4-2 3 4 1 5h1v-3c1 1 2 0 1-1l-2-3-1-2 4 2 1 3 1-1 3 1c1 1 2-1 1-2l-3-2 2 1 2-2-4-4h1a30 30 0 015 6v-1l-2-4-2-3v1l4 4-1-2c1 0 2-1 1-2h2v-1l1 1h2v-1l1 1 1-1-2-2v-1l-2-3v-1 1h5l2 2v-1l-1-1-1-1-1-3v-1l-3-3v-1l7 5h1l-4-4 5 2v-1l-7-6 1-2 1 1 4 2c0 1 0 0 0 0l-1-1 2-1v-1l-1-1v-1l-2-2 3 1 8 1v-1l-5-2-1-1h1l1-1-7-3 4 1v-1l-1-1 1-1 4-1v-1h1v-1l-5-1 3-1v-1h-3l1-1v-1l2-2v-1h-3l1-1 2-1v-1h-4l2-2v-1l-5 2v-1l5-2-1-1-3 1-1 1-1-3 1-1 4-1-1-1-3 1-1 1-1-2 5-2v-2l2-2-1-1-6 3c3-1 5-5 6-5l-1-1-6 5v-1l5-5-1-1-3 2 1-3v-1h-1l2-1-1-1-6 4-1-1 5-4s0-1 0 0l-4 4h-1v-1-1l1-1 3-3-1-1 1-1-5 4 2-3h-1l3-2-1-1-2 3h-1l1-3v-1l-2 2 1-2 1-1-1-1-1 2v-1l-1-1 3-3v-1l-4 4v-1l-1-1 2-1 1-1v-1l-2 1h-1l-5 1 1-2 3-2c0-1 0-2-1-1l-1 1v-1-1l-5 2 1-2-2-1-1 3v-2l1-1 4-2v-1h-1l-3 2-1 1v-1l3-3-1-1-5 3h-1l1-2 3-3v-1h-1l-2 2v-1l-1-1-1 3 1-2-1-1v-3s0-1 0 0h-1l-2 2v-1l1-2v-1h-1l-2 1a275 275 0 00-1-3l-1 5h-1v-4l1-1v-1h-1-1v1l-2 1v-3l-1-1v-1l-1 1-2 1v-2-1h-2l-2 2v-1-1-1h-1-1 1l-1-1-2 3-1-3 1-4h-1l-1 3v1l-1 1-1 2h-1v-1l3-6h-1l-3 5v-2l1-4-1-1-1 5-1-1v-1-1l1-2-1-1-4 8-1-2 1-3v-1h-1v1l-1 1s-1 0 0 0v2l-1 2-1 1 1-7h-1l-1 4-1-1h-1l1 4-2 1v-1-2-5h-1v3h-1v3l-1-2v-5h-1v10h-1l-1-4v-4h-1v2l-1 1v5l-3-8-1 1 1 3 2 4-2-3-1-2h-1l1 1h-1l-1-4-1 1 1 3h-1l-1-2h-1v2l1 3-1-2-1-1-1-3-1 1 1 1-1 1 1 1v2l-2-1h-1l1 3h-1l-1-1v-1h-1l-2-4-1 1 2 2-1 1 1 4-1-1-3-7-1 1 2 4-1 1 1 1 1 2h-1l-2-3h-1 1-1l-1-1h-1l1 4-2-3-1 1 1 1v3l-2-2-1 1-1-1-1 1 1 1 1 2v1l-2-2-1-2h-1v1l-1 1-1-1c-1-1-1 0-1 1l3 1v1l-3-2-1 1v-1h-1l1 3 1 1-3-1h-1v-1c-1-1-1 0-1 1h1v4c-1 0-2 0-1 1l-3-3h-1l-1-1h-1l1 4v-1l-2-1v1l1 2 1 2h-1v-2l-1 1h-1l-2-1v1l4 3v1l-3-2-1-1h-1l-1 1 2 2 1 2-6-3c-1-1-1 0-1 1h1v1l1 1h-1l-2-1-1 1v1l1 1-5-2-1 1 4 5 1 1h-1l-3-2v2l1 1-3-1v1l1 1-3-2-1 1 2 2c-1 0-1 0 0 0l1 1v1h-2v-1h-1-1c-1-1-1 0-1 1l2 1v1l1 1h0l-5-2h-1v1l1 1 1 1 2 2-1 1-3-2-1 1h-1l3 2 1 1-1 1h-1l-1-1h-1l-3-2-1 1 4 4v1l-2-1v1l1 1-1-1-2-2-1 1h1l1 1v1l1 1h-1l-4-4v1l3 3 1 2v1l-1-1-2-2-1 1v2l1 1 2 1h-2l-2-2c-1-1-2 0-1 1l2 2 2 2-3 1v-1l-1 1h-1v1l3 1v1h-3l-2-2h-1l1 2-3-1v1l3 1h1l2 2-2-1h-1v1 1h1l2 3h-1v1l2 1 1 1h-1l-1-1-2-2c-1 0-2 0-1 1l2 2-1 1v1h3l-4 1v2h1l2 2-7-1v2l7 1 4 1v1h-1-5-1v1h1l-1 1-1 1 6 1 1 1h-1l-3-1v1l3 1 3 1 2 2-8-2-1 1 3 2h1l1 1h-4v1c2 2 5 3 8 3v2l4 3-3 1v1l4-1v1h-1l-1 1v1l1-1h6l-2 1v1l2 1-2 2c-1 1 0 1 1 1l3-3 1 1-4 4 1 1 5-2h1l-1 1 1 1h3l-2 6c-1 1 0 1 1 1l3-5 2-1-2 4s0 1 0 0h1v1h1l1-1 1-1-1 3h1l1-1v1h3l-1 2 1 1v-1 2l-3-2v1l2 3v5l1 2h-1l-1 1 1 3h-2v1l-1-1h-1v0l-1 1 3 3 1 1h-1v1l1 1 1 1h-2l-1-1-1 1 1 1-2-2h-1v-1l-1 1 3 3 1 4h-1l-2-1-2-2h-1l3 3 2 2-6-2-1 1 2 3-1-1v6h-1-1l2 4 1 3-1-2c-1-1-2 0-1 1l1 2h-2l-1-1c-1 0-2 0-1 1l1 3v1h1l1 2 2 2-3 1-3-3-1 1 2 4h-5v1l4 3 1 1h1v1h-2l-4-4c-1-1-2 0-1 1l3 4v1l-6 2v1l4 4-1 1v1h-1v1l1 1v1l1 1 1 3h-1v1h2l1 2h-1-1v1l-2 1v-2l-2 1 1 1v2l2 3h-2v1l3 1 1 1-3 2-3-3-1 1 2 3h-1v2h2l3 3-1 1v-1l-1 1-1-2-2 1 2 2v1l-4 4v1h1l-2 1 1 1h3l-4 4v1l3 1-3 3-2-3-1 1v5 1h1v1l-5 5v1l5-2 1 1-7 7 1 1 6-6v1l-4 5v1l4-3-6 10c-1 1 0 2 1 1l5-6-3 6v1l-1 2-3 3v1l2-1 1 1h1l-1 2c-1 1 0 1 1 1h1l-3 4h-1v1c-1 2-3 3-3 5 1 2 2 2 3 2l-2 3v1l-1 1c-1 1 0 2 1 1l2-2-2 5v1l-3 3 1 1 3-2-2 3-3 1v1h1l-1 1 1 1h2l-1 3v1c-1 1 0 1 1 1l-2 2 1 1h2l1-1-1 1-1 1v1l-2 3 1 1 1-1v1l-8 8 1 1h5l-2 5 1 1 6-4-2 4-1 1-3 8 1 1 5-3-2 5 5-1v2l1 1 3-3v1h-1l1 1v2l-2 6h1l2-1-1 1 1 1 1-2-1 2c-3 0-5-1-3-3h-2c-1 2-1 8 4 6 2 0 3-2 4-5l2 6c2 1 3 0 3-3l1 1v1h2l2-3 1 2h1l3 2v2h1l2-2h4l2-2h1l2 7h1l1-3h2l1-1 2-1h1c3 0 3-2 3-3l1 2h1l1-2h1v-1l-1-2h1l2 5v2l2-1h1v-1a3 3 0 002-1l1-2 2 1 2-1h1v1l2 3h1l1-3 1 4h1l1-2 1 2 2 1 2-1v1h1c2-2 2-4 3-7h1v3l1 2h1v-1h1l3-3c0 3 1 6 3 6s3-3 3-6v-1h1v-1l1 7h1l1-1 1-1v-1l3-3v2l-8 6 1 1 8-6c1 4 2 7 5 5l1-4 3-2v1h1v-1l1 1h1v-1-3 1l1 1 1 2v1l3 4h1l1-5 2 3h1v-3c1 1 1 2 3 2h2v-1l3 2 2 2 4-3 1-1v-1l1-2v2h1l1-1 1 1 1-1v6h1v-3l3 1c3 0 4-3 4-7l1-1 1 4h1l2 1 3-2 1-1v-3-1-1l1-3c1 2 2 4 4 4 3 1 2-1 2-4l-1-8 5 6 1-1-4-7 5 2h1l-2-4 3 3h1l-1-2 1-1-2-4 2-1 1 1 1-1h-1l3-1-1-1h-3l-1-1 1-1 3-3v-1l-2 1 2-2v1l1-1-2-3h2l1 1h1l-2-3v-1l1 1h1l2 1c0 1 0 0 0 0l-1-1v-1c1 0 2 0 1-1v-1l1-1v-1h3v-1l-1-1-1-3 3 2c1 1 1 0 1-1l-1-1v-2l3 1h1a20 20 0 00-2-4h2l1 2 1-1h-1l1-1-3-4v-1l1 1h1l1 1h1l4 1 1-1-1-1v-2h1l1-1-2-2 2 1c1 0 2-1 2-3l3 2 1-1-4-2v-1l1-1-1-1 4 3h1l-1-1h1v-1-1-2l2 3h1l3 4h1l-3-7 1 2c1 0 2 0 1-1v-4l2 5h1l1-1 1 2h1l2-8v5h1l2-1h2v1l1 1 2-3c0 1 0 2 1 1v1h5l-1 1h-1v1 1l5-1-4 2v2l8-2-4 3v1h2l3 1-4 1v2h2l-3 2v1l7-1-4 2v1h7l-1 1-3 1v2l5-1-4 3v1h4l-1 1-2 1v1l7-1-1 1-3 3v1h2l1-1h2l-1 1-2 1 1 1h1l3-1v2l-1 2h-1l-1 1v1l1-1v2l1 1h1v1h1l1-2h1v1l-1 2 1 1 1-1 1 3h-1c0 1 0 2 1 1l1-1 1 1h1v-2l1 3h1v-2-1l1-3v3h1v-1l1 1 1-1-1-2h1c1 1 1 0 1-1v-1l4 2 1-1-2-2-1-1v-1l4 2v-1l-4-5 4 2 1-1-3-4v-2l5 2 1-1-2-2h2v-1l-1-1 3 1v-2l-5-3 5 1v-1l-5-2-1-1h6zM101 145h-1l1-1v1l1 1-1-1zm94-5zm49 165v-1l1-1 1 2-2 1-1-1h1zm-2-6l2 3-1 1-2-3 1-1z"/></svg>`;

const catCSS = {
  position: 'fixed',
  maxWidth: '10em',
  bottom: 0,
  right: 0,
  zIndex: 2147483647,
  color: '#231f20',
  cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewport='0 0 100 100' style='fill:black;font-size:1.8em;'><text y='80%'>🤚</text></svg>") 16 0, auto`
}

const armCSS = {
  transformOrigin: '100% 85%',
  transformBox: 'fill-box'
}

const catHeight = ()=> cat.height.baseVal.value;

const moveArm = function(e) {
  const rotation = ARM_ROTATION_LOWEST + ((ARM_ROTATION_HIGHEST - ARM_ROTATION_LOWEST) / catHeight() * e.offsetY);
  arm.style.transform = `rotate(${rotation}deg) translateX(${2 / catHeight() * e.offsetY}em)`;
}

const scrollPage = function(e) {
  window.scrollBy({ top: e.movementY * SCROLL_AMOUNT });
}

if (!document.querySelector('.cat-lower-right')) {
  document.querySelector('body').insertAdjacentHTML('beforeend', catSVG);
}

const cat = document.querySelector('.cat-lower-right');
const arm = cat.querySelector('.arm-left');

Object.entries(catCSS).forEach(rule => cat.style[rule[0]] = rule[1]);
Object.entries(armCSS).forEach(rule => arm.style[rule[0]] = rule[1]);

let mouseDown = false;

const mouseDownFalse = ()=> mouseDown = false;
const mouseDownTrue = ()=> mouseDown = true;
const mouseMove = e => {
  moveArm(e);
  if (mouseDown) scrollPage(e);
}

cat.addEventListener('mousedown', mouseDownTrue);
cat.addEventListener('mouseup', mouseDownFalse);
cat.addEventListener('mouseleave', mouseDownFalse);
cat.addEventListener('mousemove', mouseMove);

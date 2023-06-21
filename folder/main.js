console.log ('Hello!');
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

function display (pictureUrl) {
  displayedImage.setAttribute('src', pictureUrl);
}

let isDark = false;
function show () {
  if(isDark === false) {
    overlay.style.background = 'rgba(0,0,0,0.3)';
    btn.textContent = 'светлее';
    isDark = true;
  }
  else {
    overlay.style.background = 'rgba(0,0,0,0)';
    btn.textContent = 'темнее';
    isDark = false;
  }
}

/* Looping through images */

  for (let a=1; a < 6; a++) {
    const b = document.createElement('img');
    const d = String(a);
    const c = 'images/pic'+d+'.jpg';
    console.log(c);
    b.setAttribute('src', c);
    b.addEventListener('click', function(){
      display(c);
    });

    thumbBar.appendChild(b);
  }
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', show);
btn.textContent = 'темнее';



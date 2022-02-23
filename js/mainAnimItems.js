import { offset } from './offSet_function.js';

const allAnimItems = document.querySelectorAll('.anim');

window.addEventListener('scroll', animate);

function animate() {
  allAnimItems.forEach((el, i) => {
    const animItem = allAnimItems[i];
    const animHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStartCo = 2;

    let animItemStartPoint = window.innerHeight - animHeight / animStartCo;

    if (animHeight > window.innerHeight) {
      animItemStartPoint =
        window.innerHeight - window.innerHeight / animStartCo;
    }

    if (
      scrollY > animItemOffset - animItemStartPoint &&
      screenY < animItemOffset + animHeight
    ) {
      animItem.classList.add('active');
    }
  });
}

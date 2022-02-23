const mainLogo = document.querySelector('.main-logo');
const welcomeDescr = document.querySelector('.welcome-description');
const advantages = document.querySelectorAll('.advantage');

window.addEventListener('load', () => {
  mainLogo.style.opacity = '1';
  mainLogo.style.transform = 'scale(1)';

  setTimeout(() => {
    welcomeDescr.style.opacity = '1';
    welcomeDescr.style.transform = 'translate(0)';
  }, 500);

  setTimeout(() => {
    advantages[0].style.opacity = '1';
    advantages[0].style.transform = 'rotateY(0)';
  }, 1000);

  setTimeout(() => {
    advantages[1].style.opacity = '1';
    advantages[1].style.transform = 'translate(0)';
    advantages[2].style.transform = 'translate(-150%)';
  }, 1200);

  setTimeout(() => {
    advantages[2].style.opacity = '1';
    advantages[2].style.transform = 'translate(0)';
  }, 1400);
});

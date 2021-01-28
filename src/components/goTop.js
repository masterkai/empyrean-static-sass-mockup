import {fadeIn,fadeOut} from "./fadeInOut";

export default function goTop() {
  const GOTOP = document.querySelector('#GOTOP')
  window.addEventListener('scroll',()=>{
    // console.log('scroll');
    const windowScrollTop = window.scrollY
    if(windowScrollTop>120){
      fadeIn(GOTOP)
      GOTOP.classList.add('active')
    }else {
      fadeOut(GOTOP)
      GOTOP.classList.remove('active')
    }
  })
}
export default function userDropdownPosition() {
  let box = document.querySelector('.Empy-dropdown-menu');
  let width = box.offsetWidth;
  // console.log(width);
  box.style.left = `-${width-36}px`
}
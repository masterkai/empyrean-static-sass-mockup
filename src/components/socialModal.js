export default function socialModal() {
  const socialShareModal = document.getElementById('socialShareModal')
  const socialBtn = document.getElementById('socialBtn')
  const socialModalClose = document.querySelector('.Empy-modal-header .icon_times-light')
  socialModalClose.addEventListener('click',()=>{
    socialShareModal.classList.remove('show')
  })
  socialBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(socialShareModal);
    socialShareModal.classList.add('show')
  })
}
export default function subscribeModal () {
  const subscriberModal = document.getElementById('subscriber')
  const subscriberCancel = document.querySelector('.cancelSubscribe')
  const subscriberButtonInModal = document.querySelector('.subscribeButton')
  subscriberCancel.addEventListener('click', ()=>{
    subscriberModal.classList.remove('show')
  })
  subscriberButtonInModal.addEventListener('click', ()=>{
    subscriberModal.classList.remove('show')
  })
  const subscriberButton = document.querySelector('.emptySpace--subscriber button')
  subscriberButton.addEventListener('click',()=>{
    subscriberModal.classList.add('show')
  })
}
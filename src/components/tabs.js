const state = {
  last:0
}

export default function Tabs() {
  const tabs = document.querySelectorAll('#NewProductInfo .EmpyTabs-flexContainer .EmpyTab')
  const Panels = document.querySelectorAll('#NewProductInfo .EmpyPanels-flexContainer .EmpyPanel')
  // console.log(tabs);
  // console.log(Panels);
  tabs.forEach((item,index)=>{
    item.addEventListener('click',()=>{
      Panels[state.last].style.display= 'none'
      Panels[index].style.display= 'block'
      state.last = index
      console.log(item.classList);
    })
  })
  // NewProductInfo.forEach((item,index)=>{
  //   console.log(item);
  // })
}
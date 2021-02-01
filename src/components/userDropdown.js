import userDropdownPosition from "./userDropdownPosition";

export default function userDropdown(elementID) {
  const UserDropdown = document.getElementById(elementID)
  UserDropdown.addEventListener('click', function (e) {
    // do something...

    const dropdownMenu = UserDropdown.parentElement.childNodes[3]
    dropdownMenu.classList.add('active')
    userDropdownPosition()
    window.addEventListener('click', (e) => {

        // console.log('target',e.target);
        // console.log(EmpyDropdownMenu[0].classList.contains('Empy-dropdown-menu'));
        // console.log(e.target.classList.contains('Empy-dropdown-menu'));
        if (e.target.classList.contains('dropdown-item')) {
          dropdownMenu.classList.remove('active')
        }
        if (e.target.classList.contains('iconfont') || e.target.classList.contains('active') || e.target.classList.contains('EmpyButton')) {
          return
        }
        if (e.target.classList.contains('Empy-dropdown-menu')) {
          return
        } else {
          // alert("在区域外");
          dropdownMenu.classList.remove('active')
        }
      }
    )
  })
}


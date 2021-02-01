import "./css/styles.css";
import "./css/styles.scss";
import swiper from "./components/carousell";
import NewProductInfoTabs from './components/tabs'
import NewReleaseTabs from './components/tabs'
import socialModal from './components/socialModal'
import goTop from "./components/goTop";
import userDropdown from "./components/userDropdown";
import sideMenu from "./components/sideMenu";
import nav from "./components/nav";
import subscribeModal from './components/subscribeModal'

NewProductInfoTabs('#NewProductInfo')
NewReleaseTabs('#NewsRelease')
socialModal()
goTop()
subscribeModal()
userDropdown('UserDropdown')



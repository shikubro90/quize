import Account from "./Account"
import Classes from "../styles/Nav.module.css"
import logo from "../assets/images/logo-bg.png"
const Nav= ()=>{
    return(
        <nav className={Classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={Classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account/>
    </nav>
    )
}
export default Nav
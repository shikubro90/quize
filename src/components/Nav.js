import Account from "./Account"
import Classes from "../styles/Nav.module.css"
import logo from "../assets/images/logo-bg.png"
import {NavLink} from "react-router-dom"
const Nav= ()=>{
    return(
        <nav className={Classes.nav}>
      <ul>
        <li>
          <NavLink to="/" className={Classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </NavLink>
        </li>
      </ul>
      <Account/>
    </nav>
    )
}
export default Nav
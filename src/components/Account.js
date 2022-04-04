import Classes from "../styles/Account.module.css"
import {NavLink} from "react-router-dom"
import { useAuth } from "../contex/AuthContext"
const Account = ()=>{

  const {currentUser, logOut} = useAuth()
  
    return(
      <div className={Classes.account}>
        {
          currentUser ? (
            <>
          <span>{currentUser.dispalyName}</span>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="material-icons-outlined" title="Logout" onClick={logOut}> logout </span>
        </>
          ) : (
            <>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="login">Login</NavLink>
            </>
          )
        }
        
      </div>
    )
}

export default Account

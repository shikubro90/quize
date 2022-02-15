import Classes from "../styles/Account.module.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contex/AuthContext"
const Account = ()=>{

  const {currentUser, logOut} = useAuth()

    return(
      <div className={Classes.account}>
        {
          currentUser ? (
            <>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="material-icons-outlined" title="Logout" onClick={logOut}> logout </span>
        </>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="login">Login</Link>
            </>
          )
        }
        
      </div>
    )
}

export default Account

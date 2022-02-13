import Classes from "../styles/Video.module.css"
import image from "../assets/images/3.jpg"
import { Link } from "react-router-dom"

const Video = ()=>{
    return(
        <div className={Classes.video}>

            <Link to="/quize">
            
            <img src={image} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={Classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
            </Link>
        </div>
    )
}

export default Video
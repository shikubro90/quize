import Classes from "../styles/Video.module.css"
import image from "../assets/images/3.jpg"
const Video = ()=>{
    return(
        <div class="video" className={Classes.video}>

            <a href="quiz.html">
            
            <img src={image} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={Classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
            </a>
        </div>
    )
}

export default Video
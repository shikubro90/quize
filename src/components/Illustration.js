import Classes from "../styles/Illustration.module.css"
import image from "../assets/images/success.png"
const Illustration = ()=>{
    return(
        <div className={Classes.illustration}>
            <img src={image} alt="Signup" />
        </div>
    )
}

export default Illustration
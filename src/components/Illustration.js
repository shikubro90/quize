import Classes from "../styles/Illustration.module.css"

const Illustration = ({image})=>{
    return(
        <div className={Classes.illustration}>
            <img src={image} alt="Signup" />
        </div>
    )
}

export default Illustration
import Classes from "../styles/Button.module.css"

const Button = ({ className, children})=>{
    return(
        <button className={`${className} ${Classes.button}`}>
            {children}
        </button>
    )
}

export default Button
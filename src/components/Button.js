import Classes from "../styles/Button.module.css"

const Button = ({ className,children})=>{
    return(
        <div className={`${className} ${Classes.button}`}>
            {children}
        </div>
    )
}

export default Button
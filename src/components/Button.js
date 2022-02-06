import Classes from "../styles/Button.module.css"

const Button = ({children})=>{
    return(
        <div className={Classes.button}>
            <span>{children}</span>
        </div>
    )
}

export default Button
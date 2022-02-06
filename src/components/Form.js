import Classes from "../styles/Form.module.css"
const Form = ({children ,...rest})=>{
    return(
        <form className={`${Classes.form}`} {...rest}>

            {children}

        </form>
    )
}
export default Form
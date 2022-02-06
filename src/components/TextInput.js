import Classes from "../styles/TextInput.module.css"
const TextInput = ({icon, ...rest}) =>{
    return(
        <div className={Classes.textInput}>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}

export default TextInput
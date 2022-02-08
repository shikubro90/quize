const CheackBox = ({ className,text,...rest}) =>{
    return(
        <label className={className}>
            <input {...rest} />
            <span>{text}</span>
        </label>
    )
}

export default CheackBox
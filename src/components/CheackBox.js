const CheackBox = ({...rest}) =>{
    return(
        <label>
            <input {...rest} />
            <span> I agree to the Terms &amp; Conditions</span>
        </label>
    )
}

export default CheackBox
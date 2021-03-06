import Form from "./Form.js"
import TextInput from "./TextInput"
import CheackBox from "./CheackBox"
import Button from "./Button"
import classes from "./../styles/Form.module.css"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import {useAuth} from "../contex/AuthContext"


const SignupForm = () =>{



    const history = useHistory();
    const [username , setusername] = useState("");
    const [useremail, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const {signup} = useAuth()

    async function handleSubmit(e){

        e.preventDefault();

        if(password !== confirmpassword){
            return setError("Confirm password dosen't match");
        }else{
            try{
                setLoading(true)
                await signup(useremail, password, username)
                history.push("/")
            }catch(e){
                setLoading(false)
                setError("Failed to create an account")
            }

        }

    }


    return(
        <Form className={`${classes.form}`} onSubmit={handleSubmit}>

        <TextInput 
        type="text" 
        placeholder="Enter  Name"  
        icon="person" 
        required 
        onChange={(e)=> setusername(e.target.value)} 
        value={username}/>

        <TextInput type="email" 
        placeholder="Enter Email"  
        icon="alternate_email" 
        required 
        onChange={(e)=> setemail(e.target.value)} 
        value={useremail} />

        <TextInput type="password" 
        placeholder="Enter password"  
        icon="lock" 
        required onChange={(e)=> 
        setpassword(e.target.value)} 
        value={password}/>
        
        <TextInput 
        type="password" 
        placeholder="Confrim password"  
        icon="lock_clock" required  
        onChange={(e)=> setconfirmpassword(e.target.value)} 
        value={confirmpassword} />

        <CheackBox 
        type="checkbox" 
        text={" I agree to the Terms &amp; Conditions"} 
        required 
        onChange={(e)=> setAgree(e.target.value)} 
        value={agree} />

        <Button disabled={loading} type={"submit"}>
            <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}
        
        <div className="info">
          Already have an account? <Link to="login">Login</Link> instead.
        </div>

    </Form>

    )

}
export default SignupForm
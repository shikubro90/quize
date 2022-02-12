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
    const [username , setusername] = useState();
    const [useremail, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [agree, setAgree] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth()

    async function handleSubmit(e){

        e.preventDefault();

        if(password !== confirmpassword){
            return setError("Confirm password dosen't match");
        }else{
            try{
                setLoading(true)
                await signup(username, useremail, password)
                history.push("/")
            }catch(e){
                console.log(e)
                loading(false)
                setError("Not signup")
            }

        }

    }


    return(
        <Form className={`${classes.form}`} action="post" onSubmit={handleSubmit}>

        <TextInput type="text" placeholder="Enter  Name"  icon="person" required />

        <TextInput type="email" placeholder="Enter Email"  icon="alternate_email"  required/>

        <TextInput type="password" placeholder="Enter password"  icon="lock" required />
        
        <TextInput type="password" placeholder="Confrim password"  icon="lock_clock" required />

        <CheackBox type="checkbox" text={"I agree to the Terms &amp; Conditions"}  required/>

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
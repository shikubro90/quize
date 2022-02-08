import Illustration from "../Illustration"
import Form from "../Form.js"
import TextInput from "../TextInput"
import CheackBox from "../CheackBox"
import Button from "../Button"
import classes from "../../styles/Form.module.css"

const Signup = ()=>{
    return(

        <>

            <h1>Create an account</h1>

                <div class="column">
                    
                    <Illustration/>
                    
                    <Form className={`${classes.form}`}>

                        <TextInput type="text" Placeholder="Enter  Name"  icon="person" />

                        <TextInput type="email" Placeholder="Enter Email"  icon="alternate_email" />

                        <TextInput type="password" Placeholder="Enter password"  icon="lock" />
                        
                        <TextInput type="password" Placeholder="Confrim password"  icon="lock_clock" />

                        <CheackBox type="checkbox" text={"I agree to the Terms &amp; Conditions"} />

                        <Button>
                            <span>Submit Now</span>
                        </Button>
                        
                        <div className="info">
                          Already have an account? <a href="login">Login</a> instead.
                        </div>

                    </Form>

                </div>
        
        </>

    )
}

export default Signup
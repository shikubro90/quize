import Form from "../Form"
import Illustration from "../Illustration"
import TextInput from "../TextInput"
import classes from "../../styles/Form.module.css"
import Button from "../Button"

const Login = ()=>{

    return(
        <>
            <h1>Login to your account</h1>

            <div className="column">
                
                <Illustration/>

                <Form className={`${classes.form}`}>

                    <TextInput type="email" placeholder="User Name" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter Password" icon="lock"/>
                    
                    <Button>Submit Now</Button>

                </Form>
                
            </div>
        </>
    )
}

export default Login
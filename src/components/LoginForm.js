import Form from "./Form"
import TextInput from "./TextInput"
import Button from "./Button"
import {useAuth} from "../contex/AuthContext"
import { useState } from "react"
import {useHistory} from "react-router-dom"

const LoginForm = ()=>{

    const history = useHistory()
    const {signin} = useAuth()
    const [userEmail, setEmail] = useState()
    const [userPass, setpassword] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    async function handleSubmit(e){ 
        
        e.preventDefault();

        try{
            setError("")
            await signin(userEmail, userPass)
            setLoading(false)
            history.push("/")

        }catch(err){
            console.log(err)
            setLoading(false)
            setError("Signin failed")
        }

    }

    return(

        <Form style={{height: "300px"}} onSubmit={handleSubmit}>

        <TextInput 
        type="email" 
        placeholder="User Name" 
        icon="alternate_email"
        onChange={(e)=> setEmail(e.target.value) }
        value={userEmail}
        />

        <TextInput 
        type="password" 
        placeholder="Enter Password" 
        icon="lock"
        onChange={(e)=>setpassword(e.target.value)}
        />

        {error && <p>{error}</p>}


        <Button disabled={loading} type={"submit"} > 
            <span>Submit Now</span>
        </Button>

    </Form>
    )
}

export default LoginForm
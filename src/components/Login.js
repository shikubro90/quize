import Illustration from "./Illustration"

const Login = (props,{image})=>{

    console.log(props);
    console.log(image);

    return(
        <>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration/>
            </div>
        </>
    )
}

export default Login
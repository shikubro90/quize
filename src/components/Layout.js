import Classes from "../styles/Layout.module.css"
import Nav from "./Nav"
const Layout = ({children})=>{
    return(
        <>
            <Nav/>
            <main className={Classes.main}>
                <div className={Classes.container}>
 
                    {children}

                </div>
            </main>
        </>
    )
}

export default Layout
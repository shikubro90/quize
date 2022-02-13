import Classes from "../styles/Layout.module.css"
import Nav from "./Nav"
const Layout = ({children})=>{
    return(
        <div>
            <Nav/>
            <main className={Classes.main}>
                <div className={Classes.container}>
 
                    {children}

                </div>
            </main>
        </div>
    )
}

export default Layout
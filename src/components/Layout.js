import Classes from "../styles/Layout.module.css"

const Layout = ({children})=>{
    return(
        <>
            <main className={Classes.main}>
                <div className={Classes.container}>
 
                    {children}

                </div>
            </main>
        </>
    )
}

export default Layout
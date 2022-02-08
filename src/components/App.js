import "../styles/App.css"
import Layout from "./Layout";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
import Nav from "./Nav";
import Quize from "./pages/Quize";

function App() {
  return (
    <Layout>
      
      <Nav/>

      {/* <Home/>
      
      <Signup/>

      <Login /> */}

      <Quize/>
      

    </Layout>
  );
}

export default App;

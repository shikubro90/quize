import "../styles/App.css"
import Layout from "./Layout";
import Login from "./Login";
import Home from "./pages/Home";
import Signup from "./Signup";
import image from "../assets/images/success.png"
function App() {
  return (
    <Layout>
      
      <Home/>
      <Signup/>

      <Login image={image} />
      

    </Layout>
  );
}

export default App;

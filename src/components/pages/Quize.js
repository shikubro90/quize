import Answers from "../Answers"
import Progressbar from "../Progressbar"
import Miniplayer from "../Miniplayer"

const Quize = () =>{
    return(
        <>
        
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>

        <Answers/>
        <Progressbar/>
        <Miniplayer/>

        </>
    )
}

export default Quize
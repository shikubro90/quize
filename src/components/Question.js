import Answers from "./Answers"
import classes from "../styles/Question.module.css"
const Question = () =>{
    return(
        <>
            <div className={classes.question}>

                <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
                </div>


                <Answers/>
                
                {/* <div class="answers">
                <label class="answer" for="option1"> A New Hope 1 </label>
                </div> */}

            </div>
        </>
    )
}

export default Question
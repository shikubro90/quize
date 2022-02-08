import CheackBox from "./CheackBox"
import classes from "../styles/Answers.module.css"
const Answers = () =>{
    return(
        <div className={classes.answers}> 
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
            <CheackBox type="checkbox" className={classes.answer} text={" One more hope"} />
        </div>
    )
}

export default Answers
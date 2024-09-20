import clsx from "clsx"
import css from "./Options.module.css"

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {

    return (
        <div className={clsx(css.btnWrapper)}>
            <button className={clsx(css.btn)} type="button" onClick={() => updateFeedback("good")}>Good</button>
            <button className={clsx(css.btn)} type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={clsx(css.btn)} type="button" onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        </div>
    )
}

export default Options
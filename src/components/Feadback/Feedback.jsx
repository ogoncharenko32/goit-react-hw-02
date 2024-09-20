import css from "./Feedback.module.css"
import clsx from "clsx"

const Feedback = ({ good, bad, neutral, totalFeedback, positiveFeedback }) => {
    return (
        <>
            <p className={clsx(css.text)}>Good: { good }</p>
            <p className={clsx(css.text)}>Neutral: { neutral }</p>
            <p className={clsx(css.text)}>Bad: { bad }</p>
            <p className={clsx(css.text)}>Total: {totalFeedback}</p>
            <p className={clsx(css.text)}>Positive: { positiveFeedback }%</p>
        </>
    )
}

export default Feedback
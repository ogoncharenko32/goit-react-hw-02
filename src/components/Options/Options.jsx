const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {

    return (
        <>
            <button type="button" onClick={() => updateFeedback("good")}>Good</button>
            <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
        </>
    )
}

export default Options
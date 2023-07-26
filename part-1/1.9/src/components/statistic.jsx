

const Statistic = ({ good, neutral, bad }) => {
    if(good || neutral || bad)
    {
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>All: {good+neutral+bad}</p>
                <p>Average: {(good+neutral+bad)/3}</p>
                <p> Positive: {0 | (((good) / (good+neutral+bad) )* 100)}</p>     
            </div>
        )
    }
    else{
        return (
            <p>No feedback given</p>
        )
    }
}

export default Statistic;
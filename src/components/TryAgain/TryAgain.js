import './TryAgain.css';

export const TryAgain = ({triggerTryAgain,words,characters,mistakes}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                {/* Test Results */}
                <p><b>Characters:</b> {characters}</p>
                <p><b>Mistakes:</b> {mistakes}</p>
                <p><b>Speed:</b> {words}</p>
            </div>

            <button onClick={()=>triggerTryAgain()} className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}
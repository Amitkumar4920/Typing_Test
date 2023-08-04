import { ChallengeDetailsCard } from '../ChallengeDetailsCard/ChallengeDetailsCard';
import { TypingChallenge } from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

export const TypingChallengeContainer = (
    {handleOnType,
        timerValue,
        selectedParagraph,
        words,
        characters,
        mistakes,timerStarted}
) => {
    return (
        <div className="typing-challenge-container">
                <h1>This is the typing challenge</h1>
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard
                    cardName="Words"
                    cardValue={words}
                />

                {/* Characters Typed */}
                <ChallengeDetailsCard
                    cardName="Characters"
                    cardValue={characters}
                />


                {/* Mistakes */}
                <ChallengeDetailsCard
                    cardName="Mistakes"
                    cardValue={mistakes}
                />

            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
            <TypingChallenge
                selectedParagraph={selectedParagraph}
                timerStarted={timerStarted}
                timerValue={timerValue}
                handleOnType={handleOnType}
            />
            

            </div>
        </div>
    )
}
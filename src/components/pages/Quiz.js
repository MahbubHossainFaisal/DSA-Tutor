import React from 'react'
import Answers from '../quiz/Answers'
import ProgressBar from '../quiz/ProgressBar'
import MiniPlayer from '../quiz/MiniPlayer'
const Quiz = () => {
    return (
        <React.Fragment>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </React.Fragment>
    )
}

export default Quiz

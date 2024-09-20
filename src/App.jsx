import { useState, useEffect } from 'react'
import './App.css'
import Feedback from './components/Feadback/Feedback'
import Options from './components/Options/Options'
import Description from './components/Description/Description'
import Notification from './components/Notification/Notification'

function App() {

  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem("saved-feedbacks"));
    if (savedFeedbacks !== null) {
      return savedFeedbacks;
    }
    return ({
        good: 0,
        neutral: 0,
        bad: 0
    })
  })

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
      window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks))
  })
  
  const updateFeedback = (feedbackType) => {
    
    setFeedbacks({
      ...feedbacks,
			[feedbackType]: feedbacks[feedbackType] + 1
    });
    
  }
  const resetFeedback = () => {
      setFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0
		});
  }

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback > 0 ?
        <Feedback
          good={feedbacks.good}
          bad={feedbacks.bad}
          neutral={feedbacks.neutral}
          totalFeedback={totalFeedback}
          positiveFeedback={Math.round((good / totalFeedback) * 100)}
        /> : <Notification />
      }
      
    </>
  )
}

export default App

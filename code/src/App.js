import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const time = 10
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(time)
  const [countdown, setCountdown] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  function handleChange(event) {
      const {value} = event.target
      setText(value)
  }
  
  function countCharacters(text) {
      const characters = text.split("")
      return characters.length
  }
  
  function start() {
      setCountdown(true)
      setTimeRemaining(time)
      setText("")
  }
  
  function end() {
      setCountdown(false)
      setWordCount(countCharacters(text))
  }
  

  useEffect(() => {

      setWordCount(countCharacters(text))
  })

  
  useEffect(() => {
          if(countdown === true && timeRemaining > 0) {
              setTimeout(() => {
                  setTimeRemaining(time => time - 1)
              }, 1000)
          } else if(timeRemaining === 0) {end()
      }
  }, [timeRemaining, countdown])
  
  return (
      <div>
          <h1>Measure your typing speed!</h1>
          <h2> Hit the start button, click in the text area, and write as many characters as you can in 10 seconds!</h2>
          <textarea
              onChange={handleChange}
              value={text}
              disabled={!countdown}
          />
          <h2>Seconds remaining: {timeRemaining}</h2>
          <button 
              onClick={start}
              disabled={countdown}
          >Start</button>
          <h1>Number of characters: {wordCount}</h1>
      </div>
  )
}

export default App;

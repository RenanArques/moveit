import { useState, useEffect, useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Time, Button } from '../styles/components/Countdown'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)


  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <>
      <Time>
        <div>
          <span>{minuteLeft}</span><span>{minuteRight}</span>
        </div>
        <span className="separator">:</span>
        <div>
          <span>{secondLeft}</span><span>{secondRight}</span>
        </div>
      </Time>

      { hasFinished
        ?
        <Button type="button" onClick={resetCountdown} disabled>
          Ciclo Encerrado
        </Button>
        :
        isActive
          ?
          <Button type="button" onClick={resetCountdown} active>
            Abandonar ciclo
          </Button>
          :
          <Button type="button" onClick={startCountdown}>
            Iniciar um ciclo
          </Button>
      }

    </>
  )
}
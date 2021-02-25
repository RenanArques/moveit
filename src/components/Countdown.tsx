import { useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext'

import { Time, Button } from '../styles/components/Countdown'

export function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
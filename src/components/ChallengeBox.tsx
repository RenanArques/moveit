import { useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Wrapper, ChallengeActive, ChallengeNotActive } from '../styles/components/ChallengeBox'

export function ChallengeBox() {
  const { resetCountdown } = useContext(CountdownContext)
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = useContext(ChallengesContext)

  function challengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function challengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Wrapper>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className="challengeFailedButton"
              type="button"
              onClick={challengeFailed}
            >
              Falhei
            </button>
            <button
              className="challengeSucceededButton"
              type="button"
              onClick={challengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
          </ChallengeNotActive>
        )}
    </Wrapper>
  )
}
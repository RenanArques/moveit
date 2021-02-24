import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Wrapper } from '../styles/components/Profile'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <Wrapper>
      <img src="https://github.com/renanarques.png" alt="Renan Arques profile picture" />

      <div>
        <strong>Renan Arques</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Wrapper>
  )
}
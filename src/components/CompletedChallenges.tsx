import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Wrapper } from '../styles/components/CompletedChallenges'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Wrapper>
  )
}
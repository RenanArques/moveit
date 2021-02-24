import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Wrapper, ProgressBar } from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const progress = `${Math.round(currentExperience * 100) / experienceToNextLevel}%`

  return (
    <Wrapper>
      <span>0 xp</span>
      <ProgressBar {...{ progress }}>
        <div />
        {currentExperience ? <span>{currentExperience} xp</span> : null}
      </ProgressBar>
      <span>{experienceToNextLevel} xp</span>
    </Wrapper>
  )
}
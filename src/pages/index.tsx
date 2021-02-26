import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { Wrapper } from '../styles/pages/Home'
import { Profile } from '../components/Profile'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { ExperienceBar } from '../components/ExperienceBar'
import { CompletedChallenges } from '../components/CompletedChallenges'

export default function Home({ level, currentExperience, challengesCompleted }) {
  return (
    <>
      <Head>
        <title>Moveit</title>
      </Head>
      <ChallengesProvider {...{
        level,
        currentExperience,
        challengesCompleted
      }}
      >
        <Wrapper>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Wrapper>
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
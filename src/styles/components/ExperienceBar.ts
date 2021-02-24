import styled from 'styled-components'

interface ProgressBarProps {
  progress: string
}

export const Wrapper = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

export const ProgressBar = styled.div<ProgressBarProps>`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.grayLine};
  margin: 0 1.5rem;
  position: relative;

  div {
    width: ${props => props.progress};
    margin: 0;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.green};
  }

  span {
    left: ${props => props.progress};
    position: absolute;
    top: 0.8rem;
    transform: translateX(-50%);
  }
`
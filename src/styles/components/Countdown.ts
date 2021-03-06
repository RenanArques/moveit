import styled from 'styled-components'

interface ButtonProps {
  active?: boolean
}

export const Time = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${props => props.theme.title};

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.white};
    box-shadow: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  span.separator {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${
    props => props.active 
      ? props.theme.white 
      : props.theme.blue
  };

  color: ${
    props => props.active 
      ? props.theme.title 
      : props.theme.white
  };

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: ${
    props => props.active 
      ? props.theme.red 
      : props.theme.darkBlue
    };

    color: ${props => props.theme.white};
  }

  &:disabled {
    background: ${props => props.theme.white};
    color: ${props => props.theme.text};
    cursor: not-allowed;
  }
`
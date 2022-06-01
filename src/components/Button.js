import styled from 'styled-components';
import Colors from './Colors';

export default styled.button`
  width: 40px;
  height: 40px;
  padding: 13px 0;
  border: none;
  background-color: ${Colors['dark-blue']};
  border-radius: 50%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    padding: 18px 0;
  }

  &.choice {
    color: ${Colors['light-grey']};
    cursor: pointer;
    :hover {
      background-color: ${Colors.orange};
      color: ${Colors.white};
    }

    &.current {
      color: ${Colors.white};
      background-color: ${Colors['medium-grey']};
    }
  }
`;

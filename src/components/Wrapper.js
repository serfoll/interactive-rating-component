import styled from 'styled-components';
import Colors from './Colors';

export default styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 330px;
  height: 400px;
  left: calc(50% - 330px / 2);
  top: calc(50% - 400px / 2);

  @media (min-width: 768px) {
    width: 420px;
    height: 420px;
    left: calc(50% - 420px / 2);
    top: calc(50% - 420px / 2);
  }

  border-radius: 25px;
  padding: 40px;
  background: radial-gradient(
    at 50% -25%,
    ${Colors['dark-blue']} 30px,
    ${Colors['gradient-dark-blue']}
  );

  &.survey-wrapper {
    display: ${(props) => props.submited};
  }

  &.thank-you-wrapper {
    z-index: -1;
  }
`;

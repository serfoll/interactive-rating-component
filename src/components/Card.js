import styled from 'styled-components';
import Colors from './Colors';

export default styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.thank-you {
    align-items: center;
    p {
      text-align: center;
    }
  }
  h2 {
    font-weight: 700;
  }

  p {
    margin-top: -20px;
    color: ${Colors['medium-grey']};
    line-height: 22px;
  }
`;

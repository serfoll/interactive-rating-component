import Card from './Card';
import styled from 'styled-components';

import thankYouImg from '../images/illustration-thank-you.svg';
import Wrapper from './Wrapper';
import Colors from './Colors';

const Image = styled.img`
  width: 150px;
`;

const Rating = styled.div`
  padding: 10px 15px;
  border-radius: 120px;
  background-color: ${Colors['dark-blue']};
  font-size: 15px;
  color: ${Colors.orange};
`;

const ThankYou = ({ rating }) => {
  return (
    <Wrapper className="thank-you-wrapper">
      <Card className="thank-you">
        <Image src={thankYouImg} alt="thank you illustration" />
        <Rating>You selected {rating} out of 5</Rating>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </Card>
    </Wrapper>
  );
};

export default ThankYou;

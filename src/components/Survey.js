import styled from 'styled-components';
import { useState } from 'react';

//costum components
import Card from './Card';
import Colors from './Colors';
import Button from './Button';
import ThankYou from './ThankYou';
import Wrapper from './Wrapper';

//images
import starIcon from '../images/icon-star.svg';

const Sumbit = styled.div`
  width: 100%;
  padding: 14px 0;
  border: none;
  border-radius: 30px;
  color: ${Colors.white};
  background-color: ${Colors.orange};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background-color: ${Colors.white};
    color: ${Colors.orange};
  }
`;

const Choices = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Survey = () => {
  const [rating, setRating] = useState(0);
  const [hideSurvey, setHideSurvey] = useState(null);

  const ratingController = (e) => {
    e.preventDefault();
    let currClasses;
    //gather all choice buttons
    const btns = document.querySelectorAll('.choice');

    //fake radio button effect
    for (let i = 0; i < btns.length; i++) {
      if (btns[i] !== e.target) {
        //get the current classes
        currClasses = btns[i].className.split(' ');
        //remove current class
        const cIndex = currClasses.indexOf('current');
        //remove current if exists
        if (cIndex !== -1) {
          currClasses.pop();
        }
        //set classes
        btns[i].className = currClasses.join(' ');
      } else {
        btns[i].className += ' current';
      }
    }
    //set rating value
    setRating(e.target.value);
  };

  const submitRating = (e) => {
    e.preventDefault();
    setHideSurvey('none');
  };

  return (
    <>
      <Wrapper className="survey-wrapper" submited={hideSurvey}>
        <Card>
          <Button>
            <img src={starIcon} alt="star icon" />
          </Button>
          <h2> How did we do? </h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Choices>
            <Button
              className="choice"
              value="1"
              onClick={(e) => ratingController(e)}
            >
              1
            </Button>
            <Button
              className="choice"
              value="2"
              onClick={(e) => ratingController(e)}
            >
              2
            </Button>
            <Button
              className="choice"
              value="3"
              onClick={(e) => ratingController(e)}
            >
              3
            </Button>
            <Button
              className="choice"
              value="4"
              onClick={(e) => ratingController(e)}
            >
              4
            </Button>
            <Button
              className="choice"
              value="5"
              onClick={(e) => ratingController(e)}
            >
              5
            </Button>
          </Choices>
          <Sumbit className="submit" onClick={(e) => submitRating(e)}>
            submit
          </Sumbit>
        </Card>
      </Wrapper>
      <ThankYou rating={rating} />
    </>
  );
};

export default Survey;

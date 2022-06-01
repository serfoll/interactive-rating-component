import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Survey from './Survey';

const Attribution = styled.div`
  font-size: 12px;
  text-align: center;
  position: absolute;
  left: calc(50% - 300px / 2);
  bottom: 40px;
  a {
    color: hsl(228, 45%, 44%);
    :hover {
      color: ${Colors.orange};
    }
  }

  @media (min-width: 768px) {
    font-size: 15px;
    left: calc(50% - 330px / 2);
  }
`;

const Layout = () => {
  return (
    <>
      <Survey />
      <Attribution>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/serfoll">
          Sergio Follyvi
        </a>
        .
      </Attribution>
    </>
  );
};

export default Layout;

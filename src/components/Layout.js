import React from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import Survey from './Survey';

const Attribution = styled.div`
  min-width: 250px;
  font-size: 11px;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 250px / 2);
  a {
    color: hsl(228, 45%, 44%);
    :hover {
      color: ${Colors.orange};
    }
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
        . Coded by <a href="#">Sergio Follyvi</a>.
      </Attribution>
    </>
  );
};

export default Layout;

import React from 'react';
import styled from 'styled-components';

const WishlistButtonStyled = styled.button`
color: #a3a3a3;
background: #2e2f2d;
height: 24.86px;
border-radius: 2px;
width: 95%;
margin: 0 auto;
`;

const WishlistButton = (props) => {
  return (

    <WishlistButtonStyled>Add to Wishlist</WishlistButtonStyled>

  );
};

export default WishlistButton;
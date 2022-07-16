import React from 'react';
import styled from 'styled-components';
 const Div = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 50px;
 height: 100vh;
 width: 100%;
 `

const form = () => {
  return (
    <Div>Your Request has been Submitted !</Div>
  )
}

export default form
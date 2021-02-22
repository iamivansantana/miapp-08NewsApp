import styled from '@emotion/styled'
import React from 'react'

const Footer = ({fecha}) => {
    return (
        <>
          <Foot>
            <p>Una producción de Ivan Santana &copy; {fecha} </p>    
          </Foot>  
        </>
    )
}


export default Footer

//styled
const Foot = styled.footer`
  background-color: lightgrey;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 40px;
`;

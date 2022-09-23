import styled from 'styled-components'

export const ImageContainer = styled.div`
  margin: auto;
  max-width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align:center;
  padding-top: 30px;
  gap:20px;

  @media screen and (max-width: 1390px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width:60%;
  }

  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr 1fr;
    max-width:60%;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width:60%;
  }
`

export const ImageWrapper = styled.div`
  padding-top:40px;
 
`

export const ImageText = styled.p `
  font-size: 14px;
` 

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  padding-top:20px;

  @media screen and (max-width: 1450px) {
    width:15rem;
    height: 15rem;
    
  }


  &:hover{
    -moz-transform: scale(1.1);
	  -webkit-transform: scale(1.1);
	  transform: scale(1.1);
  }
` 
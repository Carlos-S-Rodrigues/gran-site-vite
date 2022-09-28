import React, {useState} from 'react'
import { PageWrapper, ButtonStyle, ButtonStyle2, ButtonWrapper} from './ProductButtons.elements'

const ProductButtons = () => {

  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  const handleClick = event =>{
    setToggle(current => !current)
    setToggle2(false)
    
  }

  const handleClick2 = event =>{
    setToggle(false)
    setToggle2(current => !current)
    
  }

  

  return (
    <>
      <PageWrapper>
        <ButtonStyle onClick={() => handleClick()}>Pedras Naturais</ButtonStyle>
        <ButtonStyle onClick={() => handleClick2()}>Pedras industrializadas</ButtonStyle>
      
        {toggle && (
          <>
            <ButtonWrapper>
              <ButtonStyle2>Granitos</ButtonStyle2>
              <ButtonStyle2>Marmores</ButtonStyle2>
              <ButtonStyle2>Pedras Exóticas</ButtonStyle2>
            </ButtonWrapper>
          </>
        )}

        {toggle2 && (
          <>
            <ButtonWrapper>
              <ButtonStyle2>Dekton</ButtonStyle2>
              <ButtonStyle2>Nanoglass e Primes</ButtonStyle2>
              <ButtonStyle2>Silestone</ButtonStyle2>
            </ButtonWrapper>
          </>
        )}
      </PageWrapper>



    
    </>
  )
}

export default ProductButtons
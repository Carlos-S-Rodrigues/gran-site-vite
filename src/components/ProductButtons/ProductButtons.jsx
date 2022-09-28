import React, {useState} from 'react'
import { PageWrapper, ButtonStyle, ButtonStyle2, ButtonWrapper} from './ProductButtons.elements'

const ProductButtons = () => {

  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(false)



  return (
    <>
      <PageWrapper>
        <ButtonStyle onClick={() => setToggle(!toggle)}>Pedras Naturais</ButtonStyle>
        <ButtonStyle onClick={() => setToggle2(!toggle2)}>Pedras industrializadas</ButtonStyle>
      
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
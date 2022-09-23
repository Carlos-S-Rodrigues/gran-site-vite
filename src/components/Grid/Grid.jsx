import React from 'react'
import { ImageContainer, ImageWrapper, Image, ImageText } from './Grid.elements'

function Grid() {
  return (
    <>
      <ImageContainer>
        <ImageWrapper>
          <ImageText>Nome da Pedra</ImageText>
          <Image></Image>
        </ImageWrapper>

        <ImageWrapper>
          <ImageText>Nome da Pedra</ImageText>
          <Image></Image>
        </ImageWrapper>

        <ImageWrapper>
          <ImageText>Nome da Pedra</ImageText>
          <Image></Image>
        </ImageWrapper>

        <ImageWrapper>
          <ImageText>Nome da Pedra</ImageText>
          <Image></Image>
        </ImageWrapper>
      </ImageContainer>
    </>
  )
}

export default Grid
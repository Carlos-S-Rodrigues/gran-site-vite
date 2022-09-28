import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import Pricing from '../../components/Pricing/Pricing'

import { homeObjOne, homeObjTwo, homeObjThree} from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      
      
    </>
  )
}

export default Home

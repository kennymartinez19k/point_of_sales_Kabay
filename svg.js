import React from 'react'
import { SvgXml } from 'react-native-svg'

export const SvgWaves = () => {
  const svg = `<?xml version="1.0" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4054F5" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,138.7C320,107,400,53,480,58.7C560,64,640,128,720,160C800,192,880,192,960,170.7C1040,149,1120,107,1200,106.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>`
  const Waves = () => <SvgXml xml ={svg} width='50%' height='100%' />;
  
  return <Waves/>
}

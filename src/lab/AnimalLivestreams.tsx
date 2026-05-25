import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from './Scene'
import { OrbitControls } from '@react-three/drei'

const Wrapper = () => {
  return <Canvas>
    <ambientLight color={'white'} intensity={10}/>
    <Model />
    <OrbitControls />
  </Canvas>
}

export default Wrapper
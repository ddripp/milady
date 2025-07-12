import {useRef, useEffect } from 'react'

import mewScene from '../assets/3d/mew.glb'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'

const Mew = () => {
  const mewRef = useRef();
  const { scene, animations } = useGLTF(mewScene);
  const { actions } = useAnimations(animations, mewRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    mewRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 +2

    if(mewRef.current.position.x >  camera.position.x + 20) {
      mewRef.current.rotation.y = 5.5;
    } else if(mewRef.current.position.x < camera.position.x - 7) {
      mewRef.current.rotation.y = 2.5;
    }

    if(mewRef.current.rotation.y === 2.5) {
      mewRef.current.position.x += .03;
      mewRef.current.position.z -= .03;
    } else {
      mewRef.current.position.x -= .03;
      mewRef.current.position.z += .03;
    }
  })
  
  return (
    <mesh 
    rotation={[0,5.5,0]}
    position={[-5,2,0]} 
    scale={[.5, .5, .5]} 
    ref={mewRef}
    >
      <primitive object={scene} />  
    </mesh>
  )
}

export default Mew
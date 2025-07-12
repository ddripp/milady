import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import miladyScene from '../assets/3d/milady.glb';

const Milady = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(miladyScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    //console.log({isRotating});
    if(isRotating) {
      //actions['Take 001'].play();
    } //else {
      //actions['Take 001'].play();
    //}
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>
        <primitive object = {scene} />
    </mesh>
  )
}

export default Milady
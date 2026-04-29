import '../App.css'
import{useFrame} from '@react-three/fiber'
import {useTexture} from '@react-three/drei'
import * as THREE from 'three'
import { div } from 'three/tsl'


const cylinder = () => {
    let texture = useTexture("./projects.png")
    useFrame((state, delta) => {
        state.scene.rotation.y += delta/2
    })

  return (
      <mesh rotation={[0, 1.4, .5]}>
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]}/>
        <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide}/>
        </mesh>
  )
}

const Project = cylinder

export default Project

import { Suspense } from 'react'
import * as THREE from 'three'
// import useAppStore from './store/store'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Leva } from 'leva'
import { OrbitControls } from '@react-three/drei'
// import { useControls } from 'leva'

const development = true

export default function App() {
  // const { bears } = useAppStore()

  // const data = useControls({
  //   test: { value: 0, min: 0, max: 10, step: 0.1 },
  // })

  return (
    <>
      <Canvas
        performance={{ current: 1, min: 0.1, max: 1, debounce: 200 }}
        dpr={[1.5, 2]}
        gl={{
          antialias: true,
          alpha: false,
          toneMappingExposure: 0.9,
          toneMapping: THREE.ReinhardToneMapping,
          powerPreference: 'high-performance',
        }}
        camera={{
          near: 0.1,
          far: 60,
          fov: 75,
        }}
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'fixed',
          top: '0',
          left: '0',
        }}
        onCreated={(canvas) => {
          canvas.gl.setClearColor('#fff', 1)
        }}
      >
        <Suspense fallback={null}>
          {development && <Perf position="bottom-left" />}
          <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial wireframe color="grey" />
          </mesh>
          <OrbitControls />
          <ambientLight />
        </Suspense>
      </Canvas>
      <Leva hidden={!development} />
    </>
  )
}

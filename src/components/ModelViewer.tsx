import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { Suspense } from 'react'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export function ModelViewer({
  src = '/halter.gltf',
  height = 'h-[500px] md:h-[600px]',
}: {
  src?: string
  height?: string
}) {
  return (
    <div
      className={`w-full ${height} rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900/50`}
    >
      <Canvas
        camera={{ position: [0, 0.15, 0.35], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-3, 3, -3]} intensity={0.4} />
          <Model url={src} />
          <ContactShadows
            position={[0, -0.05, 0]}
            opacity={0.4}
            scale={0.5}
            blur={2}
          />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={0.15}
          maxDistance={1}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  )
}

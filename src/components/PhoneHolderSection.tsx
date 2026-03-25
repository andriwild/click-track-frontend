import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { Suspense } from 'react'
import { getTranslations, type Locale } from '../i18n'

function Model() {
  const { scene } = useGLTF('/halter.gltf')
  return <primitive object={scene} />
}

function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-zinc-300 border-t-emerald-500 rounded-full animate-spin" />
    </div>
  )
}

export function PhoneHolderSection({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).phoneHolder

  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 text-zinc-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[650px] text-zinc-400 md:text-xl/relaxed font-medium">
            {t.description}
          </p>
        </div>

        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-zinc-200/20 bg-gradient-to-b from-zinc-100 to-zinc-300">
          <Suspense fallback={<Spinner />}>
            <Canvas
              camera={{ position: [0, 0.15, 0.35], fov: 40 }}
              gl={{ antialias: true }}
            >
              <color attach="background" args={['#e4e4e7']} />
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <directionalLight position={[-3, 3, -3]} intensity={0.5} />
              <Model />
              <ContactShadows
                position={[0, -0.05, 0]}
                opacity={0.3}
                scale={0.5}
                blur={2.5}
              />
              <Environment preset="city" />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={0.15}
                maxDistance={1}
                autoRotate
                autoRotateSpeed={1.5}
              />
            </Canvas>
          </Suspense>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/70 border border-zinc-300/50 backdrop-blur-sm text-xs text-zinc-500">
            {t.hint}
          </div>
        </div>
      </div>
    </section>
  )
}

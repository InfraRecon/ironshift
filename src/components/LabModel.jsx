import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';

const MODEL_URL = `${process.env.PUBLIC_URL}/assets/models/lab-model.glb`;
useGLTF.preload(MODEL_URL);

// -------------------
// Model component
function Model({ controlsRef }) {
  const gltf = useGLTF(MODEL_URL);
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (!ref.current) return;

    const box = new Box3().setFromObject(ref.current);
    const center = new Vector3();
    const size = new Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Center model
    ref.current.position.sub(center);

    // Scale
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.5 / maxDim;
    ref.current.scale.setScalar(scale);

    // Update controls target
    const scaledBox = new Box3().setFromObject(ref.current);
    const scaledCenter = new Vector3();
    scaledBox.getCenter(scaledCenter);

    if (controlsRef?.current) {
      controlsRef.current.target.copy(scaledCenter);
      controlsRef.current.update();
    }

    const scaledSize = new Vector3();
    scaledBox.getSize(scaledSize);
    const distance = Math.max(scaledSize.x, scaledSize.y, scaledSize.z) * 2.2;
    camera.position.set(
      scaledCenter.x,
      scaledCenter.y + distance * 0.4,
      scaledCenter.z + distance
    );
    camera.lookAt(scaledCenter);
  }, [camera, controlsRef]);

  return <primitive ref={ref} object={gltf.scene} />;
}

// -------------------
// Loading fallback
function Loading() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

// Utility: random color
const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// -------------------
// Main LabModel
export default function LabModel() {
  const [bgColor, setBgColor] = useState('#d1d5db');
  const [pressedRandom, setPressedRandom] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true); // toggle
  const [isIdle, setIsIdle] = useState(true);
  const controlsRef = useRef();
  const idleTimeout = useRef();

  // Reset idle timer on interaction
  const resetIdle = () => {
    setIsIdle(false);
    clearTimeout(idleTimeout.current);
    idleTimeout.current = setTimeout(() => {
      setIsIdle(true);
    }, 10000); // 10 seconds of no interaction
  };

  // Random color button
  const handleRandomColor = () => {
    setPressedRandom(true);
    setBgColor(randomColor());
    setTimeout(() => setPressedRandom(false), 150);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-800 relative">

      {/* 3D Canvas */}
      <div
        className="h-96"
        onPointerDown={resetIdle}
        onPointerMove={resetIdle}
        onWheel={resetIdle}
      >
        <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }} gl={{ antialias: true }}>
          <color attach="background" args={[bgColor]} />
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, 3, -5]} intensity={0.6} />
          <Suspense fallback={<Loading />}>
            <Model controlsRef={controlsRef} />
          </Suspense>

          <OrbitControls
            ref={controlsRef}
            enableZoom
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            autoRotate={autoRotateEnabled && isIdle}
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* --------------------------
          Floating Buttons Sidebar
      -------------------------- */}
      <div className="absolute top-4 right-4 flex flex-col items-center gap-4">
        {/* Random Color Button */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={handleRandomColor}
            className={`
              w-12 h-12 rounded-full border-4 border-white flex items-center justify-center
              transition-transform duration-150
              ${pressedRandom ? 'scale-90' : 'scale-100'}
              animate-pulse
            `}
          >
            <div className="w-6 h-6 rounded-full bg-white" />
          </button>
          <span className="text-xs text-gray-300">Random Color</span>
        </div>

        {/* Color Picker Button */}
        <div className="flex flex-col items-center gap-1 relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center bg-gray-200"
          >
            🎨
          </button>
          <span className="text-xs text-gray-300">Pick Color</span>

          {showPicker && (
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="absolute top-16 w-12 h-12 p-0 border-none cursor-pointer"
            />
          )}
        </div>

        {/* Auto-Rotate Toggle Button */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => setAutoRotateEnabled((prev) => !prev)}
            className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center
              transition-transform duration-150
              ${autoRotateEnabled ? 'bg-green-500' : 'bg-red-500'}
            `}
          >
            ⟳
          </button>
          <span className="text-xs text-gray-300">Auto-Rotate</span>
        </div>
      </div>
    </div>
  );
}
